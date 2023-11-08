import { HiMiniArrowLeft } from "react-icons/hi2";
import QuestionAiBox from "./QuestionAiBox";
import { setAnswer } from "../store/answersSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import InputListBox from "./InputListBox";
import InputPercentage from "./InputPercentage";

const SectionTwoStep2 = ({
  currentBusinessPlanId,
  handleBack,
}: {
  currentBusinessPlanId: string | undefined;
  handleBack: () => void;
}) => {
  const dispatch = useAppDispatch();

  const answers = useAppSelector((state) => state.answers.answers);
  const mois_rythme_croisiere = answers["20"];

  console.log("mois rythme_croisiere : ", mois_rythme_croisiere);

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
          <div className="text-[24px] font-bold">Le rythme de croisière</div>
        </div>
        <div className="flex items-center text-[#A08FB1] text-[16px] ps-[38px] mr-[150px] mb-[28px] font-plus-jakarta-sans font-[500]">
          Sous quelle forme allez vous développer votre activité ? Comment vous
          allez gagner concrètement de l’argent ?
        </div>
      </div>

      <div className="overflow-y-scroll py-[5px] overflow-x-hidden px-2 qb-thumb h-[500px] mb-[10px]">
        <div className="w-full sm:px-[35spx] mb-[24px]">
          <div className="flex items-center justify-between">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Combien de mois de progression anticipez-vous avant l’atteinte du
              rythme de croisière ?
            </label>
          </div>
          <InputListBox
            coloredAiBorder={true}
            value={answers["20"] ? { name: answers["20"] } : { name: "0" }}
            options={[
              { name: "0" },
              { name: "1" },
              { name: "2" },
              { name: "3" },
            ]}
            onChange={(selectedOption) => {
              handleInputChange("20", selectedOption.name);
              // console.log("Selected option : ", selectedOption);
            }}
          />

          <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
            Le rythme de croisière est le moment ou votre restaurant est à sa
            pleine capacité de chiffre d’affaires
          </div>
        </div>
        <div className="mt-[10px] mb-6">
          <QuestionAiBox
            message={
              "En moyenne, les restaurants de votre secteur ont besoin de  3 mois pour atteindre leur rythme de croisière."
            }
          />
        </div>

        {/* Mois 1 */}
        {mois_rythme_croisiere === "1" ||
        mois_rythme_croisiere === "2" ||
        mois_rythme_croisiere === "3" ? (
          <>
            <div className="w-full sm:px-[35spx] mb-[24px]">
              <label className="block px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
                Quelle est la progression en pourcentage pour le mois 1 ?
              </label>

              <InputPercentage
                coloredAiBorder={true}
                value={answers["21"] ? answers["21"] : "0%"}
                onChange={(value) => handleInputChange("21", value)}
              />
              <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
                Cocktails, jus, café....
              </div>
            </div>
            <div className="mt-[10px] mb-6">
              <QuestionAiBox
                message={
                  "En moyenne le premier mois la progression est de  19% pour les restaurants dans votre secteur."
                }
              />
            </div>
          </>
        ) : null}

        {/* Mois 2 */}
        {mois_rythme_croisiere === "2" || mois_rythme_croisiere === "3" ? (
          <>
            <div className="w-full sm:px-[35spx] mb-[24px]">
              <label className="block px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
                Quelle est la progression en pourcentage pour le mois 2 ?
              </label>

              <InputPercentage
                coloredAiBorder={true}
                value={answers["22"] ? answers["22"] : "0%"}
                onChange={(value) => handleInputChange("22", value)}
              />
              <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
                Cocktails, jus, café....
              </div>
            </div>
            <div className="mt-[10px] mb-6">
              <QuestionAiBox
                message={
                  "En moyenne le premier mois la progression est de 40% pour les restaurants dans votre secteur."
                }
              />
            </div>
          </>
        ) : null}
        {/* Mois 3 */}
        {mois_rythme_croisiere === "3" ? (
          <>
            <div className="w-full sm:px-[35spx] mb-[24px]">
              <label className="block px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
                Quelle est la progression en pourcentage pour le mois 3 ?
              </label>

              <InputPercentage
                coloredAiBorder={true}
                value={answers["23"] ? answers["23"] : "0%"}
                onChange={(value) => handleInputChange("23", value)}
              />
              <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
                Cocktails, jus, café....
              </div>
            </div>
            <div className="mt-[10px] mb-6">
              <QuestionAiBox
                message={
                  "En moyenne le premier mois la progression est de  70% pour les restaurants dans votre secteur."
                }
              />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default SectionTwoStep2;
