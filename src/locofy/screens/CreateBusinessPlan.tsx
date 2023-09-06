import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { createBusinessPlanAsync } from "../../store/businessPlan/businessPlanSlice";
import { resetAnswers } from "../../store/answersSlice";
import { resetCurrentStep } from "../../store/StepperSlice";
import { FiArrowRight } from "react-icons/fi";

const CreateBusinessPlan = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [newBusiness, setNewBusiness] = useState({
    title: "",
    description: "",
  });

  const handleCreateBusiness = () => {
    if (newBusiness.title && newBusiness.description) {
      dispatch(createBusinessPlanAsync(newBusiness)).then((action) => {
        if (createBusinessPlanAsync.fulfilled.match(action)) {
          dispatch(resetCurrentStep());
          dispatch(resetAnswers());
          navigate("/new-business-plan");
        } else {
          console.error(action.error);
        }
      });
    }
  };
  return (
    <div
      className="flex flex-col items-center justify-center gap-[16px] min-h-[calc(100%_-_65px)] bg-[#f4edfb] px-[20px] lg:px-[100px] py-[40px] font-plus-jakarta-sans"
      style={{
        backgroundImage: `url(/Layer_1.png)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mb-[30px]">
        <img
          alt="logo"
          src="/Vector-logo.png"
          className="w-[140px] h-[104px] flex-shrink-0 object-contain"
        />
      </div>
      <div className="transition-all ease-in-out duration-600 w-[350px] md:w-[450px] lg:w-[470px] xl:w-[500px]">
        <div className="mb-[18px]">
          <input
            type="text"
            placeholder="Le nom de votre entreprise"
            className="text-[14px] h-[56px] block w-full px-[24px] py-[16px] 
                      bg-white border-[1px] border-gray-warm-200 
                      rounded-[76px] text-sm shadow-sm text-foundation-purple-darker
                      placeholder-foundation-purple-dark
                      focus:outline-none focus:border-foundation-purple-light-hover focus:ring-1 focus:ring-foundation-purple-light-hover
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            value={newBusiness.title}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, title: e.target.value })
            }
          />
        </div>
        <div className="mb-[30px]">
          <textarea
            placeholder="Une courte description ...."
            className="text-[14px] resize-none min-h-[140px] mt-1 block w-full px-[24px] py-[16px] bg-white border border-gainsboro 
                      rounded-[24px] text-sm shadow-sm text-foundation-purple-darker
                      focus:outline-none focus:border-foundation-purple-light-hover focus:ring-1 focus:ring-foundation-purple-light-hover
                      invalid:border-pink-500 invalid:text-pink-600
                      placeholder-foundation-purple-dark
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            value={newBusiness.description}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            className="flex items-center justify-center gap-[8px] h-[56px] w-[202px] px-[16px] py-[10px] text-center text-white rounded-[48px] bg-gradient-to-r from-foundation-purple-normal from-[45.47%] to-foundation-purple-hover to-[137.9%]"
            onClick={handleCreateBusiness}
          >
            <span>Je me lance</span>
            <FiArrowRight className="text-[20px] mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBusinessPlan;
