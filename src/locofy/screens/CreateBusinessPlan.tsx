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
          navigate("/new-business-plan");
        } else {
          console.error(action.error);
        }
      });
    }
  };
  return (
    <div className="flex flex-col items-center gap-[16px] min-h-[calc(100%_-_65px)] bg-[#f4edfb] px-[20px] lg:px-[100px] py-[40px] font-plus-jakarta-sans ">
      <div>
        <h1 className='text-[24px] md:text-[26px] lg:text-[32px] xl:text-[36px] font-bold text-foundation-purple-dark-active mb-[30px]'>Créer un nouveau business plan</h1>
      </div>
      <div className='transition-all ease-in-out duration-600 bg-white shadow-2xl w-[350px] md:w-[450px] lg:w-[470px] xl:w-[500px] p-[25px] border border-gainsboro rounded-[16px]'>

        <div className='mb-5'>
          <label htmlFor="title" className='block px-[16px] mb-[12px] text-[14px] text-foundation-purple-darker'>Titre</label>
          <input
            type="text"
            className="text-[14px] h-[56px] block w-full px-[24px] py-[16px] bg-white border border-gainsboro 
                                rounded-[76px] text-sm shadow-sm text-foundation-purple-darker
                                focus:outline-none focus:border-foundation-purple-light-hover focus:ring-1 focus:ring-foundation-purple-light-hover
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            value={newBusiness.title}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, title: e.target.value })
            }
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="title" className='block px-[16px] mb-[12px] text-[14px] text-foundation-purple-darker'>Description</label>
          <textarea
            className="text-[14px] resize-none min-h-[150px] mt-1 block w-full px-[24px] py-[16px] bg-white border border-gainsboro 
                       rounded-[16px] text-sm shadow-sm text-foundation-purple-darker
                       focus:outline-none focus:border-foundation-purple-light-hover focus:ring-1 focus:ring-foundation-purple-light-hover
                       invalid:border-pink-500 invalid:text-pink-600
                       focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            value={newBusiness.description}
            onChange={(e) =>
              setNewBusiness({ ...newBusiness, description: e.target.value })
            }
          >

          </textarea>
        </div>
        <div className='flex'>
          <button
            className='h-[56px] w-full text-center text-white rounded-[48px] bg-foundation-purple-normal hover:bg-foundation-purple-normal-hover'
            onClick={handleCreateBusiness}>
            Ajouter
          </button>
        </div>

      </div>
    </div>
  );
};

export default CreateBusinessPlan;
