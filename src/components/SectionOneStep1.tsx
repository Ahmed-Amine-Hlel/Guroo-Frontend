import dayjs from "dayjs";
import InputListBox from "./InputListBox";
import QuestionAiBox from "./QuestionAiBox";
import InputCalendar from "./InputCalendar";
import { HiMiniArrowLeft } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setAnswer } from "../store/answersSlice";
import { useEffect } from "react";

const SectionOneStep1 = ({
  currentBusinessPlanId,
}: {
  currentBusinessPlanId: string | undefined;
}) => {
  const dispatch = useAppDispatch();

  const answers = useAppSelector((state) => state.answers.answers);

  useEffect(() => {
    if (!answers["9"]) {
      const initialDate = dayjs().format("DD/MM/YYYY");
      dispatch(
        setAnswer({
          rowNumber: "9",
          value: initialDate,
          businessPlanId: currentBusinessPlanId,
        })
      );
    }
  }, [answers, currentBusinessPlanId, dispatch]);

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
              className="text-[24px] opacity-50 cursor-default"
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
          projet.
        </div>
      </div>
      <div className="overflow-y-scroll overflow-x-hidden px-2 py-[5px] qb-thumb h-[500px] mb-[10px]">
        <div className="mb-10 w-full sm:px-[35spx]">
          <div className="mb-6">
            <label className="block px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
              Dans quel pays voulez-vous créer votre restaurant ?
            </label>

            <InputListBox
              value={
                answers["6"] ? { name: answers["6"] } : { name: "Restaurant" }
              }
              options={[
                { name: "Restaurant" },
                { name: "BTP" },
                { name: "SAAS" },
                { name: "E-commerce" },
                { name: "Chaine de resaurants" },
              ]}
              onChange={(selectedOption) => {
                handleInputChange("6", selectedOption.name);
                // console.log("Selected option : ", selectedOption);
              }}
            />
          </div>
          <div className="mb-6">
            <label className="block px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
              Dans quel pays voulez-vous créer votre restaurant ?
            </label>

            <InputListBox
              value={
                answers["13"] ? { name: answers["13"] } : { name: "France" }
              }
              options={[{ name: "France" }]}
              onChange={(selectedOption) => {
                handleInputChange("13", selectedOption.name);
                // console.log("Selected option : ", selectedOption);
              }}
            />

            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Le pays déterminera la devise du business plan
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="block px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
              Quelle est la devise du business plan ?
            </label>

            <InputListBox
              value={answers["7"] ? { name: answers["7"] } : { name: "€" }}
              options={[{ name: "€" }]}
              onChange={(selectedOption) => {
                handleInputChange("7", selectedOption.name);
                // console.log("Selected option : ", selectedOption);
              }}
              coloredAiBorder={true}  
            />
          </div>

          <div className="mb-6">
            <QuestionAiBox
              message={
                "En sélectionnant le pays “France” nous avons déterminé que votre devise serait l’Euro."
              }
            />
          </div>

          <div className="mb-6">
            <label className="block px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
              A quelle date souhaitez-vous démarrer votre business ?
            </label>

            <InputCalendar
              value={dayjs()}
              onChange={(date) => {
                const formattedDate = date ? date.format("DD/MM/YYYY") : null;
                handleInputChange("9", formattedDate);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOneStep1;
