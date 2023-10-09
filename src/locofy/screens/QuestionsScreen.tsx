import { useState } from "react";
import { HiMiniArrowRight } from "react-icons/hi2";
import SectionOneStep1 from "../../components/SectionOneStep1";
import SectionOneStep2 from "../../components/SectionOneStep2";
import SectionOneStep3 from "../../components/SectionOneStep3";
import SectionOneStep4 from "../../components/SectionOneStep4";
import { useAppSelector } from "../../hooks/hooks";

const QuestionsScreen = () => {
  const [activeSection, setActiveSection] = useState(1);

  const handleBack = () => {
    setActiveSection(activeSection - 1);
  };

  const handleNext = () => {
    setActiveSection(activeSection + 1);
  };

  const currentBusinessPlan = useAppSelector(
    (state) => state.businessPlan.currentBusinessPlan
  );

  const currentBusinessPlanId = currentBusinessPlan?.uid;

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
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full sm:w-[470px] lg:w-[560px] min-[1864px]:w-[650px] h-full px-2">

      {renderActiveSection()}


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
