import { useEffect } from "react";
import { HiMiniArrowRight } from "react-icons/hi2";
import SectionOneStep1 from "../../components/SectionOneStep1";
import SectionOneStep2 from "../../components/SectionOneStep2";
import SectionOneStep3 from "../../components/SectionOneStep3";
import SectionOneStep4 from "../../components/SectionOneStep4";
import {
  // useAppDispatch,
  useAppSelector,
} from "../../hooks/hooks";
import SectionTwoStep1 from "../../components/SectionTwoStep1";
import RestaurantComponent1 from "../../components/RestaurantComponent1";
import RestaurantComponent2 from "../../components/RestaurantComponent2";
import RestaurantComponent3 from "../../components/RestaurantComponent3";
import RestaurantComponent4 from "../../components/RestaurantComponent4";
import RestaurantComponent5 from "../../components/RestaurantComponent5";
import BarComponent1 from "../../components/BarComponent1";
import BarComponent2 from "../../components/BarComponent2";
import BarComponent3 from "../../components/BarComponent3";
import BarComponent4 from "../../components/BarComponent4";
import BarComponent5 from "../../components/BarComponent5";
import SectionTwoStep2 from "../../components/SectionTwoStep2";
import MSTable from "../../components/MSTable";
import SectionTwoStep3 from "../../components/SectionTwoStep3";
// import {
//   submitAnswersAsync,
// updateProgress
// } from "../../store/answersSlice";
// import { Answer } from "../../core/src/domain/entities/Answer";
import { MarkBusinessPlanAsDoneUseCase } from "../../core/src/usecases/MarkBusinessPlanAsDoneUseCase";
import { useNavigate } from "react-router-dom";
import { GurooBusinessPlanService } from "../../core/src/adapters/realDependencies/GurooBusinessPlanService";
import { BusinessPlanMapper } from "../../core/src/adapters/realDependencies/mappers/BusinessPlanMapper";
// import CFTable from "../../components/CFTable";
// import { setCurrentStep } from "../../store/StepperSlice";

interface QuestionsScreenProps {
  setIsCompact: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: number;
  setActiveSection: React.Dispatch<React.SetStateAction<number>>;
  subStep: number;
  setSubStep: React.Dispatch<React.SetStateAction<number>>;
  activeBusinessType: string;
  setActiveBusinessType: React.Dispatch<React.SetStateAction<string>>;
  handleBack: () => void;
}

const QuestionsScreen: React.FC<QuestionsScreenProps> = ({
  setIsCompact,
  activeSection,
  setActiveSection,
  subStep,
  setSubStep,
  activeBusinessType,
  setActiveBusinessType,
  handleBack,
}) => {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const businessPlanService = new GurooBusinessPlanService(
    new BusinessPlanMapper()
  );

  const markBusinessPlanAsDoneUseCase = new MarkBusinessPlanAsDoneUseCase(
    businessPlanService
  );
  // const sectionStep = useAppSelector((state) => state.stepper.currentStep);

  const handleNext = async () => {
    if (activeSection === 9) {
      submitAnswers();
      await handleLastSectionCompletion();
      return;
    }

    if (activeSection === 6) {
      if (subStep < 4) {
        setSubStep(subStep + 1);
        return;
      }
      if (
        subStep === 4 &&
        activeBusinessType === "Restaurant" &&
        isBarSelected
      ) {
        setActiveBusinessType("Bar");
        setSubStep(0);
        return;
      }
    }
    setActiveSection(activeSection + 1);
    // dispatch(
    //   updateProgress({
    //     sectionId: `section${sectionStep}`,
    //     answeredCount: progressPercentage,
    //   })
    // );
    submitAnswers();
  };

  const handleLastSectionCompletion = async () => {
    if (currentBusinessPlanId) {
      try {
        await markBusinessPlanAsDoneUseCase.execute(currentBusinessPlanId);
        navigate(`/payment/${currentBusinessPlanId}`);
      } catch (error) {
        console.error("Error marking the business plan as done:", error);
      }
    }
  };

  const currentBusinessPlan = useAppSelector(
    (state) => state.businessPlan.currentBusinessPlan
  );

  const currentBusinessPlanId = currentBusinessPlan?.uid;
  console.log("currentBusinessPlanId : ", currentBusinessPlanId);

  const answers = useAppSelector((state) => state.answers.answers);

  const isRestaurantSelected = answers["39"] == "true";
  const isBarSelected = answers["40"] == "true";

  useEffect(() => {
    if (isRestaurantSelected) {
      setActiveBusinessType("Restaurant");
    } else if (isBarSelected) {
      setActiveBusinessType("Bar");
    } else {
      setActiveBusinessType("");
    }
  }, [isRestaurantSelected, isBarSelected, setActiveBusinessType]);
  // const isClubSelected = answers["41"] == "true";
  // const isLoungeSelected = answers["42"] == "true";
  // const isBeachClubSelected = answers["43"] == "true";

  const RestaurantWrapper = () => {
    switch (subStep) {
      case 0:
        return (
          <RestaurantComponent1
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
          />
        );

      case 1:
        return <RestaurantComponent2 handleBack={handleBack} />;
      case 2:
        return (
          <RestaurantComponent3
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <RestaurantComponent4
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
          />
        );

      case 4:
        return (
          <RestaurantComponent5
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  const BarWrapper = () => {
    switch (subStep) {
      case 0:
        return (
          <BarComponent1
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
          />
        );

      case 1:
        return <BarComponent2 handleBack={handleBack} />;
      case 2:
        return (
          <BarComponent3
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <BarComponent4
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
          />
        );

      case 4:
        return (
          <BarComponent5
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 1:
        setIsCompact(false);
        // dispatch(setCurrentStep(1));
        return (
          <SectionOneStep1 currentBusinessPlanId={currentBusinessPlanId} />
        );
      case 2:
        return (
          <SectionOneStep2
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <SectionOneStep3
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
          />
        );
      case 4:
        return (
          <SectionOneStep4
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
          />
        );
      case 5:
        // dispatch(setCurrentStep(2));
        return (
          <SectionTwoStep1 currentBusinessPlanId={currentBusinessPlanId} />
        );

      case 6:
        if (activeBusinessType === "Restaurant" && isRestaurantSelected) {
          return <RestaurantWrapper />;
        }
        if (activeBusinessType === "Bar" && isBarSelected) {
          return <BarWrapper />;
        }
        return null;
      default:
        return null;

      case 7:
        return (
          <SectionTwoStep2
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
          />
        );

      case 8:
        setIsCompact(true);
        return null;

      case 9:
        setIsCompact(false);
        return (
          <SectionTwoStep3
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
          />
        );
    }
  };

  const submitAnswers = () => {
    const formatAnswersForBackend = (
      answers: Record<string, unknown>,
      currentBusinessPlanId: string | undefined
    ) => {
      const formattedAnswers = Object.keys(answers).map((rowNumber) => ({
        value: answers[rowNumber],
        rowNumber: Number(rowNumber),
        businessPlanId: currentBusinessPlanId,
      }));
      return formattedAnswers;
    };

    const formattedAnswers = formatAnswersForBackend(
      answers,
      currentBusinessPlanId
    );

    console.log("Formated answers : ", formattedAnswers);
    /* dispatch(submitAnswersAsync(formattedAnswers as unknown as Answer[])); */
  };

  return activeSection === 8 ? (
    <>
      {renderActiveSection()}
      <MSTable handleNext={handleNext} />
      {/* <CFTable handleNext={handleNext} /> */}
    </>
  ) : (
    <div className="flex flex-col w-full sm:w-[470px] lg:w-[560px] min-[1864px]:w-[650px] h-full px-2">
      <div className="relative">{renderActiveSection()}</div>

      <div className="w-full flex justify-center mt-auto">
        <button
          onClick={handleNext}
          className="w-[150px] sm:w-full flex justify-center items-center gap-[10px] md:mb-[50px] bg-gradient-to-r from-[#914FD2] from-0% to-[#946CBB] to-100% rounded-[45px] px-[35px] py-[15px] text-white hover:cursor-pointer"
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

export default QuestionsScreen;
