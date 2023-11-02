import { useState } from "react";
import { Select, Space } from "antd";
import styled, { createGlobalStyle } from "styled-components";

interface MultiSelectInputProps {
  value: string[];
  onChange: (selectedMonths: string[]) => void;
}

const { Option } = Select;

const Wrapper = styled.div`
  .ant-select-selector {
    width: 100%;
    height: 100%;
    display: flex !important;
    align-items: center !important;
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
    padding-left: 30px !important;
    padding-right: 30px !important;
  }

  .ant-select-selection-item {
    background-color: white !important;
    font-size: 16px !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
    font-weight: bold !important;
  }

  .ant-select-selection-item svg {
    display: none !important;
  }

  .ant-select-selection-item-remove {
    display: none !important;
  }

  .ant-select-selection-item {
    padding: 0px !important;
  }

  .ant-select-selection-item:after {
    content: "," !important;
  }

  .ant-select-selection-placeholder {
    font-size: 16px !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
    color: #a08fb1 !important;
    margin-left: 30px !important;
  }

  .ant-select-arrow {
    display: none !important;
  }

  .ant-select-dropdown {
    background-color: red !important;
  }

  .ant-select-item-option-state {
    background-color: red !important;
  }
`;

const GlobalStyles = createGlobalStyle`

.ant-select-dropdown { 
    border-radius: 16px !important;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08) !important;
    padding-left: 10px !important;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    gap: 10px !important;
}

.ant-select-item-option {
  border-radius: 76px !important;
  margin-right: 10px !important;
  margin-bottom: 10px !important;
  border-radius: 76px !important;
  height: 45px !important;
  display: flex !important;
  align-items: center !important;
}

.ant-select-item-option-content {
    font-size: 16px !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
    font-weight: bold !important;
}

.ant-select-item-option-active {
    border-radius: 76px !important;
    background-color: #faf5ff !important;
    font-size: 16px !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
    font-weight: bold !important;
    margin-right: 15px !important;
}

.ant-select-item-option-selected {
  border-radius: 76px !important;
    background-color: #faf5ff !important;
    font-size: 16px !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
    font-weight: bold !important;
    margin-bottom: 10px !important;
    margin-right: 15px !important;
}   

.anticon svg {
    display: none !important;
}

`;

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (selectedMonths: string[]) => {
    onChange(selectedMonths);
  };

  const [months] = useState<string[]>([
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ]);

  return (
    <Wrapper>
      <GlobalStyles />
      <span className="h-[60px] flex items-center absolute right-[40px] z-10">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.63733 15.0898L12.6373 20.0898L17.6373 15.0898M7.63733 9.08984L12.6373 4.08984L17.6373 9.08984"
            stroke="#E7E5E4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <Select
        mode="multiple"
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "60px",
          borderRadius: "76px",
          backgroundColor: "white",
          border: "0.50px solid #E7E5E4",
          color: "#6D3B9E",
          overflow: "hidden",
        }}
        dropdownStyle={{
          color: "#6D3B9E",
          fontWeight: 500,
          fontFamily: "Plus Jakarta Sans",
        }}
        placeholder="Sélectionnez un mois"
        defaultValue={[months[0]]}
        value={value}
        onChange={handleChange}
      >
        {months.map((month, index) => (
          <Option value={month} label={month} key={index}>
            <div className="w-full flex items-center justify-between">
              <span
                style={{
                  color: "#6D3B9E",
                  fontWeight: 500,
                }}
              >
                {month}
              </span>
              {value.includes(month) && (
                <svg
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.304 2.08984L6.13737 11.2565L1.9707 7.08984"
                    stroke="#8347BD"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </Option>
        ))}
      </Select>
    </Wrapper>
  );
};

export default MultiSelectInput;
