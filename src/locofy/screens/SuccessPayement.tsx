import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessPayement = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/business-plan");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="transition-all ease-in-out duration-400 flex min-h-screen p-4 sm:p-10 bg-gradient-to-br from-[#914fd2] from-0% to-[#a56be1] to-100%">
      <div className="flex justify-center items-center w-full bg-[#f4edfb] rounded-[16px]">
        <div className="flex flex-col gap-[10px] items-center">
          <img
            src="payement-success.svg"
            alt="logo"
            className="object-cover w-[300px] md:w-[350px] mb-[16px]"
          />
          <div className="font-plus-jakarta-sans text-[#572f7e] text-[16px] md:text-[24px] font-medium">
            Vous venez d’arriver au bout des questions
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPayement;
