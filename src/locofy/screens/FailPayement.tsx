const FailPayement = () => {
  return (
    <div className="transition-all ease-in-out duration-400 flex min-h-screen p-4 sm:p-10 bg-[#FF8383]">
      <div className="flex justify-center items-center w-full bg-[#FFEFEF] rounded-[16px]">
        <div className="relative flex flex-col gap-[10px] items-center">
          <img
            src="fail-payement.svg"
            alt="logo"
            className="object-cover w-[300px] md:w-[350px] mb-[16px]"
          />
          <div className="font-plus-jakarta-sans text-[#DB5454] text-[16px] md:text-[24px] font-medium">
            Votre paiement à échoué
          </div>
          <button className="absolute -right-1 bottom-[85px] md:-right-4 md:bottom-24">
            <img
              alt="close"
              src="fail-close-btn.png"
              className="w-[60px] md:w-[80px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailPayement;
