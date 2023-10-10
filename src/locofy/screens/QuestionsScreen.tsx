import { useState } from "react";
import { HiMiniArrowRight } from "react-icons/hi2";
import SectionOneStep1 from "../../components/SectionOneStep1";
import SectionOneStep2 from "../../components/SectionOneStep2";
import SectionOneStep3 from "../../components/SectionOneStep3";
import SectionOneStep4 from "../../components/SectionOneStep4";
import { useAppSelector } from "../../hooks/hooks";
import SectionTwoStep1 from "../../components/SectionTwoStep1";
import RestaurantComponent1 from "../../components/RestaurantComponent1";
import RestaurantComponent2 from "../../components/RestaurantComponent2";
import RestaurantComponent3 from "../../components/RestaurantComponent3";
import RestaurantComponent4 from "../../components/RestaurantComponent4";

const QuestionsScreen = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [subStep, setSubStep] = useState(0);

  const handleBack = () => {
    if (activeSection === 6) {
      if (isRestaurantSelected && subStep > 0) {
        setSubStep(subStep - 1);
        return;
      }
      if (isBarSelected) {
        setSubStep(0);
        return;
      }
    }
    setActiveSection(activeSection - 1);
  };

  const handleNext = () => {
    if (activeSection === 6) {
      if (isRestaurantSelected && subStep < 4) {
        setSubStep(subStep + 1);
        return;
      }
      if (isBarSelected) {
        setSubStep(0);
        return;
      }
    }
    setActiveSection(activeSection + 1);
  };

  const currentBusinessPlan = useAppSelector(
    (state) => state.businessPlan.currentBusinessPlan
  );

  const currentBusinessPlanId = currentBusinessPlan?.uid;

  const answers = useAppSelector((state) => state.answers.answers);

  const isRestaurantSelected = answers["39"] == "true";
  const isBarSelected = answers["40"] == "true";
  const isClubSelected = answers["41"] == "true";
  const isLoungeSelected = answers["42"] == "true";
  const isBeachClubSelected = answers["43"] == "true";

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
      default:
        return null;
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 1:
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
        return (
          <SectionTwoStep1 currentBusinessPlanId={currentBusinessPlanId} />
        );

      case 6:
        if (isRestaurantSelected) {
          return <RestaurantWrapper />;
        }
        if (isBarSelected) {
          return null;
        }
        if (isClubSelected) {
          return null;
        }
        if (isLoungeSelected) {
          return null;
        }
        if (isBeachClubSelected) {
          return null;
        }
        return null;

      // case 6:
      //   return (
      //     <SectionTwoStep2
      //       currentBusinessPlanId={currentBusinessPlanId}
      //       handleBack={handleBack}
      //     />
      //   );

      // case 7:
      //   return <SectionTwoStep3 handleBack={handleBack} />;
      // case 8:
      //   return (
      //     <SectionTwoStep4
      //       currentBusinessPlanId={currentBusinessPlanId}
      //       handleBack={handleBack}
      //     />
      //   );

      // case 9:
      //   return (
      //     <SectionTwoStep5
      //       currentBusinessPlanId={currentBusinessPlanId}
      //       handleBack={handleBack}
      //     />
      //   );
      default:
        return null;
    }
  };

  return (
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
