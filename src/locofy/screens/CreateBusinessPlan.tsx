import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { createBusinessPlanAsync } from "../../store/businessPlan/businessPlanSlice";

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
          navigate("/edit-business-plan");
        } else {
          console.error(action.error);
        }
      });
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-[16px] min-h-[calc(100%_-_65px)] bg-[#f4edfb] px-[20px] lg:px-[100px] py-[40px] font-plus-jakarta-sans ">
      <h2 className="text-center text-[36px] font-bold mb-[20px]">
        Création d'un nouveau Business Plan
      </h2>
      <div className="flex flex-col gap-[16px] w-full md:w-[50%] mx-auto">
        <label className="font-medium text-[14px]">Titre</label>
        <input
          type="text"
          placeholder="Title business"
          className="p-[10px] border rounded-[8px]"
          value={newBusiness.title}
          onChange={(e) =>
            setNewBusiness({ ...newBusiness, title: e.target.value })
          }
        />
        <label className="font-medium text-[14px]">Description</label>
        <textarea
          placeholder="description"
          className="p-[10px] border rounded-[8px] h-[100px]"
          value={newBusiness.description}
          onChange={(e) =>
            setNewBusiness({ ...newBusiness, description: e.target.value })
          }
        ></textarea>
        <button
          onClick={handleCreateBusiness}
          className="flex justify-center items-center gap-2 text-[14px] px-[20px] py-[15px] bg-[#914FD2] rounded-[8px] text-white font-medium hover:bg-[#8347bd]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CreateBusinessPlan;
