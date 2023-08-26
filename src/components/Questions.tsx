import { HiMiniArrowLeft, HiMiniArrowRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchSectionsForStep } from "../store/QuestionsSlice";
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

const Questions = () => {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector((state) => state.stepper.currentStep);
  const section = useAppSelector((state) => state.questions.section);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [currentNestedBlockIndex, setCurrentNestedBlockIndex] = useState(0);
  const [mainBlockQuestionsShown, setMainBlockQuestionsShown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;
  const [isBackDisabled, setIsBackDisabled] = useState(true);
  const loading = useAppSelector((state) => state.questions.loading);

  const currentBusinessPlan = useAppSelector(
    (state) => state.businessPlan.currentBusinessPlan
  );
  // console.log("Current Business Plan :", currentBusinessPlan);

  const currentBusinessPlanId = currentBusinessPlan?.id;
  // console.log("Current Business Plan ID:", currentBusinessPlanId);

  // const [answers, setAnswers] = useState<Record<string, any>>({});
  const answers = useAppSelector((state) => state.answers.answers);

  useEffect(() => {
    dispatch(fetchSectionsForStep(currentStep));
  }, [currentStep, dispatch]);

  const currentBlock = section?.blocks?.[currentBlockIndex];
  const nestedBlocks = currentBlock?.blocks || [];
  const isInsideNestedBlock =
    mainBlockQuestionsShown &&
    nestedBlocks.length > 0 &&
    currentNestedBlockIndex < nestedBlocks.length;
  const blockToRender = isInsideNestedBlock
    ? nestedBlocks[currentNestedBlockIndex]
    : currentBlock;

  const totalQuestions = blockToRender?.questions.length || 0;
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);
  const displayedQuestions = blockToRender?.questions.slice(
    (currentPage - 1) * questionsPerPage,
    currentPage * questionsPerPage
  );

  // const handleContinue = () => {
  //   console.log("Answers:", answers);
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   } else if (nestedBlocks.length > 0 && !mainBlockQuestionsShown) {
  //     // Main block questions have been shown, now show nested blocks
  //     setMainBlockQuestionsShown(true);
  //     setCurrentPage(1);
  //   } else {
  //     if (
  //       isInsideNestedBlock &&
  //       currentNestedBlockIndex < nestedBlocks.length - 1
  //     ) {
  //       // Move to the next nested block
  //       setCurrentNestedBlockIndex(currentNestedBlockIndex + 1);
  //       setCurrentPage(1);
  //     } else if (currentBlockIndex < (section?.blocks?.length || 0) - 1) {
  //       // Move to the next main block
  //       setCurrentBlockIndex(currentBlockIndex + 1);
  //       setMainBlockQuestionsShown(false); // Reset the flag for the new main block
  //       setCurrentNestedBlockIndex(0); // Reset nested block index
  //       setCurrentPage(1);
  //     } else {
  //       // Move to the next section
  //       dispatch(incrementStep());
  //       setCurrentBlockIndex(0);
  //       setMainBlockQuestionsShown(false);
  //       setCurrentNestedBlockIndex(0);
  //       setCurrentPage(1);
  //     }
  //   }
  // };

  const handleContinue = () => {
    console.log("Answers:", answers);
    const formattedAnswers = displayedQuestions?.map((question) => ({
      value: answers[question.id],
      questionId: question.uid,
      businessPlanId: currentBusinessPlanId,
    }));

    console.log("Formatted Answers:", formattedAnswers);

    setIsBackDisabled(false);

    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (nestedBlocks.length > 0 && !mainBlockQuestionsShown) {
      // Main block questions have been shown, now show nested blocks
      setMainBlockQuestionsShown(true);
      setCurrentPage(1);
    } else {
      if (
        isInsideNestedBlock &&
        currentNestedBlockIndex < nestedBlocks.length - 1
      ) {
        setCurrentNestedBlockIndex(currentNestedBlockIndex + 1);
        setCurrentPage(1);
      } else if (currentBlockIndex < (section?.blocks?.length || 0) - 1) {
        setCurrentBlockIndex(currentBlockIndex + 1);
        setMainBlockQuestionsShown(false); // Reset the flag for the new main block
        setCurrentNestedBlockIndex(0); // Reset nested block index
        setCurrentPage(1);
      } else {
        dispatch(incrementStep());
        setCurrentBlockIndex(0);
        setMainBlockQuestionsShown(false);
        setCurrentNestedBlockIndex(0);
        setCurrentPage(1);
      }
    }

    if (formattedAnswers && currentBusinessPlanId) {
      dispatch(submitAnswersAsync(formattedAnswers as Answer[]));
    } else {
      console.error("Failed to format answers or missing business plan ID.");
    }
  };

  const handleBack = () => {
    let newCurrentPage = currentPage;
    let newCurrentBlockIndex = currentBlockIndex;
    let newCurrentNestedBlockIndex = currentNestedBlockIndex;

    if (currentPage > 1) {
      newCurrentPage = currentPage - 1;
    } else if (isInsideNestedBlock && currentNestedBlockIndex > 0) {
      // If inside a nested block and it's not the first nested block, move to the previous nested block
      newCurrentNestedBlockIndex = currentNestedBlockIndex - 1;
      newCurrentPage = Math.ceil(
        (blockToRender?.questions?.length || 0) / questionsPerPage
      );
    } else if (currentBlockIndex > 0) {
      // If it's a main block and not the first block, move to the previous block
      newCurrentBlockIndex = currentBlockIndex - 1;
      newCurrentNestedBlockIndex = 0; // Reset nested block index
      newCurrentPage = Math.ceil(
        (blockToRender?.questions?.length || 0) / questionsPerPage
      );
    }

    setCurrentPage(newCurrentPage);
    setCurrentBlockIndex(newCurrentBlockIndex);
    setCurrentNestedBlockIndex(newCurrentNestedBlockIndex);

    if (
      newCurrentBlockIndex === 0 &&
      !isInsideNestedBlock &&
      newCurrentPage === 1
    ) {
      setIsBackDisabled(true);
    } else {
      setIsBackDisabled(false);
    }
  };

  const renderBlockLabel = () => {
    if (isInsideNestedBlock) {
      return `${currentBlock?.label} -> ${blockToRender?.label}`;
    }
    return currentBlock?.label || "Commencer maintenant";
  };

  const renderInputComponent = (inputType: InputType, question: Question) => {
    switch (inputType) {
      case "number":
        return (
          <NumberInput
            value={answers[question.id]}
            onChange={(value) => handleInputChange(question.id, value)}
          />
        );
      case "string":
        return (
          <StringInput
            value={answers[question.id]}
            onChange={(value) => handleInputChange(question.id, value)}
          />
        );
      case "boolean":
        return (
          <InputCheckBox
            value={answers[question.id]}
            onChange={(boolValue) =>
              handleInputChange(question.id, String(boolValue))
            }
          />
        );
      case "date":
        return (
          <InputCalendar
            value={answers[question.id]}
            onChange={(date) => {
              const formattedDate = date ? date.format("D/M/YYYY") : null;
              handleInputChange(question.id, formattedDate);
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
              answers[question.id]
                ? { name: answers[question.id] }
                : parsedOptions[0]
            }
            options={parsedOptions}
            onChange={(selectedOption) =>
              handleInputChange(question.id, selectedOption.name)
            }
          />
        );
      case "percent":
        return (
          <InputPercentage
            value={answers[question.id]}
            onChange={(value) => handleInputChange(question.id, value)}
          />
        );
      case "MultiInput":
        return (
          <MultiInput
            value={answers[question.id]}
            onChange={(value) => handleInputChange(question.id, value)}
          />
        );
      case "GooglePlaces":
        return (
          <StringInput
            value={answers[question.id]}
            onChange={(value) => handleInputChange(question.id, value)}
          />
        );
      case "amount":
        return (
          <InputAmount
            value={answers[question.id]}
            onChange={(value) => handleInputChange(question.id, value)}
          />
        );
      case "MultiUnitNumber":
        return (
          <InputMultiUnitNumber
            value={answers[question.id]}
            onChange={(value) => handleInputChange(question.id, value)}
          />
        );
      default:
        return <input type="text" placeholder="Unsupported input type" />;
    }
  };

  const handleInputChange = (questionId: number, value: any) => {
    dispatch(
      setAnswer({
        questionId: questionId.toString(),
        value,
        businessPlanId: currentBusinessPlanId,
      })
    );
  };

  return (
    <div className="flex flex-col w-full sm:w-[470px] lg:w-[560px] min-[1864px]:w-[650px] h-full px-2">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <FadeLoader color="#6D3B9E" />
        </div>
      ) : (
        <>
          <div className="px-[40px]">
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
              <div className="text-[24px]">{renderBlockLabel()}</div>
            </div>
            <div className="text-[#A08FB1] text-[16px] ps-[38px] mb-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ultrices, justo non feugiat imperdiet. Lorem ipsum dolor sit amet.
            </div>
          </div>
          <div className="overflow-y-scroll py-[5px] qb-thumb h-[550px]">
            <div className="mb-10 w-full px-[35px]">
              {displayedQuestions?.map((question) => (
                <div key={question.id} className="mb-6">
                  <div className="px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
                    {question.label}
                  </div>
                  {renderInputComponent(question.inputType, question)}
                </div>
              ))}
              <QuestionAiBox />
            </div>
          </div>
          <div className="w-full mt-auto pr-[40px] pl-[35px]">
            <button
              onClick={handleContinue}
              className="w-full flex justify-center items-center gap-[10px] md:mb-[50px] bg-gradient-to-r from-[#914FD2] from-0% to-[#946CBB] to-100% rounded-[45px] px-[35px] py-[15px] text-white hover:cursor-pointer"
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
