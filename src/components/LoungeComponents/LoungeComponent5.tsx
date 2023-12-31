import { HiMiniArrowLeft } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setAnswer } from "../../store/answersSlice";
import QuestionAiBox from "../QuestionAiBox";
import InputPercentage from "../InputPercentage";

const LoungeComponent5 = ({
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
          <div className="text-[24px] font-bold">Parlons argent 5 minutes</div>
        </div>
        <div className="px-[8px] py-[4px] bg-[#ECD8FF] w-max ms-[38px] rounded-[39px] my-[8px]">
          <div className="text-[12px] text-[#6D3B9E] font-plus-jakarta-sans font-semibold">
            Lounge
          </div>
        </div>
        <div className="flex items-center text-[#A08FB1] text-[16px] ps-[38px] mr-[150px] mb-[28px] font-plus-jakarta-sans font-[500]">
          Sous quelle forme allez vous développer votre activité ? Comment vous
          allez gagner concrètement de l’argent ?
        </div>
      </div>

      <div className="overflow-y-scroll py-[5px] overflow-x-hidden px-2 qb-thumb h-[500px] mb-[24px]">
        <div className="w-full sm:px-[35spx] mb-[24px]">
          <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
            Sur 100%, quelle est la répartition du chiffre d’affaires comparé
            aux autres produits pour la nourriture ?
          </label>

          <InputPercentage
            coloredAiBorder={true}
            value={answers["237"] ? answers["237"] : "0%"}
            onChange={(value) => handleInputChange("237", value)}
          />

          <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
            Entrées, plats, desserts...
          </div>
        </div>

        <div className="mb-6">
          <QuestionAiBox
            message={
              "La nourriture représente en moyenne  30% du chiffre d’affaire des lounges."
            }
          />
        </div>
        <div className="w-full sm:px-[35spx] mb-[24px]">
          <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
            Sur 100%, quelle est la répartition du chiffre d’affaires comparé
            aux autres produits pour les boissons?
          </label>

          <InputPercentage
            coloredAiBorder={true}
            value={answers["238"] ? answers["238"] : "0%"}
            onChange={(value) => handleInputChange("238", value)}
          />

          <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
            Cocktails, jus, café....
          </div>
        </div>
        <div className="mb-6">
          <QuestionAiBox
            message={
              "Les boissons représentent en moyenne 60% du chiffre d’affaire des lounges."
            }
          />
        </div>

        <div className="w-full sm:px-[35spx] mb-[24px]">
          <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
            Sur 100%, quelle est la répartition du chiffre d’affaires comparé
            aux autres produits pour le reste?
          </label>

          <InputPercentage
            coloredAiBorder={true}
            value={answers["239"] ? answers["239"] : "0%"}
            onChange={(value) => handleInputChange("239", value)}
          />

          <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
            Merchandising, cigarettes, cigares.....
          </div>
        </div>
        <div className="mb-6">
          <QuestionAiBox
            message={
              "Le reste représente en moyenne 10% du chiffre d’affaire des lounges."
            }
          />
        </div>
      </div>
    </>
  );
};

export default LoungeComponent5;
