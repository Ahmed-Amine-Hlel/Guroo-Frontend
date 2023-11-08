import { HiMiniArrowLeft } from "react-icons/hi2";
import InputListBox from "./InputListBox";
import QuestionAiBox from "./QuestionAiBox";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setAnswer } from "../store/answersSlice";

type Month = {
  name: string;
};

type numberYear = {
  name: string;
};

const SectionOneStep2 = ({
  currentBusinessPlanId,
  handleBack,
}: {
  currentBusinessPlanId: string | undefined;
  handleBack: () => void;
}) => {
  const months: Month[] = [
    { name: "January" },
    { name: "February" },
    { name: "March" },
    { name: "April" },
    { name: "May" },
    { name: "June" },
    { name: "July" },
    { name: "August" },
    { name: "September" },
    { name: "October" },
    { name: "November" },
    { name: "December" },
  ];

  const numberYears: numberYear[] = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "7" },
    { name: "8" },
    { name: "9" },
    { name: "10" },
  ];

  const dispatch = useAppDispatch();

  const answers = useAppSelector((state) => state.answers.answers);

  // console.log("answers : ", answers);

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
            On continue sur notre lancée.
          </div>
        </div>
        <div className="flex items-center text-[#A08FB1] text-[16px] ps-[38px] mr-[150px] mb-[28px] font-plus-jakarta-sans font-[500]">
          Commençons par les bases, on fait les présentations ? Dans cette
          rubrique, donnez nous les premiers éléments structurants de votre
          projet
        </div>
      </div>

      <div className="overflow-y-scroll overflow-x-hidden px-2 py-[5px] qb-thumb h-[500px] mb-[10px]">
        <div className="w-full sm:px-[35spx] mb-[10px]">
          <label className="block px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
            Quand souhaitez vous clôturer votre business plan ?
          </label>

          <InputListBox
            coloredAiBorder={true}
            value={
              answers["11"] ? { name: answers["11"] } : { name: "December" }
            }
            options={months}
            onChange={(selectedOption) => {
              handleInputChange("11", selectedOption.name);
              // console.log("Selected option : ", selectedOption);
            }}
          />
          <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
            La date du clôture de bilan nous permet ...
          </div>
        </div>

        <div className="mb-6">
          <QuestionAiBox
            message={
              "Basé sur nos informations, 97% des entreprises dans le secteur de la restauration clôturent leur business au mois de décembre."
            }
          />
        </div>

        <div className="w-full sm:px-[35spx] mb-[10px]">
          <label className="block px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
            Sur combien d'années voulez-vous faire courir votre Business Plan ?
          </label>

          <InputListBox
            value={answers["12"] ? { name: answers["12"] } : { name: "3" }}
            options={numberYears}
            onChange={(selectedOption) => {
              handleInputChange("12", selectedOption.name);
              // console.log("Selected option : ", selectedOption);
            }}
          />
          <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
            Grâce à Guroo, vous pouvez faire un business plan de 10 ans maximum.
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOneStep2;
