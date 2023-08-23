import { HiMiniArrowLeft, HiMiniArrowRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchSectionsForStep } from "../store/QuestionsSlice";
import { incrementStep } from "../store/StepperSlice";

const Questions = () => {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector((state) => state.stepper.currentStep);
  const section = useAppSelector((state) => state.questions.section);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [currentSubBlockIndex, setCurrentSubBlockIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchSectionsForStep(currentStep));
    setCurrentBlockIndex(0);
    setCurrentSubBlockIndex(0);
  }, [currentStep, dispatch]);

  const currentBlock = section?.blocks?.[currentBlockIndex];
  const currentSubBlock = currentBlock?.blocks?.[currentSubBlockIndex];

  const [currentPage, setCurrentPage] = useState(0);
  const QUESTIONS_PER_PAGE = 5;

  const displayedQuestions = currentSubBlock
    ? currentSubBlock.questions.slice(
        currentPage * QUESTIONS_PER_PAGE,
        (currentPage + 1) * QUESTIONS_PER_PAGE
      )
    : currentBlock?.questions.slice(
        currentPage * QUESTIONS_PER_PAGE,
        (currentPage + 1) * QUESTIONS_PER_PAGE
      );

  console.log(currentBlock);
  console.log(currentSubBlock);
  // const handleContinue = () => {
  //   if (displayedQuestions?.length === QUESTIONS_PER_PAGE) {
  //     // If there are more questions on the next page
  //     setCurrentPage(currentPage + 1);
  //   } else if (
  //     currentBlock?.blocks &&
  //     currentBlock.blocks.length > 0 &&
  //     currentSubBlockIndex < currentBlock.blocks.length
  //   ) {
  //     // If the current block has sub-blocks and we haven't finished them
  //     setCurrentSubBlockIndex(currentSubBlockIndex + 1);
  //     setCurrentPage(0); // Reset page index
  //   } else if (currentBlockIndex < (section?.blocks?.length ?? 0) - 1) {
  //     // Move to the next main block
  //     setCurrentBlockIndex(currentBlockIndex + 1);
  //     setCurrentSubBlockIndex(0); // Reset sub-block index
  //     setCurrentPage(0); // Reset page index
  //   } else {
  //     // Handle transition to the next section
  //     dispatch(incrementStep());
  //     setCurrentBlockIndex(0);
  //     setCurrentSubBlockIndex(0);
  //     setCurrentPage(0);
  //   }
  // };

  const handleContinue = () => {
    // If there are more questions on the next page
    if (displayedQuestions?.length === QUESTIONS_PER_PAGE) {
      setCurrentPage(currentPage + 1);
      return;
    }

    // If we're currently in a block and have not yet navigated through all its sub-blocks
    if (
      currentBlock?.blocks &&
      currentSubBlockIndex < currentBlock.blocks.length - 1
    ) {
      setCurrentSubBlockIndex(currentSubBlockIndex + 1);
      setCurrentPage(0); // Reset page index
      return;
    }

    // If we're done with all the sub-blocks or the current block doesn't have any sub-blocks
    if (currentBlockIndex < (section?.blocks?.length ?? 0) - 1) {
      setCurrentBlockIndex(currentBlockIndex + 1);
      setCurrentSubBlockIndex(0); // Reset sub-block index
      setCurrentPage(0); // Reset page index
      return;
    }

    // If we're at the last block and there are no more questions to display
    dispatch(incrementStep());
    setCurrentBlockIndex(0);
    setCurrentSubBlockIndex(0);
    setCurrentPage(0);
  };

  const currentLabel = currentSubBlock
    ? `${currentBlock?.label} -> ${currentSubBlock.label}`
    : currentBlock?.label;

  return (
    <div className="py-6 h-full">
      <div className="flex items-center gap-[12px] text-[#6D3B9E] mb-[8px]">
        <div>
          <HiMiniArrowLeft className="text-[24px]" />
        </div>
        <div className="text-[24px]">
          {currentLabel || "Commencer maintenant"}
        </div>
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
            <input type="text" placeholder="Enter your answer" />
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
