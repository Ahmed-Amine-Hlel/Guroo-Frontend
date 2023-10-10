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
  }

  .ant-select-selection-item {
    background-color: white !important;
    font-size: 16px !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
    font-weight: bold !important;
  }
`;

const GlobalStyles = createGlobalStyle`

.ant-select-dropdown { 
    border-radius: 16px !important;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08) !important;
}

.ant-select-item-option-content {
    border-radius: 8px !important;
    height: 35px !important;
    display: flex !important;
    align-items: center !important;
    font-size: 16px !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
    font-weight: bold !important;
}

.ant-select-item-option-active {
    border-radius: 8px !important;
    background-color: #faf5ff !important;
    font-size: 16px !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
    font-weight: bold !important;
}

.ant-select-item-option-selected {
    border-radius: 10px !important;
    background-color: #faf5ff !important;
    font-size: 16px !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
    font-weight: bold !important;
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
            <Space
              style={{
                color: "#6D3B9E",
                fontWeight: 500,
              }}
            >
              {month}
            </Space>
          </Option>
        ))}
      </Select>
    </Wrapper>
  );
};

export default MultiSelectInput;
