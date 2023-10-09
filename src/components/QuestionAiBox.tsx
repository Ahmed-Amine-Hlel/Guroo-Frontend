const QuestionAiBox = ({ message }: { message: string }) => {
  return (
    <div className="font-plus-jakarta-sans p-[24px] rounded-[24px] border border-gainsboro ai-card-bg w-full">
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
        {message}
      </div>
    </div>
  );
};

export default QuestionAiBox;
