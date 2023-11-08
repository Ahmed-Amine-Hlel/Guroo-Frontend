import { useEffect, useState } from "react";

const QuestionAiBox = ({ message }: { message: string }) => {
  /* const [displayedMessage, setDisplayedMessage] = useState("");
  const typingSpeed = 50;

  useEffect(() => {
    let index = 0;
    const charsArray = Array.from(message);

    const typingInterval = setInterval(() => {
      if (index < charsArray.length) {
        setDisplayedMessage((prev) => prev + charsArray[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [message]);
  console.log(displayedMessage);
 */
  const [displayResponse, setDisplayResponse] = useState<string>("");
  const [completedTyping, setCompletedTyping] = useState<boolean>(true);

  useEffect(() => {
    const animateTyping = () => {
      setCompletedTyping(false);

      let i = 0;

      const intervalId = setInterval(() => {
        setDisplayResponse(message.slice(0, i));

        i++;

        if (i > message.length) {
          clearInterval(intervalId);
          setCompletedTyping(true);
        }
      }, 40);
      return () => clearInterval(intervalId);
    };

    animateTyping();
  }, [message]);
  
  return (
    <div className="mt-3 relative ai-box-gradient-border z-10">
      <div className="font-plus-jakarta-sans p-[24px] rounded-[24px] ai-card-bg w-full">
        <div className="flex justify-center items-center w-[38px] h-[38px] rounded-full border-[2px] border-primary-600 border-opacity-10 mb-[7px]">
          <div className="flex justify-center items-center w-[27px] h-[27px] rounded-full border-[2px] border-primary-600 border-opacity-30">
            <img
              src="/ai-loader.svg"
              alt="ai-loader"
              className="w-[18px] animate-spin"
            />
          </div>
        </div>

        <div className="text-white text-[18px] font-bold mb-2">Guroo A.I.</div>
        <div className="text-[14px] text-light-gray">
          {/* Basé sur les informations communiquées à la question Quelle surface est
        votre restaurant ? Nous vous conseillons d’avoir un nombre{" "}
        <span className="text-white">
          de couverts compris en 35 et 50 maximum.
        </span> */}
          {/* {message} */}
          {displayResponse}
          {!completedTyping && " |"}
        </div>
      </div>
    </div>
  );
};

export default QuestionAiBox;
