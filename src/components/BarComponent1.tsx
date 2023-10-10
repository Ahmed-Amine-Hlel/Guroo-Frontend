import { HiMiniArrowLeft } from "react-icons/hi2";
import InputListBox from "./InputListBox";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setAnswer } from "../store/answersSlice";
import InputMultiSelect from "./InputMultiSelect";

const BarComponent1 = ({
  currentBusinessPlanId,
  handleBack,
}: {
  currentBusinessPlanId: string | undefined;
  handleBack: () => void;
}) => {
  const dispatch = useAppDispatch();

  const answers = useAppSelector((state) => state.answers.answers);

  const monthRowMap: { [key: string]: string } = {
    Janvier: "76",
    Février: "77",
    Mars: "78",
    Avril: "79",
    Mai: "80",
    Juin: "81",
    Juillet: "82",
    Août: "83",
    Septembre: "84",
    Octobre: "85",
    Novembre: "86",
    Décembre: "87",
  };

  const selectedMonths = Object.keys(monthRowMap).filter(
    (month) =>
      answers[monthRowMap[month] as keyof typeof monthRowMap] === "true"
  );

  const handleMultiSelectChange = (selectedMonths: string[]) => {
    Object.keys(monthRowMap).forEach((month) => {
      const isSelected = selectedMonths.includes(month);
      dispatch(
        setAnswer({
          rowNumber: monthRowMap[month] as keyof typeof monthRowMap,
          value: isSelected ? "true" : "false",
          businessPlanId: currentBusinessPlanId,
        })
      );
    });
  };

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
          <div className="text-[24px] font-bold">Fermé ? Ouvert ?</div>
        </div>
        <div className="px-[8px] py-[4px] bg-[#ECD8FF] w-max ms-[38px] rounded-[39px] my-[8px]">
          <div className="text-[12px] text-[#6D3B9E] font-plus-jakarta-sans font-semibold">
            Bar
          </div>
        </div>
        <div className="flex items-center text-[#A08FB1] text-[16px] ps-[38px] mr-[150px] mb-[28px] font-plus-jakarta-sans font-[500]">
          Sous quelle forme allez vous développer votre activité ? Comment vous
          allez gagner concrètement de l’argent ?
        </div>
      </div>

      <div className="overflow-y-scroll py-[5px] qb-thumb h-[500px] mb-[24px]">
        <div className="w-full sm:px-[35spx] mb-[24px]">
          <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
            Combien de jours êtes-vous fermé par semaine ?
          </label>

          <InputListBox
            value={answers["74"] ? { name: answers["74"] } : { name: "0" }}
            options={[
              { name: "0" },
              { name: "1" },
              { name: "2" },
              { name: "3" },
              { name: "4" },
              { name: "5" },
              { name: "6" },
              { name: "7" },
            ]}
            onChange={(selectedOption) => {
              handleInputChange("74", selectedOption.name);
            }}
          />
        </div>

        <div className="w-full sm:px-[35spx] mb-[10px]">
          <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
            Avez-vous prévu de fermer un mois dans l’année ?{" "}
          </label>

          <InputMultiSelect
            value={selectedMonths}
            onChange={handleMultiSelectChange}
          />
        </div>
      </div>
    </>
  );
};

export default BarComponent1;
