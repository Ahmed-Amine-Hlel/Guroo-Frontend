import { Tooltip } from "antd";
import { HiMiniArrowLeft } from "react-icons/hi2";
import QuestionAiBox from "./QuestionAiBox";
import { useEffect, useState } from "react";

const RestaurantComponent2 = ({ handleBack }: { handleBack: () => void }) => {
  const [selectedBoxes, setSelectedBoxes] = useState<Record<string, boolean>>({
    "Petit-déjeuner": true,
  });
  const boxContents = [
    "Petit-déjeuner",
    "Brasserie Matin",
    "Déjeuner",
    "Brasserie après midi",
    "Diner",
  ];

  useEffect(() => {
    boxContents.forEach((content) => {
      const initialValue = content === "Petit-déjeuner" ? "true" : "false";
      localStorage.setItem(`restaurant-${content}`, initialValue);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBoxClick = (content: string) => {
    const newState = {
      ...selectedBoxes,
      [content]: !selectedBoxes[content],
    };

    setSelectedBoxes(newState);
    localStorage.setItem(
      `restaurant-${content}`,
      newState[content] ? "true" : "false"
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
          <div className="text-[24px] font-bold">
            Quand-est ce qu’on mange ?
          </div>
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

      <div className="overflow-y-scroll py-[5px] qb-thumb h-[500px] mb-[10px]">
        <div className="w-full sm:px-[35spx] mb-[10px]">
          <div className="flex items-center justify-between">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Que proposez vous dans votre restaurant ?
            </label>

            <Tooltip
              placement="topRight"
              title={
                "Votre bar est un centre de revenu à lui tout seul ? Cliquez dessus."
              }
              overlayStyle={{ maxWidth: "450px" }}
            >
              <img
                className="mr-[150px]"
                src="/help-circle.svg"
                alt="circle help"
              />
            </Tooltip>
          </div>

          <div className="space-y-[8px] space-x-[8px] mb-[10px]">
            {boxContents.map((content, index) => (
              <div
                key={index}
                onClick={() => handleBoxClick(content)}
                className={`inline-block p-4 rounded-lg border hover:cursor-pointer hover:bg-[#EDF] hover:!border-[#914FD2] border-[#DDC8F1] bg-[#EFE5F8] text-[#BE8FED] whitespace-nowrap font-[Plus Jakarta Sans] font-medium leading-[24px] text-[16px] ${
                  selectedBoxes[content]
                    ? "bg-[#EDF] border !border-[#914FD2]"
                    : ""
                }`}
              >
                {content}
              </div>
            ))}
          </div>

          <div className="mb-6">
            <QuestionAiBox
              message={
                "Guroo vous recommande de sélectionner au minimum le déjeuner pour votre activité car tous les restaurants dans votre zone géographique vous le proposent."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantComponent2;
