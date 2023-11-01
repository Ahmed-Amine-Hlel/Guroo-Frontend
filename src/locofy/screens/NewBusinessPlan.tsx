import Stepper from "../../components/Stepper";
// import Questions from "../../components/Questions";
import ChatBot from "../../components/ChatBot";
import { useState } from "react";
import QuestionsScreen from "./QuestionsScreen";

const NewBusinessPlan = () => {
  const [isCompact, setIsCompact] = useState(false);
  const [activeSection, setActiveSection] = useState(1);
  const [subStep, setSubStep] = useState(0);
  const [activeBusinessType, setActiveBusinessType] = useState("Restaurant");

  const handleBack = () => {
    if (activeSection === 6) {
      if (subStep > 0) {
        setSubStep(subStep - 1);
        return;
      }
      if (subStep === 0 && activeBusinessType === "Bar") {
        setActiveBusinessType("Restaurant");
        setSubStep(4);
        return;
      }
    }
    setActiveSection(activeSection - 1);
  };

  // console.log(isCompact);
  return (
    <div className="flex items-center justify-center bg-purple-light min-h-[calc(100%_-_65px)] py-[40px] font-plus-jakarta-sans">
      <ChatBot />
      <div
        className={`${
          isCompact
            ? "flex w-full px-[100px] gap-[22px]"
            : "px-[10px] min-[1864px]:px-[150px] xl:px-[100px] w-full grid grid-cols-1 lg:grid-cols-2 min-[1864px]:gap-[0px] gap-[50px]"
        }`}
      >
        <div className={`${!isCompact ? "flex justify-center w-full" : ""}`}>
          <Stepper
            isCompact={isCompact}
            setIsCompact={setIsCompact}
            handleBack={handleBack}
          />
        </div>

        <div
          className={`${!isCompact ? "flex justify-center" : "flex flex-1"}`}
        >
          {/* <Questions isCompact={isCompact} /> */}
          <QuestionsScreen
            setIsCompact={setIsCompact}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            subStep={subStep}
            setSubStep={setSubStep}
            activeBusinessType={activeBusinessType}
            setActiveBusinessType={setActiveBusinessType}
            handleBack={handleBack}
          />
        </div>
      </div>
    </div>
  );
};

export default NewBusinessPlan;
