import { HiMiniArrowLeft } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setAnswer } from "../store/answersSlice";
import NumberInput from "./NumberInput";

const RestaurantComponent4 = ({
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
    localStorage.getItem("restaurant-Petit-déjeuner") === "true";

  const isDéjeunerSelected =
    localStorage.getItem("restaurant-Déjeuner") === "true";

  const isDinerSelected = localStorage.getItem("restaurant-Diner") === "true";

  const isBrasserieMatinSelected =
    localStorage.getItem("restaurant-Brasserie Matin") === "true";

  const isBrasserieApresMidiSelected =
    localStorage.getItem("restaurant-Brasserie après midi") === "true";

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
            Restaurant
          </div>
        </div>
        <div className="flex items-center text-[#A08FB1] text-[16px] ps-[38px] mr-[150px] mb-[28px] font-plus-jakarta-sans font-[500]">
          Sous quelle forme allez vous développer votre activité ? Comment vous
          allez gagner concrètement de l’argent ?
        </div>
      </div>

      <div className="overflow-y-scroll py-[5px] qb-thumb h-[560px] mb-[24px]">
        {/* petit déjeuner */}
        {isPetitDéjeunerSelected && (
          <div className="w-full sm:px-[35spx] mb-[24px]">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Combien de couverts attendez-vous au petit déjeuner ?
            </label>

            <NumberInput
              value={answers["55"] ?? 0}
              onChange={(value) => handleInputChange("55", value)}
              validation={"max:|min:0"}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Le nombre de couvert correspond au nombre de personnes que vous
              pensez accueillir une fois votre restaurant à son plein potentiel
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
              value={answers["57"] ?? 0}
              onChange={(value) => handleInputChange("57", value)}
              validation={"max:|min:0"}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Le nombre de couvert correspond au nombre de personnes que vous
              pensez accueillir une fois votre restaurant à son plein potentiel
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
              value={answers["59"] ?? 0}
              onChange={(value) => handleInputChange("59", value)}
              validation={"max:|min:0"}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Le nombre de couvert correspond au nombre de personnes que vous
              pensez accueillir une fois votre restaurant à son plein potentiel
            </div>
          </div>
        )}

        {/* brasserie Matin */}
        {isBrasserieMatinSelected && (
          <div className="w-full sm:px-[35spx] mb-[24px]">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Combien de couverts attendez-vous à la brasserie matin ?
            </label>

            <NumberInput
              value={answers["56"] ?? 0}
              onChange={(value) => handleInputChange("56", value)}
              validation={"max:|min:0"}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Le nombre de couvert correspond au nombre de personnes que vous
              pensez accueillir une fois votre restaurant à son plein potentiel
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
              value={answers["58"] ?? 0}
              onChange={(value) => handleInputChange("58", value)}
              validation={"max:|min:0"}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Le nombre de couvert correspond au nombre de personnes que vous
              pensez accueillir une fois votre restaurant à son plein potentiel
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantComponent4;
