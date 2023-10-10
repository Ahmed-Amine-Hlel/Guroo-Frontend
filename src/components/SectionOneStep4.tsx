import { HiMiniArrowLeft } from "react-icons/hi2";
import InputListBox from "./InputListBox";
import QuestionAiBox from "./QuestionAiBox";
import InputCheckBox from "./InputCheckBox";
import InputPercentage from "./InputPercentage";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setAnswer } from "../store/answersSlice";

const SectionOneStep4 = ({
  currentBusinessPlanId,
  handleBack,
}: {
  currentBusinessPlanId: string | undefined;
  handleBack: () => void;
}) => {
  const dispatch = useAppDispatch();

  const answers = useAppSelector((state) => state.answers.answers);

  const selectedStructure = answers["17"];
  const selectedACRE = answers["18"];

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
              // onClick={!isBackDisabled ? handleBack : undefined}
            />
          </div>
          <div className="text-[24px] font-bold">
            Démarrez le questionnaire maintenant !
          </div>
        </div>
        <div className="flex items-center text-[#A08FB1] text-[16px] ps-[38px] mr-[150px] mb-[28px] font-plus-jakarta-sans font-[500]">
          Commençons par les bases, on fait les présentations ? Dans cette
          rubrique, donnez nous les premiers éléments structurants de votre
          projet
        </div>
      </div>

      <div className="overflow-y-scroll py-[5px] qb-thumb h-[500px] mb-[10px]">
        <div className="w-full sm:px-[35spx] mb-[10px]">
          <label className="block px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
            Quelle structure juridique envisagée
          </label>

          <InputListBox
            value={
              answers["17"]
                ? { name: answers["17"] }
                : { name: "Micro Entreprise" }
            }
            options={[
              { name: "Micro Entreprise" },
              { name: "SAS" },
              { name: "SARL" },
            ]}
            onChange={(selectedOption) => {
              handleInputChange("17", selectedOption.name);
              // console.log("Selected option : ", selectedOption);
            }}
          />
        </div>

        <div className="mb-6">
          <QuestionAiBox
            message={
              "En recherchant les entreprises de votre secteur, nous constatons que  % des entreprises sont des SARL.  Attention, le choix de votre forme juridique peut avoir des avantages fiscaux. Vous pouvez consulter les différents avantages avec le chat bot"
            }
          />
        </div>

        {selectedStructure === "Micro Entreprise" && (
          <div className="w-full sm:px-[35spx] mb-[24px]">
            <label className="block px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
              Bénéficiez vous de l’ACRE ?
            </label>

            <InputCheckBox
              value={true}
              onChange={(boolValue) => handleInputChange("18", boolValue)}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              L’ACRE une aide à la création d’entreprise{" "}
            </div>
          </div>
        )}
        {selectedStructure === "Micro Entreprise" && selectedACRE == "true" && (
          <div className="w-full sm:px-[35spx] mb-[10px]">
            <label className="block px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
              Quel est votre taux actuel ?
            </label>

            <InputPercentage
              // coloredAiBorder={hasAIPinkBorder}
              value={answers["401"] ? answers["401"] : "0%"}
              onChange={(value) => handleInputChange("401", value)}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              L'ACRE vous propose 2 taux différents.
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionOneStep4;
