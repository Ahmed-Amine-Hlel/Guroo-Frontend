import { BsPlus } from "react-icons/bs";
import DatePicker from "./DatePicker";
import DropDown from "./DropDown";
import { useState } from "react";

const CFTable = () => {
  const [items] = useState<string[]>(["CDI", "CDD", "Freelance"]);
  const [selectedItem, setSelectedItem] = useState<string>(items[0]);

  return (
    <div className="flex flex-col md:flex-row gap-[16px] min-h-screen bg-[#f4edfb] px-[20px] lg:px-[100px] py-[40px] font-plus-jakarta-sans">
      <div className="px-[37px] py-[44px] bg-white rounded-[16px] w-full">
        <div>
          <div className="text-foundation-purple-normal text-[32px] text-center md:text-start md:text-[40px] font-bold mb-[25px]">
            Vos charges fixes
          </div>
          <p className="md:w-[35%] lg:w-[50%] min-[1864px]:w-[40%] text-[#A08FB1] font-plus-jakarta-sans text-[16px] font-medium leading-[23px]">
            En comptabilité, les charges fixes représentent les charges qui
            restent stables malgré le niveau d’activité de l’entreprise.
            Autrement toutes les charges de votre restaurant qui ne sont pas
            variables.
          </p>

          <div className="flex flex-wrap gap-[14px] mt-[23px] md:w-[70%] lg:w-[70%] min-[1864px]:w-[65%] items-center">
            {[
              "Assurance 👪",
              "Electricité ⚡",
              "Loyers 🔑",
              "Logiciels 🖥️",
              "Comptable 📈",
              "Frais bancaires 🏦",
              "Coworking 💪",
              "Véhicule 🚗",
              "Ménage 👨‍👩‍👧‍👦",
              "Autre (Personnalisé)", // Added the button text here
            ].map((tag, index) =>
              index !== 9 ? ( // If it's not the last item
                <span className="px-[8px] py-[8px] border-[1px] border-[#DDC8F1] bg-[#EFE5F8] rounded-[8px] text-[#914FD2] font-plus-jakarta-sans text-[16px] font-medium leading-[24px]">
                  {tag}
                </span>
              ) : (
                // If it's the last item (the button)
                <button className="flex items-center gap-[8px] px-[16px] py-[10px] border-[1px] border-[#914FD2] bg-gradient-to-r from-[#914FD2] to-[#946CBB] rounded-[48px] shadow-lg">
                  <span className="text-[#FFF] font-plus-jakarta-sans text-[16px] font-semibold leading-[20px]">
                    {tag}
                  </span>
                  <img src="/plus.png" alt="Plus Icon" width={20} height={20} />
                </button>
              )
            )}
          </div>

          {/* ... Rest of the component ... */}
          <div className="overflow-x-scroll lg:overflow-x-hidden table-scroll mb-[15px]">
            <div className="min-w-max lg:min-w-full">
              <div className="px-[24px] py-[17px]">
                <div className="grid grid-cols-9 gap-[8px]">
                  <div className=""></div>
                  <div className=""></div>

                  <div className="flex justify-between col-span-4">
                    {/* ... Rest of the component ... */}
                  </div>
                </div>
              </div>
              <div className="px-[24px] py-[17px] bg-ghostwhite-200 rounded-[16px]">
                <div className="grid grid-cols-9 gap-[8px] mb-[16px]">
                  {/* ... Rest of the component ... */}
                </div>

                <div className="flex items-center justify-start lg:justify-end w-full lg:px-[24px] mb-[10px]">
                  <button className="flex items-center justify-center gap-[8px] h-[40px] px-[32px] border-[1px] border-foundation-purple-normal bg-gradient-to-r from-[#914FD2] from-48% to-[#946CBB] to-137% rounded-[45px] text-white hover:cursor-pointer">
                    <span className="block text-[14px]">
                      Ajouter un nouveau salaire
                    </span>
                    <BsPlus className="text-[26px] text-[#DDC8F1]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CFTable;
