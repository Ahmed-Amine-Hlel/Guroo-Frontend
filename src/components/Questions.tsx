import { HiMiniArrowLeft, HiMiniArrowRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  // fetchCotisationsSalariales,
  fetchNetSalary,
  fetchPredictLoyer,
  fetchSectionsForStep,
  //   setNetSalaryFetchedFlag,
} from "../store/QuestionsSlice";
import { incrementStep } from "../store/StepperSlice";
import NumberInput from "./NumberInput";
import StringInput from "./StringInput";
import InputCheckBox from "./InputCheckBox";
import InputCalendar from "./InputCalendar";
import InputListBox from "./InputListBox";
import InputPercentage from "./InputPercentage";
import MultiInput from "./MultiInput";
// import InputGooglePlaces from "./InputGooglePlaces";
import InputAmount from "./InputAmount";
import InputMultiUnitNumber from "./InputMultiUnitNumber";
import { Question } from "../core/src/domain/entities/Question";
import { FadeLoader } from "react-spinners";
import { setAnswer, submitAnswersAsync } from "../store/answersSlice";
import QuestionAiBox from "./QuestionAiBox";
import { Answer } from "../core/src/domain/entities/Answer";
import { useNavigate } from "react-router-dom";
import { GurooBusinessPlanService } from "../core/src/adapters/realDependencies/GurooBusinessPlanService";
import { BusinessPlanMapper } from "../core/src/adapters/realDependencies/mappers/BusinessPlanMapper";
import { MarkBusinessPlanAsDoneUseCase } from "../core/src/usecases/MarkBusinessPlanAsDoneUseCase";
import { Block } from "../core/src/domain/entities/Block";
import { BsArrowRight } from "react-icons/bs";

type InputType =
  | "number"
  | "string"
  | "boolean"
  | "date"
  | "list"
  | "percent"
  | "MultiInput"
  | "GooglePlaces"
  | "amount"
  | "MultiUnitNumber";

const businessPlanService = new GurooBusinessPlanService(
  new BusinessPlanMapper()
);

const Questions = () => {
  const dispatch = useAppDispatch();
  const sectionStep = useAppSelector((state) => state.stepper.currentStep);
  const section = useAppSelector((state) => state.questions.section);
  const [isBackDisabled, setIsBackDisabled] = useState<boolean>(true);
  const loading = useAppSelector((state) => state.questions.loading);
  const aiResponses = useAppSelector((state) => state.questions.aiResponses);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [questionsPerPage] = useState<number>(5);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(1);

  //   console.log(section);
  //   console.log("Current Step >>>>>> ", currentStep);
  /*   console.log("Section:", section); */
  const currentBusinessPlan = useAppSelector(
    (state) => state.businessPlan.currentBusinessPlan
  );

  const currentBusinessPlanId = currentBusinessPlan?.uid;
  //console.log("Current Business Plan ID:", currentBusinessPlanId);
  const answers = useAppSelector((state) => state.answers.answers);

  const markBusinessPlanAsDoneUseCase = new MarkBusinessPlanAsDoneUseCase(
    businessPlanService
  );

  //   const hasNetSalaryBeenFetched = useAppSelector(
  //     (state) => state.questions.hasNetSalaryBeenFetched
  //   );
  //   const hasPredictLoyerBeenFetched = useAppSelector(
  //     (state) => state.questions.hasPredictLoyerBeenFetched
  //   );
  //   const hasCotisationsSalarialesBeenFetched = useAppSelector(
  //     (state) => state.questions.hasCotisationsSalarialesBeenFetched
  //   );

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

    for (let subBlock of block.blocks) {
      extractBlocksWithQuestions(subBlock, result, currentLabel);
    }
  };

  const reformatData = () => {
    const blocksWithQuestions: Block[] = [];
    if (section?.blocks) {
      for (let block of section?.blocks as Block[]) {
        extractBlocksWithQuestions(block, blocksWithQuestions);
      }
    }
    // console.log(blocksWithQuestions);
    setBlocks(blocksWithQuestions);
  };

  const renderInputComponent = (inputType: InputType, question: Question) => {
    // const handleParseObjectOptions = (optionsString: string) => {
    //   let correctedOptionsString = optionsString
    //     .replace(/(\w+):/g, '"$1":')
    //     .replace(/'/g, '"');
    //   try {
    //     return JSON.parse(correctedOptionsString);
    //   } catch (error) {
    //     console.error("Error parsing options:", error);
    //     return {};
    //   }
    // };
    const aiBoxUids: string[] = [
      "5f4800c7-e289-4885-b6bf-f5897e3850fd",
      "12732041-22ea-4fb5-af30-4a96bd4bb369",
      "e466fa89-043c-41b7-90c4-c264af9cc736",
      "24a1f8ad-ddf1-4dcf-9878-f3bf3e6c3be5",
      "acca41fb-1edc-4dba-a13d-bc47d5821b8f",
      "dfddfb23-5480-4676-92e2-8be02faef6d8",
      "97648262-8f5a-4629-8e6c-7bdcd1dd7b40",
      "eb92aafb-852c-4cbe-8bc6-9ee444d12005",
      "03688503-02a9-4df7-8c60-4b16c8d54d4b",
      "74c48ae7-5e75-4d8d-88c4-836d21f52816",
      "08f64241-f6f1-4464-ac41-df644f8b6041",
      "8cd87eca-28e2-4af9-afe7-c472e5451bcf",
      "60aa9c59-d53b-4276-99b0-28c95d5948fc",
      "10fedd72-b6ca-41d6-abce-e7a3a69cd885",
      "e2b91075-2585-4658-b6ce-30a17fba368b",
    ];

    const hasAIPinkBorder: boolean = aiBoxUids.includes(question.uid) ? true : false;

    const handleParseObjectOptions = (optionsString: string) => {
      let correctedOptionsString = optionsString
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
            value={answers[question.uid] || "0"}
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "string":
        return (
          <StringInput
            value={answers[question.uid] || ""}
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "boolean":
        return (
          <InputCheckBox
            value={answers[question.uid] === "true"}
            onChange={(boolValue) => handleInputChange(question.uid, boolValue)}
          />
        );
      case "date":
        return (
          <InputCalendar
            value={answers[question.uid]}
            onChange={(date) => {
              const formattedDate = date ? date.format("DD/MM/YYYY") : null;
              handleInputChange(
                question.uid,

                formattedDate
              );
            }}
          />
        );
      case "list":
        const parsedOptions = question.options
          ? question.options
            .slice(1, -1)
            .split(",")
            .map((str) => str.trim())
            .map((option) => ({ name: option }))
          : [];
        return (
          <InputListBox
            value={
              answers[question.uid]
                ? { name: answers[question.uid] }
                : parsedOptions[0]
            }
            options={parsedOptions}
            onChange={(selectedOption) =>
              handleInputChange(question.uid, selectedOption.name)
            }
          />
        );
      case "percent":
        return (
          <InputPercentage
            coloredAiBorder={hasAIPinkBorder}
            value={answers[question.uid]}
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "MultiInput":
        const parsedOptionsForMultiInput = handleParseObjectOptions(
          question.options || ""
        );
        return (
          <MultiInput
            value={answers[question.uid] ? answers[question.uid] : ""}
            options={parsedOptionsForMultiInput}
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "GooglePlaces":
        return (
          <StringInput
            value={answers[question.uid] || ""}
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "amount":
        return (
          <InputAmount
            coloredAiBorder={hasAIPinkBorder}
            value={answers[question.uid] ?? 0}
            onChange={(value) =>
              handleInputChange(question.uid, value.toString())
            }
          />
        );
      case "MultiUnitNumber":
        return (
          <InputMultiUnitNumber
            value={answers[question.uid]}
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      default:
        return <input type="text" placeholder="Unsupported input type" />;
    }
  };

  const handleInputChange = (questionUid: string, value: any) => {
    dispatch(
      setAnswer({
        questionUid,
        value,
        businessPlanId: currentBusinessPlanId,
      })
    );
  };

  //   const handleNext = () => {
  //     /* Show Questions */
  //     /* console.log("Questions >>>>>> ", ); */

  //     /* Dispatch answers */

  //     /* -------------------------------------------------------------- */

  //     const formattedAnswers = blocks[currentStep - 1]?.questions
  //       .slice(currentQuestionIndex, currentQuestionIndex + questionsPerPage)
  //       .map((question: Question) => ({
  //         value: answers[question.uid],
  //         questionId: question.uid,
  //         businessPlanId: currentBusinessPlanId,
  //       }));

  //     console.log("Formatted Answers:", formattedAnswers);
  //     // console.log(answers);

  //     if (formattedAnswers && currentBusinessPlanId) {
  //       dispatch(submitAnswersAsync(formattedAnswers as Answer[]));
  //     } else {
  //       console.error("Failed to format answers or missing business plan ID.");
  //     }

  //     /* ------------------------------------------------------------- */

  //     const currentBlockQuestions = blocks[currentStep - 1]?.questions || [];
  //     if (
  //       currentQuestionIndex + questionsPerPage <
  //       currentBlockQuestions.length
  //     ) {
  //       // There are more questions in the current block to display
  //       setCurrentQuestionIndex((prev) => prev + questionsPerPage);
  //     } else {
  //       // Move to the next block and reset the question index
  //       if (currentStep < blocks.length) {
  //         setCurrentStep((prev) => prev + 1);
  //         setCurrentQuestionIndex(0);
  //       } else {
  //         dispatch(incrementStep());
  //       }
  //     }

  //     triggerApiCalls();
  //   };
  const handleNext = async () => {
    // Prepare the answers for dispatch
    const formattedAnswers = blocks[currentStep - 1]?.questions
      .slice(currentQuestionIndex, currentQuestionIndex + questionsPerPage)
      .map((question: Question) => ({
        value: answers[question.uid],
        questionId: question.uid,
        businessPlanId: currentBusinessPlanId,
      }));

    console.log("Formatted Answers:", formattedAnswers);

    if (formattedAnswers && currentBusinessPlanId) {
      dispatch(submitAnswersAsync(formattedAnswers as Answer[]));
    } else {
      console.error("Failed to format answers or missing business plan ID.");
    }

    const currentBlockQuestions = blocks[currentStep - 1]?.questions || [];
    if (
      currentQuestionIndex + questionsPerPage <
      currentBlockQuestions.length
    ) {
      // There are more questions in the current block to display
      setCurrentQuestionIndex((prev) => prev + questionsPerPage);
    } else {
      if (currentStep < blocks.length) {
        // Move to the next block and reset the question index
        setCurrentStep((prev) => prev + 1);
        setCurrentQuestionIndex(0);
      } else {
        // Check if we're on the last section
        const isLastSection = sectionStep === 7; // Adjust the number if 7 is not the last section
        if (isLastSection) {
          await handleLastSectionCompletion();
          return;
        }
        dispatch(incrementStep());
      }
    }

    triggerApiCalls();
  };

  const handleLastSectionCompletion = async () => {
    if (currentBusinessPlanId) {
      try {
        await markBusinessPlanAsDoneUseCase.execute(currentBusinessPlanId);
        navigate("/payment");
      } catch (error) {
        console.error("Error marking the business plan as done:", error);
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

  useEffect(() => {
    reformatData();
  }, [section]);

  useEffect(() => {
    setIsBackDisabled(currentStep === 1 && currentQuestionIndex === 0);
  }, [currentStep, currentQuestionIndex]);

  useEffect(() => {
    dispatch(fetchSectionsForStep(sectionStep));
    setCurrentStep(1);
    setCurrentQuestionIndex(0);
  }, [
    dispatch,
    sectionStep,
    fetchSectionsForStep,
    setCurrentStep,
    setCurrentQuestionIndex,
  ]);

  //   useEffect(() => {
  //     const town = answers["0f7b07a6-0a75-4df1-8e11-4e164712c7b4"];
  //     console.log("Town:", town);
  //     if (town && !hasNetSalaryBeenFetched) {
  //       dispatch(fetchNetSalary(town));
  //       dispatch(setNetSalaryFetchedFlag(true));
  //     }
  //   }, [answers, dispatch, hasNetSalaryBeenFetched]);

  //   console.log("AI Responses:", aiResponses);

  const triggerApiCalls = () => {
    // Triggering the fetchNetSalary API call
    const town = answers["0f7b07a6-0a75-4df1-8e11-4e164712c7b4"];
    if (town) {
      dispatch(fetchNetSalary(town));
    }

    // Triggering the fetchPredictLoyer API call
    const pays = answers["43e05de9-0bf4-47f7-8483-224179cd475f"];
    const code_postal = "70123";
    const surface = Number(answers["4481644a-646e-486f-99b3-390535dc13b4"]);
    if (pays && code_postal && surface) {
      dispatch(fetchPredictLoyer({ pays, code_postal, surface }));
    }

    // Triggering the fetchCotisationsSalariales API call
    // const gross_monthly_salary_employee1 =
    //   answers["5f4800c7-e289-4885-b6bf-f5897e3850fd"];
    // const gross_monthly_salary_employee2 =
    //   answers["12732041-22ea-4fb5-af30-4a96bd4bb369"];
    // const gross_monthly_salary_employee3 =
    //   answers["e466fa89-043c-41b7-90c4-c264af9cc736"];
    // const gross_monthly_salary_employee4 =
    //   answers["24a1f8ad-ddf1-4dcf-9878-f3bf3e6c3be5"];
    // const gross_monthly_salary_employee5 =
    //   answers["acca41fb-1edc-4dba-a13d-bc47d5821b8f"];
    // const gross_monthly_salary_employee6 =
    //   answers["dfddfb23-5480-4676-92e2-8be02faef6d8"];
    // const gross_monthly_salary_employee7 =
    //   answers["97648262-8f5a-4629-8e6c-7bdcd1dd7b40"];
    // const gross_monthly_salary_employee8 =
    //   answers["eb92aafb-852c-4cbe-8bc6-9ee444d12005"];
    // const gross_monthly_salary_employee9 =
    //   answers["03688503-02a9-4df7-8c60-4b16c8d54d4b"];
    // const gross_monthly_salary_employee10 =
    //   answers["74c48ae7-5e75-4d8d-88c4-836d21f52816"];
    // if (
    //   gross_monthly_salary_employee1 &&
    //   gross_monthly_salary_employee2 &&
    //   gross_monthly_salary_employee3
    // ) {
    //   dispatch(
    //     fetchCotisationsSalariales({
    //       gross_monthly_salary_employee1,
    //       gross_monthly_salary_employee2,
    //       gross_monthly_salary_employee3,
    //       gross_monthly_salary_employee4,
    //       gross_monthly_salary_employee5,
    //       gross_monthly_salary_employee6,
    //       gross_monthly_salary_employee7,
    //       gross_monthly_salary_employee8,
    //       gross_monthly_salary_employee9,
    //       gross_monthly_salary_employee10,
    //     })
    //   );
    // }
  };

  return (
    <div className="flex flex-col w-full sm:w-[470px] lg:w-[560px] min-[1864px]:w-[650px] h-full px-2">
      {loading || !section ? (
        <div className="flex justify-center items-center h-full">
          <FadeLoader color="#6D3B9E" />
        </div>
      ) : (
        <>
          <div className="sm:px-[40px]">
            <div className="flex items-center gap-[12px] text-[#6D3B9E] mb-[8px]">
              <div>
                <HiMiniArrowLeft
                  className={`text-[24px] ${isBackDisabled
                    ? "opacity-50 cursor-default"
                    : "hover:cursor-pointer"
                    }`}
                  onClick={!isBackDisabled ? handleBack : undefined}
                />
              </div>
              <div className="text-[24px]">{section?.labels}</div>
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
              {blocks &&
                blocks[currentStep - 1]?.questions
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
                      {aiResponses[question.uid] && (
                        <QuestionAiBox message={aiResponses[question.uid]} />
                      )}
                    </div>
                  ))}
            </div>
          </div>
          <div className="w-full flex justify-center mt-auto sm:pr-[40px] sm:pl-[35px]">
            <button
              onClick={handleNext}
              disabled={isSubmitting}
              className="w-[150px] sm:w-full flex justify-center items-center gap-[10px] md:mb-[50px] bg-gradient-to-r from-[#914FD2] from-0% to-[#946CBB] to-100% rounded-[45px] px-[35px] py-[15px] text-white hover:cursor-pointer"
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

export default Questions;
