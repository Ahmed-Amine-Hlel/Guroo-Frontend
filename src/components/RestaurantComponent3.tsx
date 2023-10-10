import { HiMiniArrowLeft } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setAnswer } from "../store/answersSlice";
import InputAmount from "./InputAmount";

const RestaurantComponent3 = ({
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
              Quel est le ticket moyen du petit déjeuner ?
            </label>

            <InputAmount
              value={answers["49"] ?? 0}
              onChange={(value) => handleInputChange("49", value.toString())}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Le ticket moyen correspond à la somme moyenne dépensée par client
              au sein de votre restaurant.
            </div>
          </div>
        )}

        {/* déjeuner */}
        {isDéjeunerSelected && (
          <div className="w-full sm:px-[35spx] mb-[24px]">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Quel est le ticket moyen du déjeuner ?
            </label>

            <InputAmount
              value={answers["51"] ?? 0}
              onChange={(value) => handleInputChange("51", value.toString())}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Le ticket moyen correspond à la somme moyenne dépensée par client
              au sein de votre restaurant.
            </div>
          </div>
        )}

        {/* dîner */}
        {isDinerSelected && (
          <div className="w-full sm:px-[35spx] mb-[24px]">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Quel est le ticket moyen du dîner ?
            </label>

            <InputAmount
              value={answers["53"] ?? 0}
              onChange={(value) => handleInputChange("53", value.toString())}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Le ticket moyen correspond à la somme moyenne dépensée par client
              au sein de votre restaurant.
            </div>
          </div>
        )}

        {/* brasserie Matin */}
        {isBrasserieMatinSelected && (
          <div className="w-full sm:px-[35spx] mb-[24px]">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Quel est le ticket moyen de la brasserie Matin ?
            </label>

            <InputAmount
              value={answers["50"] ?? 0}
              onChange={(value) => handleInputChange("50", value.toString())}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Le ticket moyen correspond à la somme moyenne dépensée par client
              au sein de votre restaurant.
            </div>
          </div>
        )}

        {/* brasserie Après-Midi */}
        {isBrasserieApresMidiSelected && (
          <div className="w-full sm:px-[35spx] mb-[24px]">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Quel est le ticket moyen de la brasserie après midi ?
            </label>

            <InputAmount
              value={answers["52"] ?? 0}
              onChange={(value) => handleInputChange("52", value.toString())}
            />
            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Le ticket moyen correspond à la somme moyenne dépensée par client
              au sein de votre restaurant.
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantComponent3;
