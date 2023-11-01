import { useState } from "react";
import { HiMiniArrowRight } from "react-icons/hi2";

interface CFTableProps {
  handleNext: () => void;
}

const CFTable: React.FC<CFTableProps> = ({ handleNext }) => {
  const [tableColumns] = useState<string[]>([
    "Type de la charge",
    "Entreprise recomandée",
    "Mode de paiement",
    "Montant HT/mois",
    "Montant TTC/mois",
  ]);

  const [tableData] = useState<string[][]>([
    ["Assurance 👪", "Assurup", "Prélèvement", "59€", "70.9€"],
    ["Frais bancaires 🏦", "Qonto", "Prélèvement", "9.99€", "12.20€"],
    ["Comptable 📈", "Tibi Comptable", "Prélèvement", "400€", "480€"],
  ]);

  return (
    <div className="flex flex-col md:flex-row gap-[16px] w-full min-h-full bg-[#f4edfb] font-plus-jakarta-sans">
      <div className="flex flex-col px-[32px] pt-[45px] pb-[12px] bg-white rounded-[16px] w-full">
        <div className="text-foundation-purple-normal text-[32px] text-center md:text-start md:text-[40px] font-bold mb-[25px]">
          Vos charges fixes
        </div>
        <p className="w-full lg:w-[50%] min-[1864px]:w-[40%] text-[#A08FB1] font-plus-jakarta-sans text-[16px] font-medium leading-[23px]">
          En comptabilité, les charges fixes représentent les charges qui
          restent stables malgré le niveau d’activité de l’entreprise. Autrement
          toutes les charges de votre restaurant qui ne sont pas variables.
        </p>

        <div className="flex flex-wrap gap-[14px] mt-[23px] mb-[25px] w-full md:w-[70%] lg:w-[70%] min-[1864px]:w-[65%] items-center">
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
          ].map((tag, index) => (
            <span
              key={index}
              className="px-[8px] py-[8px] border-[1px] border-[#DDC8F1] 
              bg-foundation-purple-light-hover rounded-[8px] text-[#914FD2] 
              font-plus-jakarta-sans text-[16px] font-medium leading-[24px] cursor-pointer
              hover:bg-purple-light active:ring-2 active:ring-[#DDC8F1] active:ring-opacity-50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ... Rest of the component ... */}
        <div className="overflow-x-scroll lg:overflow-x-hidden table-scroll mb-[15px]">
          <div className="min-w-max lg:min-w-full">
            <div className="ps-[24px] pe-[12px] py-[17px] bg-ghostwhite-200 rounded-[16px]">
              <div className="flex items-center justify-center gap-[10px] mb-[12px]">
                {tableColumns.map((text, index) => (
                  <div
                    key={`col-${index}`}
                    className="h-[60px] w-full bg-[#d9b2ff75] rounded-[8px] flex justify-center items-center font-bold"
                  >
                    <span className="text-[14px] text-center w-full text-dark-p">
                      {text}
                    </span>
                  </div>
                ))}
                <div className="w-[200px]"></div>
              </div>

              {tableData.map((row, index) => (
                <div
                  key={`row-${index}`}
                  className="flex items-center justify-center gap-[10px] mb-[12px]"
                >
                  {row.map((text, index) => (
                    <div
                      key={`col-data-${index}`}
                      className="flex items-center w-full justify-center relative"
                    >
                      <input
                        name={`input-${index}-1`}
                        type="text" /*   */
                        className={`px-2 text-center w-full h-[45px] border-[1px] border-foundation-purple-light-active rounded-[8px] focus:outline-none text-[14px] text-[#41245eeb]
                          ${
                            index === 0
                              ? "bg-light-p-hover text-start px-[18px]"
                              : index === 3 || index === 4
                              ? "text-start px-[18px] bg-white"
                              : "bg-white"
                          }
                          `}
                        value={text}
                      />
                    </div>
                  ))}
                  <div className="w-[200px] flex justify-center items-center rounded-[8px] h-full">
                    <button className="rounded-full p-1 active:bg-[#e4d3f48b] hover:bg-[#e4d3f45c]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M7.125 2.375H11.875M2.375 4.75H16.625M15.0417 4.75L14.4865 13.0778C14.4032 14.3272 14.3615 14.9519 14.0917 15.4256C13.8541 15.8427 13.4957 16.1779 13.0638 16.3873C12.5732 16.625 11.9471 16.625 10.6949 16.625H8.3051C7.05288 16.625 6.42677 16.625 5.93618 16.3873C5.50427 16.1779 5.1459 15.8427 4.90832 15.4256C4.63846 14.9519 4.59681 14.3272 4.51352 13.0778L3.95833 4.75M7.91667 8.3125V12.2708M11.0833 8.3125V12.2708"
                          stroke="#E4D3F4"
                          strokeWidth="1.58333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}

              {/* <div className="flex items-center justify-start lg:justify-end w-full lg:px-[24px]">
                  <button className="flex items-center justify-center gap-[8px] h-[40px] px-[32px] border-[1px] border-foundation-purple-normal bg-gradient-to-r from-[#914FD2] from-48% to-[#946CBB] to-137% rounded-[45px] text-white hover:cursor-pointer">
                    <span className="block text-[14px]">
                      Ajouter un nouveau salaire
                    </span>
                    <BsPlus className="text-[26px] text-[#DDC8F1]" />
                  </button>
                </div> */}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-auto">
          <button
            onClick={handleNext}
            className="w-[150px] sm:w-[325px] flex justify-center items-center gap-[10px] bg-gradient-to-r from-[#914FD2] from-0% to-[#946CBB] to-100% rounded-[45px] px-[35px] py-[15px] text-white hover:cursor-pointer"
          >
            <span className="text-[15px]">Continuer</span>
            <span className="">
              <HiMiniArrowRight className="text-[20px]" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CFTable;
