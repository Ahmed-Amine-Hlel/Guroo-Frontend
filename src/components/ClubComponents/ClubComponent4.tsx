import { HiMiniArrowLeft } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setAnswer } from "../../store/answersSlice";
import NumberInput from "../NumberInput";
import QuestionAiBox from "../QuestionAiBox";

const ClubComponent4 = ({
  currentBusinessPlanId,
  handleBack,
}: {
  currentBusinessPlanId: string | undefined;
  handleBack: () => void;
}) => {
  const dispatch = useAppDispatch();

  const answers = useAppSelector((state) => state.answers.answers);

  const handleInputChange = (rowNumber: string, value: unknown) => {
    dispatch(
      setAnswer({
        rowNumber,
        value,
        businessPlanId: currentBusinessPlanId,
      })
    );
  };

  const isPetitDéjeunerSelected =
    localStorage.getItem("club-Petit-déjeuner") === "true";

  const isDéjeunerSelected = localStorage.getItem("club-Déjeuner") === "true";

  const isDinerSelected = localStorage.getItem("club-Diner") === "true";

  const isBrasserieMatinSelected =
    localStorage.getItem("club-Brasserie Matin") === "true";

  const isBrasserieApresMidiSelected =
    localStorage.getItem("club-Brasserie après midi") === "true";

  return (
    <>
      <div>
        <div className="flex items-center gap-[12px] text-[#6D3B9E] mb-[8px]">
          <div>
            <HiMiniArrowLeft
              className="text-[24px] hover:cursor-pointer"
              onClick={handleBack}
            />
          </div>
          <div className="text-[24px] font-bold">Entrons dans le détail</div>
        </div>
        <div className="px-[8px] py-[4px] bg-[#ECD8FF] w-max ms-[38px] rounded-[39px] my-[8px]">
          <div className="text-[12px] text-[#6D3B9E] font-plus-jakarta-sans font-semibold">
            Club
          </div>
        </div>
        <div className="flex items-center text-[#A08FB1] text-[16px] ps-[38px] mr-[150px] mb-[28px] font-plus-jakarta-sans font-[500]">
          Sous quelle forme allez vous développer votre activité ? Comment vous
          allez gagner concrètement de l’argent ?
        </div>
      </div>

      <div className="overflow-y-scroll py-[5px] overflow-x-hidden px-2 qb-thumb h-[500px] mb-[24px]">
        {/* petit déjeuner */}
        {isPetitDéjeunerSelected && (
          <div className="w-full sm:px-[35spx] mb-[24px]">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Combien de couverts attendez-vous au petit déjeuner ?
            </label>

            <NumberInput
              value={answers["153"] ?? 0}
              onChange={(value) => handleInputChange("153", value)}
              validation={"max:|min:0"}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Le nombre de couvert correspond au nombre de personnes que vous
              pensez accueillir une fois votre club à son plein potentiel
            </div>
          </div>
        )}

        {/* déjeuner */}
        {isDéjeunerSelected && (
          <div className="w-full sm:px-[35spx] mb-[24px]">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Combien de couverts attendez-vous au déjeuner ?
            </label>

            <NumberInput
              value={answers["155"] ?? 0}
              onChange={(value) => handleInputChange("155", value)}
              validation={"max:|min:0"}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Le nombre de couvert correspond au nombre de personnes que vous
              pensez accueillir une fois votre club à son plein potentiel
            </div>
          </div>
        )}

        {/* dîner */}
        {isDinerSelected && (
          <div className="w-full sm:px-[35spx] mb-[24px]">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Combien de couverts attendez-vous au dîner ?
            </label>

            <NumberInput
              coloredAiBorder={true}
              value={answers["157"] ?? 0}
              onChange={(value) => handleInputChange("157", value)}
              validation={"max:|min:0"}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Le nombre de couvert correspond au nombre de personnes que vous
              pensez accueillir une fois votre club à son plein potentiel
            </div>
          </div>
        )}

        {isDinerSelected && (
          <div className="mb-6">
            <QuestionAiBox
              message={
                "Votre assistant Guroo vous aide encore sachez que en moyenne, 7m2 sont utilisés par couvert en restauration. En se basant sur vos données, vous pouvez donc avoir un maximum de couverts de 32."
              }
            />
          </div>
        )}
        {/* brasserie Matin */}
        {isBrasserieMatinSelected && (
          <div className="w-full sm:px-[35spx] mb-[24px]">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Combien de couverts attendez-vous à la brasserie matin ?
            </label>

            <NumberInput
              value={answers["154"] ?? 0}
              onChange={(value) => handleInputChange("154", value)}
              validation={"max:|min:0"}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Le nombre de couvert correspond au nombre de personnes que vous
              pensez accueillir une fois votre club à son plein potentiel
            </div>
          </div>
        )}

        {/* brasserie Après-Midi */}
        {isBrasserieApresMidiSelected && (
          <div className="w-full sm:px-[35spx] mb-[24px]">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Combien de couverts attendez-vous à la brasserie après midi ?
            </label>

            <NumberInput
              value={answers["156"] ?? 0}
              onChange={(value) => handleInputChange("156", value)}
              validation={"max:|min:0"}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Le nombre de couvert correspond au nombre de personnes que vous
              pensez accueillir une fois votre club à son plein potentiel
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ClubComponent4;
