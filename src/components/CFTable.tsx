import { useState } from "react";
import { HiMiniArrowRight } from "react-icons/hi2";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { createGlobalStyle } from "styled-components";

interface CFTableProps {
  handleNext: () => void;
}

const GlobalStyles = createGlobalStyle`
  .ant-btn {
    border: 1px solid #DDC8F1 !important;
    &:hover {
      color: #914FD2 !important;
    }
  }
`;

const CFTable: React.FC<CFTableProps> = ({ handleNext }) => {
  const [tableColumns] = useState<string[]>([
    "Type de la charge",
    "Entreprise recomandée",
    "Mode de paiement",
    "Montant HT/mois",
    "Montant TTC/mois",
  ]);

  /* ["Assurance 👪", "Assurup", "Prélèvement", "59€", "70.9€"],
    ["Frais bancaires 🏦", "Qonto", "Prélèvement", "9.99€", "12.20€"],
    ["Comptable 📈", "Tibi Comptable", "Prélèvement", "400€", "480€"], */

  const [tableData, setTableData] = useState<string[][]>([]);
  const [usedTags, setUsedTags] = useState(new Set());

  const initialTags = [
    "Assurances",
    "Honoraires comptables",
    "Honoraires légal",
    "Charges bancaires",
    "Maintenance et réparations",
    "Poste/Tel/Internet",
    "Consommables",
    "Sous-traitance générale",
    "Eau,Eléctricité",
    "Carburant",
    "Fournitures administratives",
    "Location en crédit-bail",
    "Location autres",
    "Charge locatives et corporatives",
  ];

  const dropdownTags = [
    "Etudes et recherches",
    "Personnel extérieur",
    "Rém. d'intermédiaires",
    "Publicité, publications, RP",
    "Transport du bien et du personnel",
    "Petits équip. / Produits entretien",
    "textiles",
    "Licences",
    "Impôts et taxes",
    "Autres charges opérationnelles",
    "Loyer - siège",
    "Marketing",
    "Déplac.,missions et réceptions",
    "Honoraires siège",
    "Assurances siège",
  ];

  const handleAddRow = (loadType: string) => {
    const newRow = [loadType, "", "", "", ""];
    setTableData([...tableData, newRow]);
    setUsedTags(new Set([...usedTags, loadType]));
    console.log(tableData);
  };

  const handleDeleteRow = (rowNumber: number) => {
    const newTableData = tableData.filter((_, index) => index !== rowNumber);
    const removedTag = tableData[rowNumber][0];
    const newUsedTags = new Set(usedTags);
    newUsedTags.delete(removedTag);

    setTableData(newTableData);
    setUsedTags(newUsedTags);
  };

  const handleCellChange = (
    rowNumber: number,
    colNumber: number,
    value: string
  ) => {
    const newTableData = tableData.map((row, index) => {
      if (index === rowNumber) {
        return row.map((cell, cellIndex) => {
          if (cellIndex === colNumber) {
            return value;
          }
          return cell;
        });
      }
      return row;
    });
    setTableData(newTableData);
  };

  const dropdownMenu = (
    <div className="rounded-lg  bg-white h-[380px] overflow-y-auto table-scroll">
      <Menu>
        {dropdownTags.map((tag, index) => (
          <Menu.Item
            key={index}
            disabled={usedTags.has(tag)}
            onClick={() => handleAddRow(tag)}
          >
            <span className="font-plus-jakarta-sans text-sm">{tag}</span>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-[16px] w-full min-h-full bg-[#f4edfb] font-plus-jakarta-sans">
      <GlobalStyles />
      <div className="flex flex-col px-[32px] pt-[45px] pb-[12px] bg-white rounded-[16px] w-full">
        <div className="text-foundation-purple-normal text-[32px] text-center md:text-start md:text-[40px] font-bold mb-[25px]">
          Vos charges fixes
        </div>
        <p className="w-full lg:w-[50%] min-[1864px]:w-[40%] text-[#A08FB1] font-plus-jakarta-sans text-[16px] font-medium leading-[23px]">
          En comptabilité, les charges fixes représentent les charges qui
          restent stables malgré le niveau d’activité de l’entreprise. Autrement
          toutes les charges de votre restaurant qui ne sont pas variables.
        </p>

        <div className="flex flex-wrap gap-[14px] mt-[23px] mb-[25px] w-full items-center">
          {initialTags.map((tag, index) => (
            <button
              key={index}
              className={`p-[8px] border-[1px] border-[#DDC8F1] bg-foundation-purple-light-hover
              rounded-[8px] text-[#914FD2] font-plus-jakarta-sans text-[16px] font-medium leading-[24px]
              cursor-pointer hover:bg-purple-light active:ring-2 active:ring-[#DDC8F1] 
              active:ring-opacity-50 disabled:hover:bg-foundation-purple-light-hover disabled:cursor-not-allowed disabled:opacity-50 disabled:ring-0 disabled:ring-opacity-0`}
              disabled={usedTags.has(tag)}
              onClick={() => handleAddRow(tag)}
            >
              {tag}
            </button>
          ))}

          <Dropdown overlay={dropdownMenu} trigger={["click"]}>
            <Button
              className="h-[42px] flex items-center 
              bg-foundation-purple-light-hover
              rounded-[8px] text-[#914FD2] font-plus-jakarta-sans text-[16px] font-medium leading-[24px]
              cursor-pointer hover:bg-purple-light"
              onClick={(e) => e.preventDefault()}
            >
              Autres <DownOutlined />
            </Button>
          </Dropdown>
        </div>

        {/* ... Rest of the component ... */}
        <div className="overflow-x-scroll lg:overflow-x-hidden table-scroll mb-[15px]">
          <div className="min-w-max lg:min-w-full">
            <div className="ps-[24px] pe-[12px] py-[17px] bg-ghostwhite-200 rounded-[16px] max-h-[380px] overflow-y-auto qb-thumb">
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
                {tableData.length > 0 ? (
                  <div className="w-[200px]"></div>
                ) : null}
              </div>

              {tableData.length === 0 ? (
                <div className="mr-[18px] py-[45px] flex flex-col justify-center items-center">
                  <div className="mb-[19px]">
                    <img
                      src="./file-close.svg"
                      alt="file-close"
                      className="object-cover"
                    />
                  </div>
                  <div className="mb-[14px] text-foundation-purple-normal text-[20px] font-[600] leading-5">
                    Vous n’avez aucun donnée
                  </div>
                </div>
              ) : (
                tableData.map((row, index) => (
                  <div
                    key={`row-${index}`}
                    className="flex items-center justify-center gap-[10px] mb-[12px]"
                  >
                    {row.map((text, rowIndex) => (
                      <div
                        key={`col-data-${rowIndex}`}
                        className="flex items-center w-full justify-center relative"
                      >
                        <input
                          name={`input-${rowIndex}-1`}
                          type="text" /*   */
                          className={`px-2 text-center w-full h-[45px] border-[1px] border-foundation-purple-light-active rounded-[8px] focus:outline-none text-[14px] text-[#41245eeb]
                          ${
                            rowIndex === 0
                              ? "bg-light-p-hover text-start px-[18px]"
                              : rowIndex === 3 || rowIndex === 4
                              ? "text-start px-[18px] bg-white"
                              : "bg-white"
                          }
                          `}
                          readOnly={rowIndex === 0}
                          value={text}
                          onChange={(e) =>
                            handleCellChange(index, rowIndex, e.target.value)
                          }
                        />
                      </div>
                    ))}
                    <div className="w-[200px] flex justify-center items-center rounded-[8px] h-full">
                      <button
                        onClick={() => handleDeleteRow(index)}
                        className="rounded-full p-1 active:bg-[#e4d3f48b] hover:bg-[#e4d3f45c]"
                      >
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
                ))
              )}

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
