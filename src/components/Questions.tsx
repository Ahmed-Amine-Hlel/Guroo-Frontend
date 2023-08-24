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
import InputGooglePlaces from "./InputGooglePlaces";
import InputAmount from "./InputAmount";
import InputMultiUnitNumber from "./InputMultiUnitNumber";

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

const renderInputComponent = (inputType: InputType) => {
  switch (inputType) {
    case "number":
      return <NumberInput />;
    case "string":
      return <StringInput />;
    case "boolean":
      return <InputCheckBox />;
    case "date":
      return <InputCalendar />;
    case "list":
      return <InputListBox />;
    case "percent":
      return <InputPercentage />;
    case "MultiInput":
      return <MultiInput />;
    case "GooglePlaces":
      return <InputGooglePlaces />;
    case "amount":
      return <InputAmount />;
    case "MultiUnitNumber":
      return <InputMultiUnitNumber />;
    default:
      return <input type="text" placeholder="Unsupported input type" />;
  }
};

const Questions = () => {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector((state) => state.stepper.currentStep);
  const section = useAppSelector((state) => state.questions.section);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [currentNestedBlockIndex, setCurrentNestedBlockIndex] = useState(0);
  const [mainBlockQuestionsShown, setMainBlockQuestionsShown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;

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

  const handleContinue = () => {
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
        // Move to the next nested block
        setCurrentNestedBlockIndex(currentNestedBlockIndex + 1);
        setCurrentPage(1);
      } else if (currentBlockIndex < (section?.blocks?.length || 0) - 1) {
        // Move to the next main block
        setCurrentBlockIndex(currentBlockIndex + 1);
        setMainBlockQuestionsShown(false); // Reset the flag for the new main block
        setCurrentNestedBlockIndex(0); // Reset nested block index
        setCurrentPage(1);
      } else {
        // Move to the next section
        dispatch(incrementStep());
        setCurrentBlockIndex(0);
        setMainBlockQuestionsShown(false);
        setCurrentNestedBlockIndex(0);
        setCurrentPage(1);
      }
    }
  };

  const renderBlockLabel = () => {
    if (isInsideNestedBlock) {
      return `${currentBlock?.label} -> ${blockToRender?.label}`;
    }
    return currentBlock?.label || "Commencer maintenant";
  };
  return (
    <div className="py-6 h-full">
      <div className="flex items-center gap-[12px] text-[#6D3B9E] mb-[8px]">
        <div>
          <HiMiniArrowLeft className="text-[24px]" />
        </div>
        <div className="text-[24px]">{renderBlockLabel()}</div>
      </div>
      <div className="text-[#A08FB1] text-[16px] ps-[38px] mb-[48px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        ultrices, justo non feugiat imperdiet. Lorem ipsum dolor sit amet.
      </div>
      <div className="mb-10 w-full">
        {displayedQuestions?.map((question) => (
          <div key={question.id} className="mb-6">
            <div className="px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
              {question.label}
            </div>
            {renderInputComponent(question.inputType)}
          </div>
        ))}
      </div>
      <div className="flex">
        <button
          onClick={handleContinue}
          className="w-full flex justify-center items-center gap-[10px] bg-gradient-to-r from-[#914FD2] from-0% to-[#946CBB] to-100% rounded-[45px] px-[35px] py-[15px] text-white hover:cursor-pointer"
        >
          <span className="text-[15px]">Continuer</span>
          <span className="">
            <HiMiniArrowRight className="text-[20px]" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Questions;
