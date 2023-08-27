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
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [currentNestedBlockIndex, setCurrentNestedBlockIndex] = useState(0);
  const [mainBlockQuestionsShown, setMainBlockQuestionsShown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;
  const [isBackDisabled, setIsBackDisabled] = useState(true);
  const loading = useAppSelector((state) => state.questions.loading);
  const aiResponses = useAppSelector((state) => state.questions.aiResponses);

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
      value: answers[question.uid],
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

    triggerApiCalls();
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
            value={answers[question.uid]}
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "string":
        return (
          <StringInput
            value={answers[question.uid]}
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "boolean":
        return (
          <InputCheckBox
            value={answers[question.uid]}
            onChange={(boolValue) =>
              handleInputChange(question.uid, String(boolValue))
            }
          />
        );
      case "date":
        return (
          <InputCalendar
            value={answers[question.uid]}
            onChange={(date) => {
              const formattedDate = date ? date.format("D/M/YYYY") : null;
              handleInputChange(question.uid, formattedDate);
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
            value={answers[question.uid]}
            onChange={(value) => handleInputChange(question.uid, value)}
          />
        );
      case "amount":
        return (
          <InputAmount
            value={answers[question.uid]}
            onChange={(value) => handleInputChange(question.uid, value)}
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

  // console.log(
  //   "Town is : ",
  //   typeof answers["0f7b07a6-0a75-4df1-8e11-4e164712c7b4"]
  // );

  // console.log(
  //   "Surface : ",
  //   typeof Number(answers["4481644a-646e-486f-99b3-390535dc13b4"])
  // );

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
              <div className="text-[24px]">{renderBlockLabel()}</div>
            </div>
            <div className="text-[#A08FB1] text-[16px] ps-[38px] mb-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ultrices, justo non feugiat imperdiet. Lorem ipsum dolor sit amet.
            </div>
          </div>
          <div className="overflow-y-scroll py-[5px] qb-thumb h-[550px] mb-[10px]">
            <div className="mb-10 w-full sm:px-[35px]">
              {/* {displayedQuestions?.map((question) => (
                <div key={question.id} className="mb-6">
                  <div className="px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
                    {question.label}
                  </div>
                  {renderInputComponent(question.inputType, question)}
                </div>
              ))}
              <QuestionAiBox /> */}
              {displayedQuestions?.map((question) => (
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
