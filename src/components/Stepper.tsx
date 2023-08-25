import { BsCheckLg } from "react-icons/bs";
import stepsData from "../fixtures/stepsData";
import { useAppSelector } from "../hooks/hooks";

const Stepper = () => {
  const currentStep = useAppSelector((state) => state.stepper.currentStep);

  const renderStepIcon = (stepNumber: number) => {
    const baseClass =
      "absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2";

    if (stepNumber < currentStep) {
      return (
        <div className="relative w-10 h-10">
          <div
            className={`${baseClass} w-10 h-10 bg-foundation-purple-normal border-4 border-[#f8f2fe] rounded-full`}
          >
            <BsCheckLg
              color="#fef6ee"
              size="24px"
              className="mt-[4px] ml-[3px]"
            />
          </div>
        </div>
      );
    } else if (stepNumber === currentStep) {
      return (
        <div className="relative w-10 h-10">
          <img
            className={`${baseClass} rounded-2xl`}
            alt=""
            src="/StepCircleCurrent.svg"
          />
        </div>
      );
    } else {
      return (
        <div className="relative w-10 h-10">
          <img
            className={`${baseClass} rounded-2xl`}
            alt=""
            src="/StepCircle.svg"
          />
        </div>
      );
    }
  };

  const getLineColor = (stepNumber: number) => {
    if (stepNumber === currentStep && stepNumber !== stepsData.length) {
      return "bg-[#ddc8f1]";
    }
    return stepNumber < currentStep
      ? "bg-foundation-purple-normal"
      : "bg-gainsboro";
  };

  return (
    <div className="flex flex-col items-center w-full sm:w-[470px] lg:w-[560px] min-[1920px]:w-[600px] h-max md:h-[792px] bg-white rounded-2xl border-[1px] border-solid border-foundation-purple-light-hover overflow-hidden text-left text-lg text-foundation-purple-dark-active font-plus-jakarta-sans">
      <div className="flex flex-col items-start w-full h-[76px] border-b-[1px] border-solid border-foundation-purple-light-hover text-xs text-lightslategray">
        <div className="flex flex-col items-start justify-center h-full gap-[8px] ml-auto mr-8">
          <div className="tracking-[-0.02em] leading-[18px] font-medium w-[246px]">
            Vous êtes à 12% d’avoir terminé les questions
          </div>
          <div className="w-[245px] flex flex-row items-center justify-start">
            <div className="flex-1 relative rounded-lg h-2">
              <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded bg-foundation-purple-light-hover h-2" />
              <div className="absolute w-[22.44%] top-[0px] right-[77.56%] left-[0%] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-foundation-purple-normal h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className=" listbox-options flex flex-col items-start justify-start w-11/12 h-[580px] py-[2rem] px-5 gap-10 overflow-auto m-4 hide-scrollbar hover:scrollbar-width-thin hover:scrollbar-thumb-rounded-full scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-800 scrollbar-track-gray-300">
        {stepsData.map((step, index) => (
          <div key={step.id} className="flex items-start w-full">
            <div className="flex flex-col items-center mr-4">
              {renderStepIcon(index + 1)}
              {index !== stepsData.length - 1 && (
                <div className={`${getLineColor(index + 1)} w-0.5 h-12`}></div>
              )}
            </div>
            <div className="flex flex-col gap-2 flex-grow mt-2">
              <b className="tracking-[-0.02em] leading-[24px]">{step.labels}</b>
              <div className="text-smi leading-[18px] font-medium text-lightslategray w-full">
                {step.description}
              </div>
              {index <= currentStep && (
                <div className="flex flex-row gap-2 text-center text-xs font-text-xs-medium">
                  {step.tags.map((tag) => {
                    if (index + 1 > currentStep) return null;

                    const tagClass =
                      index + 1 < currentStep
                        ? "bg-success-50 text-limegreen"
                        : "bg-[#FAF6FD] text-[#8347BD]";

                    return (
                      <div
                        key={tag.content}
                        className={`flex flex-row gap-2 text-center text-xs font-text-xs-medium rounded-2xl ${tagClass} flex flex-row py-0.5 pr-2 pl-1.5 items-center justify-start gap-[4px] mix-blend-multiply`}
                      >
                        <BsCheckLg />
                        <div className="leading-[18px] font-medium">
                          {tag.content}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
