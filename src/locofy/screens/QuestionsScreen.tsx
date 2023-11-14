import { useEffect } from 'react';
import { HiMiniArrowRight } from 'react-icons/hi2';
import {
  // useAppDispatch,
  useAppSelector,
} from '../../hooks/hooks';
import MSTable from '../../components/MSTable';
import CFTable from '../../components/CFTable';
import ActiveSection from '../../components/ActiveSection';
// import {
//   submitAnswersAsync,
// updateProgress
// } from "../../store/answersSlice";
// import { Answer } from "../../core/src/domain/entities/Answer";
// import { MarkBusinessPlanAsDoneUseCase } from "../../core/src/usecases/MarkBusinessPlanAsDoneUseCase";
// import { useNavigate } from "react-router-dom";
// import { GurooBusinessPlanService } from "../../core/src/adapters/realDependencies/GurooBusinessPlanService";
// import { BusinessPlanMapper } from "../../core/src/adapters/realDependencies/mappers/BusinessPlanMapper";
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
  // const navigate = useNavigate();
  // const businessPlanService = new GurooBusinessPlanService(
  //   new BusinessPlanMapper()
  // );

  // const markBusinessPlanAsDoneUseCase = new MarkBusinessPlanAsDoneUseCase(
  //   businessPlanService
  // );
  // const sectionStep = useAppSelector((state) => state.stepper.currentStep);

  const handleNext = async () => {
    // if (activeSection === 9) {
    //   submitAnswers();
    //   await handleLastSectionCompletion();
    //   return;
    // }

    if (activeSection === 6) {
      if (subStep < 4) {
        setSubStep(subStep + 1);
        return;
      }
      if (subStep === 4 && activeBusinessType === 'Restaurant') {
        if (isBarSelected) {
          setActiveBusinessType('Bar');
          setSubStep(0);
          return;
        } else if (isClubSelected) {
          setActiveBusinessType('Club');
          setSubStep(0);
          return;
        } else if (isLoungeSelected) {
          setActiveBusinessType('Lounge');
          setSubStep(0);
          return;
        } else if (isBeachClubSelected) {
          setActiveBusinessType('Beach Club');
          setSubStep(0);
          return;
        }
      }

      if (subStep === 4 && activeBusinessType === 'Bar') {
        if (isClubSelected) {
          setActiveBusinessType('Club');
          setSubStep(0);
          return;
        } else if (isLoungeSelected) {
          setActiveBusinessType('Lounge');
          setSubStep(0);
          return;
        } else if (isBeachClubSelected) {
          setActiveBusinessType('Beach Club');
          setSubStep(0);
          return;
        }
      }

      if (activeBusinessType === 'Club') {
        if (isLoungeSelected) {
          setActiveBusinessType('Lounge');
          setSubStep(0);
          return;
        } else if (isBeachClubSelected) {
          setActiveBusinessType('Beach Club');
          setSubStep(0);
          return;
        }
      }

      if (
        subStep === 4 &&
        activeBusinessType === 'Lounge' &&
        isBeachClubSelected
      ) {
        setActiveBusinessType('Beach Club');
        setSubStep(0);
        return;
      }
    }

    if (activeSection === 8) {
      if (isPayrollBasedOnTurnover) {
        setActiveSection(activeSection + 2);
        return;
      }
    }

    if (activeSection === 10) {
      if (isRentBasedOnRevenue) {
        setActiveSection(activeSection + 2);
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

  // const handleLastSectionCompletion = async () => {
  //   if (currentBusinessPlanId) {
  //     try {
  //       await markBusinessPlanAsDoneUseCase.execute(currentBusinessPlanId);
  //       navigate(`/payment/${currentBusinessPlanId}`);
  //     } catch (error) {
  //       console.error("Error marking the business plan as done:", error);
  //     }
  //   }
  // };

  const currentBusinessPlan = useAppSelector(
    (state) => state.businessPlan.currentBusinessPlan
  );

  const currentBusinessPlanId = currentBusinessPlan?.uid;
  console.log('currentBusinessPlanId : ', currentBusinessPlanId);

  const answers = useAppSelector((state) => state.answers.answers);

  const isRestaurantSelected = answers['39'] == 'true';
  const isBarSelected = answers['40'] == 'true';
  const isClubSelected = answers['41'] == 'true';
  const isLoungeSelected = answers['42'] == 'true';
  const isBeachClubSelected = answers['43'] == 'true';

  const isPayrollBasedOnTurnover = answers['334'] === 'true';
  const isRentBasedOnRevenue = answers['410'] === 'true';

  useEffect(() => {
    if (isRestaurantSelected) {
      setActiveBusinessType('Restaurant');
    } else if (isBarSelected) {
      setActiveBusinessType('Bar');
    } else if (isClubSelected) {
      setActiveBusinessType('Club');
    } else if (isLoungeSelected) {
      setActiveBusinessType('Lounge');
    } else if (isBeachClubSelected) {
      setActiveBusinessType('Beach Club');
    } else {
      setActiveBusinessType('');
    }
  }, [
    isRestaurantSelected,
    isBarSelected,
    isClubSelected,
    isLoungeSelected,
    isBeachClubSelected,
    setActiveBusinessType,
  ]);

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

    console.log('Formated answers : ', formattedAnswers);
    /* dispatch(submitAnswersAsync(formattedAnswers as unknown as Answer[])); */
  };

  console.log(activeSection);

  return activeSection === 9 ? (
    <>
      <ActiveSection
        activeSection={activeSection}
        activeBusinessType={activeBusinessType}
        currentBusinessPlanId={currentBusinessPlanId}
        subStep={subStep}
        isBeachClubSelected={isBeachClubSelected}
        isBarSelected={isBarSelected}
        isClubSelected={isClubSelected}
        isLoungeSelected={isLoungeSelected}
        isRestaurantSelected={isRestaurantSelected}
        setIsCompact={setIsCompact}
        handleBack={handleBack}
      />
      <MSTable handleNext={handleNext} />
    </>
  ) : activeSection === 11 && !isRentBasedOnRevenue ? (
    <>
      <ActiveSection
        activeSection={activeSection}
        activeBusinessType={activeBusinessType}
        currentBusinessPlanId={currentBusinessPlanId}
        subStep={subStep}
        isBeachClubSelected={isBeachClubSelected}
        isBarSelected={isBarSelected}
        isClubSelected={isClubSelected}
        isLoungeSelected={isLoungeSelected}
        isRestaurantSelected={isRestaurantSelected}
        setIsCompact={setIsCompact}
        handleBack={handleBack}
      />
      <CFTable handleNext={handleNext} />
    </>
  ) : (
    <div className="flex flex-col w-full sm:w-[470px] lg:w-[560px] min-[1864px]:w-[650px] h-full px-2">
      <div className="relative">
        <ActiveSection
          activeSection={activeSection}
          activeBusinessType={activeBusinessType}
          currentBusinessPlanId={currentBusinessPlanId}
          subStep={subStep}
          isBeachClubSelected={isBeachClubSelected}
          isBarSelected={isBarSelected}
          isClubSelected={isClubSelected}
          isLoungeSelected={isLoungeSelected}
          isRestaurantSelected={isRestaurantSelected}
          setIsCompact={setIsCompact}
          handleBack={handleBack}
        />
      </div>

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
