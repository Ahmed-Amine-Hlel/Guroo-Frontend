import { BsPlus } from "react-icons/bs";
import DatePicker from "./DatePicker";
import DropDown from "./DropDown";
import { useState, Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setAnswer } from "../store/answersSlice";
import { HiMiniArrowRight } from "react-icons/hi2";

interface MSTableProps {
  handleNext: () => void;
}

const MSTable: React.FC<MSTableProps> = ({ handleNext }) => {
  const [items] = useState<string[]>(["CDI", "CDD", "Freelance"]);
  const [selectedItem, setSelectedItem] = useState<string>(items[0]);
  const [rows, setRows] = useState<number[]>([1]);
  const answers = useAppSelector((state) => state.answers.answers);
  const dispatch = useAppDispatch();

  const convertToYYYYMMDD = (dateString: string) => {
    const [day, month, year] = dateString.split("/");
    return `20${year}-${month}-${day}`;
  };

  const getCurrentDate = (): string => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const addRow = () => {
    if (rows.length < 10) {
      setRows([...rows, rows.length + 1]);
    } else {
      console.log("Maximum number of rows reached.");
    }
  };

  const handleInputChange = (rowNumber: string, value: unknown) => {
    dispatch(
      setAnswer({
        rowNumber,
        value,
      })
    );
  };

  const handleDateChange = (rowNumber: string, dateString: string) => {
    const [year, month, day] = dateString.split("-");
    const formattedDate = `${day}/${month}/${year.substr(-2)}`;
    dispatch(
      setAnswer({
        rowNumber,
        value: formattedDate,
      })
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-[16px] min-h-full bg-[#f4edfb] font-plus-jakarta-sans ">
      <div className="flex flex-col px-[16px] pt-[32px] pb-[12px] bg-white rounded-[16px] w-full">
        <div className="px-[18px] flex flex-col md:flex-row items-center justify-between mb-[25px]">
          <div className="text-foundation-purple-normal text-[32px] text-center md:text-start md:text-[40px] font-bold mb-6 md:mb-0">
            Il est temps de composer votre équipe
          </div>
          <div className="px-[10px] py-[7px] flex items-center justify-center gap-[6px] rounded-[67px] bg-lavender">
            <div className="opacity-70 h-[40px] w-[140px] flex items-center justify-center gap-[5px] border-[1px] border-foundation-purple-normal bg-gradient-to-r from-[#914FD2] from-48% to-[#946CBB] to-137% rounded-[45px] px-[35px] py-[15px] text-white hover:cursor-pointer">
              <div className="text-[14px]">Annuel</div>
              <div className="p-[5px] gap-[10px] bg-white text-foundation-purple-normal rounded-[32px] font-bold text-[10px]">
                X12
              </div>
            </div>
            <div className="h-[40px] w-[140px] flex items-center justify-center gap-[5px] border-[1px] border-foundation-purple-normal bg-gradient-to-r from-[#914FD2] from-48% to-[#946CBB] to-137% rounded-[45px] px-[35px] py-[15px] text-white hover:cursor-pointer">
              <div className="text-[14px]">Mensuel</div>
            </div>
          </div>
        </div>
        <div className="overflow-x-scroll lg:overflow-x-hidden table-scroll mb-[15px]">
          <div className="min-w-max lg:min-w-full">
            <div className="px-[24px] py-[17px]">
              <div className="grid grid-cols-9 gap-[8px]">
                <div className=""></div>
                <div className=""></div>

                <div className="flex justify-between col-span-4">
                  <div className="bg-ghostwhite-200 w-full border-r border-r-[#F2E3FF] rounded-tl-[8px] rounded-bl-[8px] flex items-center px-[9px] py-[16px]">
                    <div className="flex w-full flex-col gap-[9px] items-center justify-center">
                      <div className="font-bold text-[16px] text-foundation-purple-normal">
                        10,393€
                      </div>
                      <div className="text-center text-[8px] text-foundation-purple-dark-active">
                        Coût total employeur
                      </div>
                    </div>
                  </div>
                  <div className="bg-ghostwhite-200 w-full border-r border-r-[#F2E3FF] flex items-center justify-center px-[9px] py-[16px]">
                    <div className="flex w-full flex-col gap-[9px] items-center justify-center">
                      <div className="font-bold text-[16px] text-foundation-purple-normal">
                        8,974€
                      </div>
                      <div className="text-center text-[8px] text-foundation-purple-dark-active">
                        Salaire brut
                      </div>
                    </div>
                  </div>
                  <div className="bg-ghostwhite-200 w-full border-r border-r-[#F2E3FF] flex items-center justify-center px-[9px] py-[16px]">
                    <div className="flex w-full flex-col gap-[9px] items-center justify-center">
                      <div className="font-bold text-[16px] text-foundation-purple-normal">
                        2,927€
                      </div>
                      <div className="text-center text-[8px] text-foundation-purple-dark-active">
                        Salaire net
                      </div>
                    </div>
                  </div>
                  <div className="bg-ghostwhite-200 w-full rounded-tr-[8px] rounded-br-[8px] flex items-center justify-center px-[9px] py-[16px]">
                    <div className="flex w-full flex-col gap-[9px] items-center justify-center">
                      <div className="font-bold text-[16px] text-foundation-purple-normal">
                        2,839€
                      </div>
                      <div className="text-center text-[8px] text-foundation-purple-dark-active">
                        Salaire net après impôts
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-3 bg-ghostwhite-200 rounded-[8px] flex items-center justify-center px-[24px] py-[12px]">
                  <div className="flex w-full flex-col gap-[9px] items-center justify-center">
                    <div className="font-bold text-[16px] text-foundation-purple-normal">
                      26%
                    </div>
                    <div className="text-center text-[8px] text-foundation-purple-dark-active">
                      Votre masse salariale <br /> comparée au CA
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[24px] py-[17px] bg-ghostwhite-200 rounded-[16px]">
              <div className="grid grid-cols-9 gap-[8px] mb-[16px] overflow-y-auto max-h-[345px] qb-thumb">
                <div className="h-[79px] bg-[#d9b2ff75] rounded-[8px] flex items-center px-[13px]">
                  <div className="font-bold text-center w-full text-dark-p">
                    Fonction
                  </div>
                </div>
                <div className=" h-[79px] bg-[#d9b2ff75] rounded-[8px] flex items-center px-[13px]">
                  <div className="font-bold text-center w-full text-dark-p">
                    QTE
                  </div>
                </div>
                <div className="flex justify-between col-span-4">
                  <div className="text-center w-full h-[79px] bg-[#d9b2ff75] border-r border-r-[#E1C8F9] rounded-tl-[8px] rounded-bl-[8px] flex items-center px-[15px]">
                    <div className="flex w-full flex-col gap-[9px]">
                      <div className="font-bold text-[14px] text-dark-p">
                        Coût total employeur
                      </div>
                      <div className="text-[8px] text-[#743FA8F7]">
                        (Dépensé par l'entreprise)
                      </div>
                    </div>
                  </div>
                  <div className="text-center w-full h-[79px] bg-[#d9b2ff75] border-r border-r-[#E1C8F9] flex items-center px-[15px]">
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

                  <div className="text-center w-full h-[79px] bg-[#d9b2ff75] border-r border-r-[#E1C8F9] flex items-center px-[15px]">
                    <div className="flex w-full flex-col gap-[9px]">
                      <div className="font-bold text-[14px] text-dark-p">
                        Salaire net
                      </div>
                      <div className="text-[8px] text-[#743FA8F7]">
                        (Salaire net avant impôt)
                      </div>
                    </div>
                  </div>

                  <div className="text-center w-full h-[79px] bg-[#d9b2ff75] rounded-tr-[8px] rounded-br-[8px] flex items-center px-[15px]">
                    <div className="flex w-full flex-col gap-[9px]">
                      <div className="font-bold text-[14px] text-dark-p">
                        Salaire net après impôts
                      </div>
                      <div className="text-[8px] text-[#743FA8F7]">
                        (Le salaire net payé)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between col-span-2">
                  <div className="w-full h-[79px] bg-[#d9b2ff75] border-r border-r-[#E1C8F9] rounded-tl-[8px] rounded-bl-[8px] flex items-center px-[23px]">
                    <div className="text-center w-full text-dark-p">
                      Date de démarrage
                    </div>
                  </div>
                  <div className="w-full h-[79px] bg-[#d9b2ff75]  rounded-tr-[8px] rounded-br-[8px] flex items-center px-[23px]">
                    <div className="text-center w-full text-dark-p">
                      Date de Fin
                    </div>
                  </div>
                </div>

                <div className="h-[79px] bg-[#d9b2ff75] rounded-[8px] flex items-center px-[23px]">
                  <div className="text-center w-full text-dark-p">
                    Type de <br /> contrat
                  </div>
                </div>

                {/* Row ---------------------------------------------------------------------------------------------------- Begin */}

                {rows.map((row, index) => (
                  <Fragment key={index}>
                    <div className="flex items-center w-full justify-center">
                      <input
                        name={`input-${row}-1`}
                        type="text"
                        className="px-2 text-center w-full h-[45px] bg-light-p-hover border-[1px] border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] focus:outline-none text-[14px] text-[#41245eeb]"
                        value={""}
                      />
                    </div>

                    <div className="flex items-center w-full justify-center">
                      <input
                        name={`input-${row}-2`}
                        type="text"
                        className="px-2 text-center w-full h-[45px] bg-light-p-hover border-[1px] border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] focus:outline-none text-[14px] text-[#41245eeb]"
                        value={answers[`${341 + (row - 1) * 6}`] || ""}
                        onChange={(e) =>
                          handleInputChange(
                            `${341 + (row - 1) * 6}`,
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="flex justify-between col-span-4">
                      <div className="flex items-center w-full justify-center">
                        <input
                          name={`input-${row}-3`}
                          type="text"
                          className="px-2 w-full h-[45px] bg-light-p-hover border-[1px] border-foundation-purple-light-active bg-[#d9b2ff75] rounded-tl-[8px] rounded-bl-[8px] focus:outline-none text-[14px] text-[#41245eeb]"
                          value={"3426 €"}
                        />
                      </div>
                      <div className="flex items-center w-full justify-center">
                        <input
                          name={`input-${row}-4`}
                          type="text"
                          className="px-2 w-[100%] h-[45px] bg-light-p-hover border-b-[1px] border-t-[1px] border-foundation-purple-light-active bg-[#d9b2ff75] focus:outline-none text-[14px] text-[#41245eeb]"
                          value={"2332 €"}
                        />
                      </div>
                      <div className="flex items-center w-full justify-center">
                        <input
                          name={`input-${row}-5`}
                          type="text"
                          className="px-2 w-[100%] h-[45px] bg-light-p-hover border-l-[1px] border-b-[1px] border-t-[1px] border-foundation-purple-light-active bg-[#d9b2ff75] focus:outline-none text-[14px] text-[#41245eeb]"
                          value={answers[`${338 + (row - 1) * 6}`] || ""}
                          onChange={(e) =>
                            handleInputChange(
                              `${338 + (row - 1) * 6}`,
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="flex items-center w-full justify-center">
                        <input
                          name={`input-${row}-6`}
                          type="text"
                          className="px-2 w-[100%] h-[45px] bg-light-p-hover border-[1px] border-foundation-purple-light-active bg-[#d9b2ff75] rounded-tr-[8px] rounded-br-[8px] focus:outline-none text-[14px] text-[#41245eeb]"
                          value={"1721 €"}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between col-span-2">
                      <DatePicker
                        name={`input-${row}-7`}
                        className="rounded-tl-[8px] rounded-bl-[8px] border-[1px]"
                        value={
                          answers[`${339 + (row - 1) * 6}`]
                            ? convertToYYYYMMDD(
                                answers[`${339 + (row - 1) * 6}`]
                              )
                            : getCurrentDate()
                        }
                        onChange={(e) =>
                          handleDateChange(
                            `${339 + (row - 1) * 6}`,
                            e.target.value
                          )
                        }
                      />
                      <DatePicker
                        name={`input-${row}-7`}
                        className="rounded-tr-[8px] rounded-br-[8px] border-[1px]"
                        value={
                          answers[`${340 + (row - 1) * 6}`]
                            ? convertToYYYYMMDD(
                                answers[`${340 + (row - 1) * 6}`]
                              )
                            : getCurrentDate()
                        }
                        onChange={(e) =>
                          handleDateChange(
                            `${340 + (row - 1) * 6}`,
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="flex items-center justify-start">
                      <DropDown
                        items={items}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                      />
                    </div>
                    {/* <div className="">
                      <img
                        src="/trash-icon.svg"
                        alt="tarsh-icon"
                        className="h-[25px] w-[25px] hover:cursor-pointer"
                      />
                    </div> */}
                  </Fragment>
                ))}

                {/* Row ---------------------------------------------------------------------------------------------------- End */}
              </div>

              <div className="flex items-center justify-start lg:justify-end w-full lg:px-[24px] mb-[10px]">
                <button
                  onClick={addRow}
                  className="flex items-center justify-center gap-[8px] h-[40px] px-[32px] border-[1px] border-foundation-purple-normal bg-gradient-to-r from-[#914FD2] from-48% to-[#946CBB] to-137% rounded-[45px] text-white hover:cursor-pointer"
                >
                  <span className="block text-[14px]">
                    Ajouter un nouveau salaire
                  </span>
                  <BsPlus className="text-[26px] text-[#DDC8F1]" />
                </button>
              </div>
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

export default MSTable;
