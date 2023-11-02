import { Tooltip } from "antd";
import { HiMiniArrowLeft } from "react-icons/hi2";
import QuestionAiBox from "./QuestionAiBox";
import { useEffect, useState } from "react";
import { setAnswer } from "../store/answersSlice";
import { useAppDispatch } from "../hooks/hooks";

const SectionTwoStep1 = ({
  currentBusinessPlanId,
}: {
  currentBusinessPlanId: string | undefined;
}) => {
  const dispatch = useAppDispatch();

  const boxToRowMap = {
    Restaurant: "39",
    Bar: "40",
    Club: "41",
    Lounge: "42",
    "Beach Club": "43",
  };

  const [selectedBoxes, setSelectedBoxes] = useState<Record<string, boolean>>({
    Restaurant: true,
  });
  const boxContents = ["Restaurant", "Bar", "Club", "Lounge", "Beach Club"];

  useEffect(() => {
    boxContents.forEach((content) => {
      const rowNumber = boxToRowMap[content as keyof typeof boxToRowMap];
      const initialValue = content === "Restaurant" ? "true" : "false";

      dispatch(
        setAnswer({
          rowNumber,
          value: initialValue,
          businessPlanId: currentBusinessPlanId,
        })
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBoxClick = (content: string) => {
    const newState = {
      ...selectedBoxes,
      [content]: !selectedBoxes[content],
    };

    setSelectedBoxes(newState);

    // Get the corresponding Excel row number for this box
    const rowNumber = boxToRowMap[content as keyof typeof boxToRowMap];

    // Dispatch the change to Redux
    dispatch(
      setAnswer({
        rowNumber,
        value: newState[content] ? "true" : "false",
        businessPlanId: currentBusinessPlanId,
      })
    );
  };

  return (
    <>
      <div>
        <div className="flex items-center gap-[12px] text-[#6D3B9E] mb-[8px]">
          <div>
            <HiMiniArrowLeft className="text-[24px] opacity-50 cursor-default" />
          </div>
          <div className="text-[24px] font-bold">Détaillons votre business</div>
        </div>
        <div className="flex items-center text-[#A08FB1] text-[16px] ps-[38px] mr-[150px] mb-[28px] font-plus-jakarta-sans font-[500]">
          Sous quelle forme allez vous développer votre activité ? Comment vous
          allez gagner concrètement de l’argent ?
        </div>
      </div>

      <div className="overflow-y-scroll py-[5px] overflow-x-hidden px-2 qb-thumb h-[500px] mb-[10px]">
        <div className="w-full sm:px-[35spx] mb-[10px]">
          <div className="flex items-center justify-between">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Quels sont vos centres de revenus ?
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

          <div className="space-x-[16px] mb-[10px]">
            {boxContents.map((content, index) => (
              <div
                key={index}
                className={`inline-block relative ${
                  selectedBoxes[content] ? "box-gradient-border z-20" : ""
                }`}
              >
                <div
                  onClick={() => handleBoxClick(content)}
                  className={
                    "p-4 rounded-[8px] border hover:cursor-pointer hover:bg-[#EDF] hover:!border-[#914FD2] border-[#DDC8F1] bg-[#EFE5F8] text-[#BE8FED] whitespace-nowrap font-[Plus Jakarta Sans] font-medium leading-[24px] text-[16px]"
                  }
                >
                  {content}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <QuestionAiBox
              message={
                "En règle générale nos clients ouvrent un bar et un restaurant en même temps dans leur établissement."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTwoStep1;
