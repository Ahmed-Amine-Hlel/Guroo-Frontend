import Stepper from "../../components/Stepper";
// import Questions from "../../components/Questions";
import ChatBot from "../../components/ChatBot";
import { useState } from "react";
import QuestionsScreen from "./QuestionsScreen";

const NewBusinessPlan = () => {
  const [isCompact, setIsCompact] = useState(false);
  console.log(isCompact);
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
          <Stepper isCompact={isCompact} setIsCompact={setIsCompact} />
        </div>

        <div
          className={`${!isCompact ? "flex justify-center" : "flex flex-1"}`}
        >
          {/* <Questions isCompact={isCompact} /> */}
          <QuestionsScreen setIsCompact={setIsCompact} />
        </div>
      </div>
    </div>
  );
};

export default NewBusinessPlan;
