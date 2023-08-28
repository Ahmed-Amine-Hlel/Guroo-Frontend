import { HiMiniArrowLeft, HiMiniArrowRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  fetchCotisationsSalariales,
  fetchNetSalary,
  fetchPredictLoyer,
  fetchSectionsForStep,
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
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;
  const [isBackDisabled, setIsBackDisabled] = useState(true);
  const loading = useAppSelector((state) => state.questions.loading);
  const aiResponses = useAppSelector((state) => state.questions.aiResponses);

  const currentBusinessPlan = useAppSelector(
    (state) => state.businessPlan.currentBusinessPlan
  );

  const currentBusinessPlanId = currentBusinessPlan?.id;
  const answers = useAppSelector((state) => state.answers.answers);

  useEffect(() => {
    dispatch(fetchSectionsForStep(currentStep));
  }, [currentStep, dispatch]);

  // -----------------------------------------------------------------------------------------------------------------------------------

  const [currentIndexList, setCurrentIndexList] = useState([0]);

  const getBlockToRender = (
    blockIndex: number,
    nestedIndices: Array<number> = []
  ): any => {
    let currentBlock = section?.blocks?.[blockIndex];
    for (let index of nestedIndices) {
      if (!currentBlock?.blocks) return null;
      currentBlock = currentBlock.blocks[index];
    }
    return currentBlock;
  };

  const blockToRender = getBlockToRender(
    currentIndexList[0],
    currentIndexList.slice(1)
  );

  const renderBlockLabelPath = (
    blockIndex: number,
    nestedIndices: Array<number> = []
  ): string => {
    let currentBlock = section?.blocks?.[blockIndex];
    let label = currentBlock?.label || "";
    for (let index of nestedIndices) {
      if (!currentBlock?.blocks) break;
      currentBlock = currentBlock.blocks[index];
      label += " -> " + (currentBlock?.label || "");
    }
    return label;
  };

  const displayedQuestions = blockToRender?.questions.slice(
    (currentPage - 1) * questionsPerPage,
    currentPage * questionsPerPage
  );

  const totalQuestions = blockToRender?.questions.length || 0;
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);

  // -----------------------------------------------------------------------------------------------------------------------------------

  const handleContinue = () => {
    // console.log("Current Page:", currentPage);
    // console.log("Total Pages:", totalPages);
    // console.log("Current Index List:", currentIndexList);
    // console.log("Block to Render Blocks Length:", blockToRender?.blocks.length);

    const formattedAnswers = displayedQuestions?.map((question: Question) => ({
      value: answers[question.uid],
      questionId: question.uid,
      businessPlanId: currentBusinessPlanId,
    }));

    console.log("Formatted Answers:", formattedAnswers);
    setIsBackDisabled(false);

    const deepClone = [...currentIndexList];

    if (currentPage < totalPages) {
      // If not the last page, simply move to the next page.
      setCurrentPage(currentPage + 1);
    } else if (blockToRender?.blocks && blockToRender.blocks.length > 0) {
      // If there are sub-blocks, transition to the first sub-block.
      deepClone.push(0);
      setCurrentPage(1);
      setCurrentIndexList(deepClone);
    } else {
      // Move to the next block or sub-block.
      moveNextBlockOrStep(deepClone);
    }

    // Submit the answers
    if (formattedAnswers && currentBusinessPlanId) {
      dispatch(submitAnswersAsync(formattedAnswers as Answer[]));
    } else {
      console.error("Failed to format answers or missing business plan ID.");
    }

    triggerApiCalls();
  };

  const moveNextBlockOrStep = (indicesList: number[]) => {
    let deepClone = [...indicesList];
    const lastIdx = deepClone.length - 1;

    // Increment the last index.
    deepClone[lastIdx]++;

    if (
      lastIdx === 0 &&
      deepClone[lastIdx] === (section?.blocks?.length || 0)
    ) {
      // If we are at the last main block, move to the next section or step.
      dispatch(incrementStep());
      setCurrentIndexList([0]);
    } else if (
      lastIdx > 0 &&
      deepClone[lastIdx] ===
        getBlockToRender(indicesList[0], indicesList.slice(1, lastIdx)).blocks
          ?.length
    ) {
      // If we are at the last sub-block, move up a level and then call recursively.
      deepClone.pop();
      moveNextBlockOrStep(deepClone);
    } else {
      // Otherwise, just update to the incremented index list.
      setCurrentIndexList(deepClone);
    }

    setCurrentPage(1);
  };

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
    const gross_monthly_salary_employee1 =
      answers["5f4800c7-e289-4885-b6bf-f5897e3850fd"];
    const gross_monthly_salary_employee2 =
      answers["12732041-22ea-4fb5-af30-4a96bd4bb369"];
    const gross_monthly_salary_employee3 =
      answers["e466fa89-043c-41b7-90c4-c264af9cc736"];
    const gross_monthly_salary_employee4 =
      answers["24a1f8ad-ddf1-4dcf-9878-f3bf3e6c3be5"];
    const gross_monthly_salary_employee5 =
      answers["acca41fb-1edc-4dba-a13d-bc47d5821b8f"];
    const gross_monthly_salary_employee6 =
      answers["dfddfb23-5480-4676-92e2-8be02faef6d8"];
    const gross_monthly_salary_employee7 =
      answers["97648262-8f5a-4629-8e6c-7bdcd1dd7b40"];
    const gross_monthly_salary_employee8 =
      answers["eb92aafb-852c-4cbe-8bc6-9ee444d12005"];
    const gross_monthly_salary_employee9 =
      answers["03688503-02a9-4df7-8c60-4b16c8d54d4b"];
    const gross_monthly_salary_employee10 =
      answers["74c48ae7-5e75-4d8d-88c4-836d21f52816"];
    if (
      gross_monthly_salary_employee1 &&
      gross_monthly_salary_employee2 &&
      gross_monthly_salary_employee3
    ) {
      dispatch(
        fetchCotisationsSalariales({
          gross_monthly_salary_employee1,
          gross_monthly_salary_employee2,
          gross_monthly_salary_employee3,
          gross_monthly_salary_employee4,
          gross_monthly_salary_employee5,
          gross_monthly_salary_employee6,
          gross_monthly_salary_employee7,
          gross_monthly_salary_employee8,
          gross_monthly_salary_employee9,
          gross_monthly_salary_employee10,
        })
      );
    }
  };

  const moveBackToLastSubBlock = (
    indicesList: number[]
  ): { indices: number[]; page: number } => {
    let localClone = [...indicesList];

    const currentBlock = getBlockToRender(localClone[0], localClone.slice(1));

    let lastPage = Math.ceil(
      (currentBlock.questions?.length || 0) / questionsPerPage
    );

    if (lastPage > 0) {
      return { indices: localClone, page: lastPage };
    } else if (currentBlock.blocks && currentBlock.blocks.length > 0) {
      // Navigate to the last sub-block
      localClone.push(currentBlock.blocks.length - 1);
      // Check if this sub-block has further nested sub-blocks
      return moveBackToLastSubBlock(localClone);
    } else {
      return { indices: localClone, page: 1 };
    }
  };

  const handleBack = () => {
    let currentIndices = [...currentIndexList];

    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      if (currentIndices.length === 1) {
        if (currentIndices[0] > 0) {
          currentIndices[0]--;
          const { indices, page } = moveBackToLastSubBlock(currentIndices);
          currentIndices = indices;
          setCurrentPage(page);
        } else {
          // We're at the very start, can't go back further
          setIsBackDisabled(true);
        }
      } else {
        const lastValue = currentIndices.pop();
        if (lastValue && lastValue > 0) {
          currentIndices.push(lastValue - 1);
          const { indices, page } = moveBackToLastSubBlock(currentIndices);
          currentIndices = indices;
          setCurrentPage(page);
        } else {
          const { page } = moveBackToLastSubBlock(currentIndices);
          setCurrentPage(page);
        }
      }
    }

    setCurrentIndexList(currentIndices);
    setIsBackDisabled(
      currentIndices.length === 1 &&
        currentIndices[0] === 0 &&
        currentPage === 1
    );
  };

  const renderInputComponent = (inputType: InputType, question: Question) => {
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
            value={answers[question.uid]}
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "MultiInput":
        return (
          <MultiInput
            value={answers[question.uid]}
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
                  className={`text-[24px] ${
                    isBackDisabled
                      ? "opacity-50 cursor-default"
                      : "hover:cursor-pointer"
                  }`}
                  onClick={!isBackDisabled ? handleBack : undefined}
                />
              </div>
              <div className="text-[24px]">
                {renderBlockLabelPath(
                  currentIndexList[0],
                  currentIndexList.slice(1)
                )}
              </div>
            </div>
            <div className="text-[#A08FB1] text-[16px] ps-[38px] mb-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ultrices, justo non feugiat imperdiet. Lorem ipsum dolor sit amet.
            </div>
          </div>
          <div className="overflow-y-scroll py-[5px] qb-thumb h-[550px] mb-[10px]">
            <div className="mb-10 w-full sm:px-[35px]">
              {displayedQuestions?.map((question: Question) => (
                <div key={question.uid} className="mb-6">
                  <div className="px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
                    {question.label}
                  </div>
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
              onClick={handleContinue}
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
