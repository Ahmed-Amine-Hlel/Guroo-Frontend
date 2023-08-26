import Stepper from "../../components/Stepper";
import Questions from "../../components/Questions";
import { decrementStep, incrementStep } from "../../store/StepperSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import ChatBot from "../../components/ChatBot";

const NewBusinessPlan = () => {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector((state) => state.stepper.currentStep);

  return (
    <div className="flex items-center justify-center bg-purple-light min-h-[calc(100%_-_65px)] py-[40px] font-plus-jakarta-sans">
      <ChatBot />
      <div className="px-[10px] min-[1864px]:px-[150px] xl:px-[100px] w-full grid grid-cols-1 lg:grid-cols-2 min-[1864px]:gap-[0px] gap-[50px]">
        <div className="flex justify-center w-full">
          <Stepper />
          {/* <div>
            <button
              className="relative w-10 h-10"
              onClick={() => dispatch(incrementStep())}
            >
              +
            </button>
            {currentStep}
            <button
              className="relative w-10 h-10"
              onClick={() => dispatch(decrementStep())}
            >
              -
            </button>
          </div> */}
        </div>

        <div className="flex justify-center w-full">
          <Questions />
        </div>
      </div>
    </div>
  );
};

export default NewBusinessPlan;
