import { HiMiniArrowLeft } from "react-icons/hi2";
import QuestionAiBox from "./QuestionAiBox";
import { setAnswer } from "../store/answersSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import InputCheckBox from "./InputCheckBox";
import InputPercentage from "./InputPercentage";

const SectionTwoStep3 = ({
  currentBusinessPlanId,
  handleBack,
}: {
  currentBusinessPlanId: string | undefined;
  handleBack: () => void;
}) => {
  const dispatch = useAppDispatch();

  const answers = useAppSelector((state) => state.answers.answers);
  const isSetTrue = answers["334"] === "true";

  const handleInputChange = (rowNumber: string, value: unknown) => {
    dispatch(
      setAnswer({
        rowNumber,
        value,
        businessPlanId: currentBusinessPlanId,
      })
    );
  };

  return (
    <>
      <div>
        <div className="flex items-center gap-[12px] text-[#6D3B9E] mb-[8px]">
          <div>
            <HiMiniArrowLeft
              className={`text-[24px] ${"hover:cursor-pointer"}`}
              onClick={handleBack}
            />
          </div>
          <div className="text-[24px] font-bold">Qui travaille pour vous ?</div>
        </div>
        <div className="flex items-center text-[#A08FB1] text-[16px] ps-[38px] mr-[150px] mb-[28px] font-plus-jakarta-sans font-[500]">
          Déterminez ici votre masse salariale de manière intelligente, qui va
          travailler pour vous ? Et à combien ?
        </div>
      </div>

      <div className="overflow-y-scroll py-[5px] overflow-x-hidden px-2 qb-thumb h-[500px] mb-[10px]">
        <div className="w-full sm:px-[35spx] mb-[24px]">
          <div className="flex items-center justify-between">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Voulez-vous raisonner en taux de masse salariale ?
            </label>
          </div>
          <InputCheckBox
            value={true}
            onChange={(boolValue) => handleInputChange("334", boolValue)}
          />

          <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
            Ce raisonnement vous permet d’établir un budget facilement pour
            votre masse salariale en fonction de votre chiffre d’affaires estimé
          </div>
        </div>

        {isSetTrue && (
          <div className="w-full sm:px-[35spx] mb-[10px]">
            <div className="flex items-center justify-between">
              <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
                Quel est le taux de votre masse salariale ?
              </label>
            </div>
            <InputPercentage
              value={answers["335"] ? answers["335"] : "0%"}
              onChange={(value) => handleInputChange("335", value)}
            />

            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Ce raisonnement vous permet d’établir un budget facilement pour
              votre masse salariale en fonction de votre chiffre d’affaires
              estimé
            </div>
            <div className="mt-[10px] mb-6">
              <QuestionAiBox
                message={
                  "Dans votre secteur, la masse salariale représente en moyenne 26% de votre chiffre d’affaires."
                }
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionTwoStep3;
