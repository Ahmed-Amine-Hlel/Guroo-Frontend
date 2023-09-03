import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/hooks";
import { FadeLoader } from "react-spinners";
import { HiMiniArrowLeft, HiMiniArrowRight } from "react-icons/hi2";
import QuestionAiBox from "./QuestionAiBox";
import StringInput from "./StringInput";
import InputMultiUnitNumber from "./InputMultiUnitNumber";
import InputAmount from "./InputAmount";
import MultiInput from "./MultiInput";
import InputPercentage from "./InputPercentage";
import InputListBox from "./InputListBox";
import InputCalendar from "./InputCalendar";
import InputCheckBox from "./InputCheckBox";
import NumberInput from "./NumberInput";
import { Question } from "../core/src/domain/entities/Question";
import { Block } from "../core/src/domain/entities/Block";
import data from '../../public/data.json'
import { BsArrowRight } from "react-icons/bs";
const EditQuestions = () => {

  const [loading, setLoading] = useState<boolean>(false); // FROM REDUX 
  const [isBackDisabled, setIsBackDisabled] = useState<boolean>(false);
  const questionsWithAnswers = useAppSelector(
    (state) => state.businessPlan.currentQuestionsWithAnswers
  );
  console.log("questionsWithAnswers", questionsWithAnswers);

  const [blocks, setBlocks] = useState<Block[]>([])
  const [questionsPerPage] = useState<number>(5)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(1)
  const extractBlocksWithQuestions = (block: Block, result: Block[] = [], parentLabel: string = ''): void => {

    const currentLabel = parentLabel ? `${parentLabel}-${block.label}` : block.label;

    if (block.questions.length > 0) {
      // Clone block to avoid mutation, remove inner blocks, and update the label
      const clonedBlock = { ...block, blocks: [], label: currentLabel };
      result.push(clonedBlock);
    }
    /* const clonedBlock = { ...block, blocks: [], label: currentLabel };
    result.push(clonedBlock); */

    for (let subBlock of block.blocks) {
      extractBlocksWithQuestions(subBlock, result, currentLabel);
    }
  }

  const reformatData = () => {

    const blocksWithQuestions: Block[] = [];
    for (let block of data.blocks) {
      extractBlocksWithQuestions(block, blocksWithQuestions);
    }
    console.log(blocksWithQuestions)
    setBlocks(blocksWithQuestions)
  }

  const handleNext = () => {
    const currentBlockQuestions = blocks[currentStep - 1]?.questions || [];
    if (currentQuestionIndex + questionsPerPage < currentBlockQuestions.length) {
      // There are more questions in the current block to display
      setCurrentQuestionIndex(prev => prev + questionsPerPage);
    } else {
      // Move to the next block and reset the question index
      if (currentStep < blocks.length) {
        setCurrentStep(prev => prev + 1);
        setCurrentQuestionIndex(0);
      }
    }
  }

  const handleBack = () => {
    if (currentQuestionIndex - questionsPerPage >= 0) {
      // Go back to the previous set of questions in the current block
      setCurrentQuestionIndex(prev => prev - questionsPerPage);
    } else {
      // Move to the previous block, and set the question index to the last set of questions of that block
      if (currentStep > 1) {
        setCurrentStep(prev => prev - 1);
        const previousBlockQuestions = blocks[currentStep - 2]?.questions || [];
        const modulo = previousBlockQuestions.length % questionsPerPage;
        setCurrentQuestionIndex(modulo === 0 ? previousBlockQuestions.length - questionsPerPage : previousBlockQuestions.length - modulo);
      }
    }
  }


  const renderInputComponent = (inputType: string, question: Question) => {
    switch (inputType) {
      case "number":
        return (
          <NumberInput
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "string":
        return (
          <StringInput
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "boolean":
        return (
          <InputCheckBox
            onChange={(boolValue) => handleInputChange(question.uid, boolValue)}
          />
        );
      case "date":
        return (
          <InputCalendar
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
            options={parsedOptions}
            onChange={(selectedOption) =>
              handleInputChange(question.uid, selectedOption.name)
            }
          />
        );
      case "percent":
        return (
          <InputPercentage
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "MultiInput":
        return (
          <MultiInput
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "GooglePlaces":
        return (
          <StringInput
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "amount":
        return (
          <InputAmount
            onChange={(value) =>
              handleInputChange(question.uid, value.toString())
            }
          />
        );
      case "MultiUnitNumber":
        return (
          <InputMultiUnitNumber
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      default:
        return <input type="text" placeholder="Unsupported input type" />;
    }
  };

  const handleInputChange = (questionUid: string, value: any) => {
    console.log(questionUid, value)
  };

  useEffect(() => {
    reformatData()
  }, [])

  return (
    <div className="flex flex-col w-full sm:w-[470px] lg:w-[560px] min-[1864px]:w-[650px] h-full px-2">
      {loading ? (
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
                  onClick={handleBack}
                />
              </div>
              <div className="text-[24px]">
                Présetation de projet
              </div>
            </div>
            <div className="flex items-center text-[#A08FB1] text-[16px] ps-[38px] mb-[28px]">
              {
                blocks[currentStep - 1]?.label.split('-').map((label: string, index: number) => (

                  <div key={index} className='flex items-center'>

                    <span className=''>
                      {
                        index > 0 && index < blocks[currentStep - 1]?.label.split('-').length ? <BsArrowRight className="text-md mr-2" /> : ''
                      }
                    </span>
                    <span
                      key={index}
                      className={`text-sm text-blue-300 mr-2`}
                    >
                      {label}
                    </span>
                  </div>

                ))
                /*  blocks[currentStep - 1]?.label */
              }
            </div>
          </div>
          <div className="overflow-y-scroll py-[5px] qb-thumb h-[550px] mb-[10px]">
            <div className="mb-10 w-full sm:px-[35px]">

              {/* <div className="mb-6">
                <div className="px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
                  Question label
                </div>
                {renderInputComponent(question.inputType, question)}
                {aiResponses[question.uid] && (
                  <QuestionAiBox message={aiResponses[question.uid]} />
                )}
              </div> */}
              {
                blocks[currentStep - 1]?.questions
                  .slice(currentQuestionIndex, currentQuestionIndex + questionsPerPage)
                  .map((question: Question, index: number) => (
                    <div key={index} className="mb-6">
                      <label

                        className="block px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
                        {question.label}
                      </label>
                      {renderInputComponent(question.inputType, question)}
                      {/* {aiResponses[question.uid] && (
                        <QuestionAiBox message={aiResponses[question.uid]} />
                      )} */}
                    </div>
                  ))
              }

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
      )
      }
    </div >

  );
};

export default EditQuestions;
