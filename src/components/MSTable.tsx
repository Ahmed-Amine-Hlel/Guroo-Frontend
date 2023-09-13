import DatePicker from "./DatePicker";
import DropDown from "./DropDown";


const MSTable = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[16px] min-h-screen bg-[#f4edfb] px-[20px] lg:px-[100px] py-[40px] font-plus-jakarta-sans ">
      <div className="px-[16px] py-[32px] bg-white rounded-[16px] w-full">
        <div className="px-[18px] flex items-center justify-between mb-[25px]">
          <div className="text-foundation-purple-normal text-[40px] font-bold">
            Votre masse salariale
          </div>
          <div className="px-[10px] py-[7px] flex items-center justify-center gap-[6px] rounded-[67px] bg-lavender">
            <div className="h-[40px] w-[140px] flex items-center justify-center gap-[5px] px-[16px] py-[10px] rounded-[49px] border-[1px] border-foundation-purple-normal bg-gradient-to-r from-[#914FD2] from-48% to-[#946CBB] to-137% rounded-[45px] px-[35px] py-[15px] text-white hover:cursor-pointer">
              <div className="text-[14px]">
                Annuel
              </div>
              <div className="p-[5px] gap-[10px] bg-white text-foundation-purple-normal rounded-[32px] font-bold text-[10px]">
                X12
              </div>
            </div>
            <div className="opacity-70 h-[40px] w-[140px] flex items-center justify-center gap-[5px] px-[16px] py-[10px] rounded-[49px] border-[1px] border-foundation-purple-normal bg-gradient-to-r from-[#914FD2] from-48% to-[#946CBB] to-137% rounded-[45px] px-[35px] py-[15px] text-white hover:cursor-pointer">
              <div className="text-[14px]">
                Mensuel
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="px-[24px] py-[17px]">
            <div className="grid grid-cols-7 gap-[8px] ">
              <div className="">

              </div>
              <div className="bg-ghostwhite-200 rounded-[8px] flex items-center px-[24px] py-[12px]">
                <div className="flex w-full flex-col gap-[9px] items-center justify-center">
                  <div className="font-bold text-[16px] text-foundation-purple-normal">
                    10,393€
                  </div>
                  <div className="text-center text-[8px] text-foundation-purple-dark-active">
                    Coût total employeur
                  </div>
                </div>
              </div>
              <div className="bg-ghostwhite-200 rounded-[8px] flex items-center justify-center px-[24px] py-[12px]">
                <div className="flex w-full flex-col gap-[9px] items-center justify-center">
                  <div className="font-bold text-[16px] text-foundation-purple-normal">
                    8,974€
                  </div>
                  <div className="text-center text-[8px] text-foundation-purple-dark-active">
                    Salaire brut
                  </div>
                </div>
              </div>
              <div className="bg-ghostwhite-200 rounded-[8px] flex items-center justify-center px-[24px] py-[12px]">
                <div className="flex w-full flex-col gap-[9px] items-center justify-center">
                  <div className="font-bold text-[16px] text-foundation-purple-normal">
                    2,927€
                  </div>
                  <div className="text-center text-[8px] text-foundation-purple-dark-active">
                    Salaire net
                  </div>
                </div>
              </div>
              <div className="bg-ghostwhite-200 rounded-[8px] flex items-center justify-center px-[24px] py-[12px]">
                <div className="flex w-full flex-col gap-[9px] items-center justify-center">
                  <div className="font-bold text-[16px] text-foundation-purple-normal">
                    2,839€
                  </div>
                  <div className="text-center text-[8px] text-foundation-purple-dark-active">
                    Salaire net après impôts
                  </div>
                </div>
              </div>
              <div className="col-span-2 bg-ghostwhite-200 rounded-[8px] flex items-center justify-center px-[24px] py-[12px]">
                <div className="flex w-full flex-col gap-[9px] items-center justify-center">
                  <div className="font-bold text-[16px] text-foundation-purple-normal">
                    25%
                  </div>
                  <div className="text-center text-[8px] text-foundation-purple-dark-active">
                    Votre masse salariale <br /> comparée au CA
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="px-[24px] py-[17px] bg-ghostwhite-200 rounded-[16px]">
            <div className="grid grid-cols-7 gap-[8px] ">
              <div className="h-[79px] bg-[#d9b2ff75] rounded-[8px] flex items-center px-[13px]">
                <div className="font-bold text-center w-full text-dark-p">
                  Fonction
                </div>
              </div>
              <div className="h-[79px] bg-[#d9b2ff75] rounded-[8px] flex items-center px-[15px]">
                <div className="flex w-full flex-col gap-[9px]">
                  <div className="font-bold text-[14px] text-dark-p">
                    Coût total employeur
                  </div>
                  <div className="text-[8px] text-[#743FA8F7]">
                    (Dépensé par l'entreprise)
                  </div>
                </div>
              </div>
              <div className="h-[79px] bg-[#d9b2ff75] rounded-[8px] flex items-center px-[15px]">
                <div className="flex w-full flex-col gap-[9px]">
                  <div className="font-bold text-[14px] text-dark-p">
                    Salaire Brut
                  </div>
                  <div className="text-[8px] text-[#743FA8F7]">
                    Brut de référence <br />
                    (sans les primes, indemnités ni majorations)
                  </div>
                </div>
              </div>

              <div className="h-[79px] bg-[#d9b2ff75] rounded-[8px] flex items-center px-[15px]">
                <div className="flex w-full flex-col gap-[9px]">
                  <div className="font-bold text-[14px] text-dark-p">
                    Salaire net
                  </div>
                  <div className="text-[8px] text-[#743FA8F7]">
                    (Salaire net avant impôt)
                  </div>
                </div>
              </div>

              <div className="h-[79px] bg-[#d9b2ff75] rounded-[8px] flex items-center px-[15px]">
                <div className="flex w-full flex-col gap-[9px]">
                  <div className="font-bold text-[14px] text-dark-p">
                    Salaire net après impôts
                  </div>
                  <div className="text-[8px] text-[#743FA8F7]">
                    (Le salaire net payé)
                  </div>
                </div>
              </div>

              <div className="h-[79px] bg-[#d9b2ff75] rounded-[8px] flex items-center px-[23px]">
                <div className="text-center w-full text-dark-p">
                  Date de démarrage
                </div>
              </div>

              <div className="h-[79px] bg-[#d9b2ff75] rounded-[8px] flex items-center px-[23px]">
                <div className="text-center w-full text-dark-p">
                  Type de <br /> contrat
                </div>
              </div>

              {/* Line - 2 - */}

              <div className="h-[45px] bg-light-p-hover border-[1px] border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] flex items-center px-[18px]">
                <div className=" w-full text-[14px] text-foundation-purple-normal-hover">
                  Serveur
                </div>
              </div>
              <div className="flex items-center justify-center">
                <input
                  name="input-1"
                  type="text"
                  className="px-2 w-[100%] h-[45px] bg-light-p-hover border-[1px] 
                  border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] 
                  focus:outline-none text-[14px] text-[#41245eeb]"
                  value={"3426 €"}
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  name="input-2"
                  type="text"
                  className="px-2 w-[100%] h-[45px] bg-light-p-hover border-[1px] 
                  border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] 
                  focus:outline-none text-[14px] text-[#41245eeb]"
                  value={"2332 €"}
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  name="input-3"
                  type="text"
                  className="px-2 w-[100%] h-[45px] bg-light-p-hover border-[1px] 
                  border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] 
                  focus:outline-none text-[14px] text-[#41245eeb]"
                  value={"2920 €"}
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  name="input-4"
                  type="text"
                  className="px-2 w-[100%] h-[45px] bg-light-p-hover border-[1px] 
                  border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] 
                  focus:outline-none text-[14px] text-[#41245eeb]"
                  value={"1721 €"}
                />
              </div>
              <div className="flex items-center justify-start">
                <DatePicker />
              </div>
              <div className="flex items-center justify-start">
                <DropDown />
              </div>

              {/* Line - 3 -  */}
              <div className="h-[45px] bg-light-p-hover border-[1px] border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] flex items-center px-[18px]">
                <div className=" w-full text-[14px] text-foundation-purple-normal-hover">
                  Responsable de salle
                </div>
              </div>
              <div className="flex items-center justify-center">
                <input
                  name="input-5"
                  type="text"
                  className="px-2 w-[100%] h-[45px] bg-light-p-hover border-[1px] 
                  border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] 
                  focus:outline-none text-[14px] text-[#41245eeb]"
                  value={"0 €"}
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  name="input-6"
                  type="text"
                  className="px-2 w-[100%] h-[45px] bg-light-p-hover border-[1px] 
                  border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] 
                  focus:outline-none text-[14px] text-[#41245eeb]"
                  value={"0 €"}
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  name="input-7"
                  type="text"
                  className="px-2 w-[100%] h-[45px] bg-light-p-hover border-[1px] 
                  border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] 
                  focus:outline-none text-[14px] text-[#41245eeb]"
                  value={"2200 €"}
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  name="input-8"
                  type="text"
                  className="px-2 w-[100%] h-[45px] bg-light-p-hover border-[1px] 
                  border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] 
                  focus:outline-none text-[14px] text-[#41245eeb]"
                  value={"1716 €"}
                />
              </div>
              <div className="flex items-center justify-start">
                <DatePicker />
              </div>
              <div className="flex items-center justify-start">
                <DropDown />
              </div>

              {/* Line - 4 -  */}
              <div className="h-[45px] bg-light-p-hover border-[1px] border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] flex items-center px-[18px]">
                <div className=" w-full text-[14px] text-foundation-purple-normal-hover">
                  Plongiste
                </div>
              </div>
              <div className="flex items-center justify-center">
                <input
                  name="input-9"
                  type="text"
                  className="px-2 w-[100%] h-[45px] bg-light-p-hover border-[1px] 
                  border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] 
                  focus:outline-none text-[14px] text-[#41245eeb]"
                  value={"3157 €"}
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  name="input-10"
                  type="text"
                  className="px-2 w-[100%] h-[45px] bg-light-p-hover border-[1px] 
                  border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] 
                  focus:outline-none text-[14px] text-[#41245eeb]"
                  value={"2204 €"}
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  name="input-11"
                  type="text"
                  className="px-2 w-[100%] h-[45px] bg-light-p-hover border-[1px] 
                  border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] 
                  focus:outline-none text-[14px] text-[#41245eeb]"
                  value={"1700 €"}
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  name="input-12"
                  type="text"
                  className="px-2 w-[100%] h-[45px] bg-light-p-hover border-[1px] 
                  border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] 
                  focus:outline-none text-[14px] text-[#41245eeb]"
                  value={"1636 €"}
                />
              </div>
              <div className="flex items-center justify-start">
                <DatePicker />
              </div>
              <div className="flex items-center justify-start">
                <DropDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MSTable;
