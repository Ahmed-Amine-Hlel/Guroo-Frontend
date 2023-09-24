import { useEffect, useState } from "react";
import { HiMiniArrowLeft, HiMiniArrowRight } from "react-icons/hi2";
import { FadeLoader } from "react-spinners";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
// import QuestionAiBox from "./QuestionAiBox";
import { Block } from "../core/src/domain/entities/Block";
import { Question } from "../core/src/domain/entities/Question";
import InputAmount from "./InputAmount";
import InputCalendar from "./InputCalendar";
import InputCheckBox from "./InputCheckBox";
import InputListBox from "./InputListBox";
import InputMultiUnitNumber from "./InputMultiUnitNumber";
import InputPercentage from "./InputPercentage";
import MultiInput from "./MultiInput";
import NumberInput from "./NumberInput";
import StringInput from "./StringInput";
// import data from "../../public/data.json";
import dayjs from "dayjs";
import { BsArrowRight } from "react-icons/bs";
import { incrementStep } from "../store/StepperSlice";
import { resetAnswers, setAnswer } from "../store/answersSlice";

const EditQuestions = () => {
  const isLoadingQuestionsWithAnswers = useAppSelector(
    (state) => state.businessPlan.loadingQuestionsWithAnswers
  );
  const [isBackDisabled, setIsBackDisabled] = useState<boolean>(false);
  const questionsWithAnswers = useAppSelector(
    (state) => state.businessPlan.currentQuestionsWithAnswers
  );
  // const { businessPlanId } = useParams<{ businessPlanId: string }>();

  const dispatch = useAppDispatch();
  const currentSectionStep = useAppSelector(
    (state) => state.stepper.currentStep
  );
  //   console.log("questionsWithAnswers", questionsWithAnswers);

  //   const answersCount = useAppSelector((state) => state.answers.answers);
  //   console.log("answersCount", answersCount);

  const [blocks, setBlocks] = useState<Block[]>([]);
  const [questionsPerPage] = useState<number>(5);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(1);
  // const answers = useAppSelector((state) => state.answers.answers);
  const currentAnswers = useAppSelector((state) => state.answers.answers);
  // const [currentAnswers, setCurrentAnswers] = useState<AnswerMap>({});

  // console.log("Frais d'établissement : ", currentAnswers);

  // console.log(currentAnswers);

  // console.log("questionsWithAnswers : ", questionsWithAnswers);
  // console.log("currentAnswers :", currentAnswers);

  const extractBlocksWithQuestions = (
    block: Block,
    result: Block[] = [],
    parentLabel: string = ""
  ): void => {
    const currentLabel = parentLabel
      ? `${parentLabel}-${block.label}`
      : block.label;

    if (block.questions.length > 0) {
      const clonedBlock = { ...block, blocks: [], label: currentLabel };
      result.push(clonedBlock);
    }

    for (const subBlock of block.blocks) {
      extractBlocksWithQuestions(subBlock, result, currentLabel);
    }
  };

  const reformatData = () => {
    const blocksWithQuestions: Block[] = [];
    if (questionsWithAnswers?.blocks) {
      for (const block of questionsWithAnswers?.blocks as Block[]) {
        extractBlocksWithQuestions(block, blocksWithQuestions);
      }
    }
    // console.log(blocksWithQuestions);
    setBlocks(blocksWithQuestions);
  };

  const handleNext = () => {
    const currentBlockQuestions = blocks[currentStep - 1]?.questions || [];
    if (
      currentQuestionIndex + questionsPerPage <
      currentBlockQuestions.length
    ) {
      // There are more questions in the current block to display
      setCurrentQuestionIndex((prev) => prev + questionsPerPage);
    } else {
      // Move to the next block and reset the question index
      if (currentStep < blocks.length) {
        setCurrentStep((prev) => prev + 1);
        setCurrentQuestionIndex(0);
      } else {
        dispatch(incrementStep());
      }
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex - questionsPerPage >= 0) {
      // Go back to the previous set of questions in the current block
      setCurrentQuestionIndex((prev) => prev - questionsPerPage);
    } else {
      // Move to the previous block, and set the question index to the last set of questions of that block
      if (currentStep > 1) {
        setCurrentStep((prev) => prev - 1);
        const previousBlockQuestions = blocks[currentStep - 2]?.questions || [];
        const modulo = previousBlockQuestions.length % questionsPerPage;
        setCurrentQuestionIndex(
          modulo === 0
            ? previousBlockQuestions.length - questionsPerPage
            : previousBlockQuestions.length - modulo
        );
      }
    }
  };

  const renderInputComponent = (inputType: string, question: Question) => {
    const answerValue = currentAnswers[question.uid] as string | undefined;

    const handleParseObjectOptions = (optionsString: string) => {
      const correctedOptionsString = optionsString
        .replace(/(\w[\w\s-]*\w):/g, '"$1":')
        .replace(/‘/g, '"')
        .replace(/’/g, '"');

      try {
        return JSON.parse(correctedOptionsString);
      } catch (error) {
        console.error("Error parsing options:", error);
        console.error("Options:", correctedOptionsString);
        return {};
      }
    };

    switch (inputType) {
      case "number":
        return (
          <NumberInput
            value={answerValue}
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "string":
        return (
          <StringInput
            value={answerValue || ""}
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "boolean":
        return (
          <InputCheckBox
            value={answerValue === "true"}
            onChange={(boolValue) => handleInputChange(question.uid, boolValue)}
          />
        );
      case "date": {
        const dateValue = answerValue
          ? dayjs(answerValue, "DD/MM/YYYY")
          : undefined;

        return (
          <InputCalendar
            value={dateValue}
            onChange={(date) => {
              const formattedDate = date ? date.format("DD/MM/YYYY") : null;
              handleInputChange(question.uid, formattedDate);
            }}
          />
        );
      }
      case "list": {
        const parsedOptions = question.options
          ? question.options
              .slice(1, -1)
              .split(",")
              .map((str) => str.trim())
              .map((option) => ({ name: option }))
          : [];
        return (
          <InputListBox
            value={answerValue ? { name: answerValue } : undefined}
            options={parsedOptions}
            onChange={(selectedOption) =>
              handleInputChange(question.uid, selectedOption.name)
            }
          />
        );
      }
      case "percent":
        return (
          <InputPercentage
            value={answerValue || undefined}
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "MultiInput": {
        const parsedOptionsForMultiInput = handleParseObjectOptions(
          question.options || ""
        );

        const parsedValue = answerValue
          ? JSON.parse(answerValue.replace(/'/g, '"'))
          : {};
        console.log("Parsed value : ", parsedValue);

        return (
          <MultiInput
            value={parsedValue}
            options={parsedOptionsForMultiInput}
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      }
      case "GooglePlaces":
        return (
          <StringInput
            value={answerValue || ""}
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "amount":
        return (
          <InputAmount
            value={Number(answerValue)}
            onChange={(value) =>
              handleInputChange(question.uid, value.toString())
            }
          />
        );
      case "MultiUnitNumber":
        return (
          <InputMultiUnitNumber
            value={answerValue || undefined}
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      default:
        return <input type="text" placeholder="Unsupported input type" />;
    }
  };

  // type AnswerMap = {
  //   [key: string]: unknown;
  // };

  // useEffect(() => {
  //   const initialAnswers: AnswerMap = {};
  //   questionsWithAnswers?.blocks.forEach((block) => {
  //     block.questions.forEach((question) => {
  //       if (question.answers && question.answers[0]) {
  //         initialAnswers[question.uid] = question.answers[0].value;
  //       }
  //     });
  //   });
  //   setCurrentAnswers(initialAnswers);
  // }, [questionsWithAnswers]);

  const handleInputChange = (questionUid: string, value: unknown) => {
    dispatch(setAnswer({ questionUid, value }));
  };

  useEffect(() => {
    dispatch(resetAnswers());
    if (questionsWithAnswers?.blocks) {
      questionsWithAnswers.blocks.forEach((block) => {
        block.questions.forEach((question) => {
          if (question.answers && question.answers[0]) {
            if (question.inputType === "MultiInput") {
              // Parse the value if it's of type "MultiInput"
              try {
                const parsedValue = JSON.parse(
                  question.answers[0].value.replace(/'/g, '"')
                );
                dispatch(
                  setAnswer({
                    questionUid: question.uid,
                    value: parsedValue,
                  })
                );
              } catch (error) {
                // Handle parsing error here if needed
                console.error("Error parsing MultiInput value:", error);
              }
            } else {
              dispatch(
                setAnswer({
                  questionUid: question.uid,
                  value: question.answers[0].value,
                })
              );
            }
          }
        });
      });
    }
  }, [questionsWithAnswers, dispatch]);

  useEffect(() => {
    reformatData();
  }, [questionsWithAnswers]);

  useEffect(() => {
    setIsBackDisabled(currentStep === 1 && currentQuestionIndex === 0);
  }, [currentStep, currentQuestionIndex]);

  useEffect(() => {
    setCurrentStep(1);
    setCurrentQuestionIndex(0);
  }, [dispatch, currentSectionStep]);

  return (
    <div className="flex flex-col w-full sm:w-[470px] lg:w-[560px] min-[1864px]:w-[650px] h-full px-2 mt-[20px]">
      {isLoadingQuestionsWithAnswers ? (
        <div className="flex justify-center items-center h-full">
          <FadeLoader color="#6D3B9E" />
        </div>
      ) : (
        <>
          <div className="sm:px-[40px]">
            <div className="flex items-center gap-[12px] text-[#6D3B9E] mb-[8px]">
              <div>
                <HiMiniArrowLeft
                  className={`text-[24px] ${
                    isBackDisabled
                      ? "opacity-50 cursor-default"
                      : "hover:cursor-pointer"
                  }`}
                  onClick={!isBackDisabled ? handleBack : undefined}
                />
              </div>
              <div className="text-[24px]">{questionsWithAnswers?.labels}</div>
            </div>
            <div className="flex items-center text-[#A08FB1] text-[16px] ps-[38px] mb-[28px]">
              {blocks[currentStep - 1]?.label
                .split("-")
                .map((label: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <span className="">
                      {index > 0 &&
                      index <
                        blocks[currentStep - 1]?.label.split("-").length ? (
                        <BsArrowRight className="text-md mr-2" />
                      ) : (
                        ""
                      )}
                    </span>
                    <span key={index} className={`text-sm text-blue-300 mr-2`}>
                      {label}
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div className="overflow-y-scroll py-[5px] qb-thumb h-[560px] mb-[10px]">
            <div className="mb-10 w-full sm:px-[35px]">
              {blocks[currentStep - 1]?.questions
                .slice(
                  currentQuestionIndex,
                  currentQuestionIndex + questionsPerPage
                )
                .map((question: Question) => (
                  <div key={question.uid} className="mb-6">
                    <label className="block px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
                      {question.label}
                    </label>
                    {renderInputComponent(question.inputType, question)}
                  </div>
                ))}
            </div>
          </div>
          <div className="w-full flex justify-end mt-auto sm:pr-[40px] sm:pl-[35px]">
            <button
              onClick={handleNext}
              className="w-[150px] h-[58px] sm:w-[227px] flex justify-center items-center gap-[10px] md:mb-[50px] bg-gradient-to-r from-[#914FD2] from-0% to-[#946CBB] to-100% rounded-[45px] px-[16px] py-[10px] text-white hover:cursor-pointer"
            >
              <span className="text-[15px]">Continuer</span>
              <span className="">
                <HiMiniArrowRight className="text-[20px]" />
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EditQuestions;
