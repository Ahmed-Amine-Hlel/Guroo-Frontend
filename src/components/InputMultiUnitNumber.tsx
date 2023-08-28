import { InputNumber, Select } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface InputMultiUnitNumberProps {
  value?: string;
  onChange: (value: string) => void;
}

const { Option } = Select;

const Wrapper = styled.div`
  .ant-input-number {
    border-start-start-radius: 76px !important;
    border-end-start-radius: 76px !important;
    border-color: #e7e5e4 !important;
    box-shadow: none !important;
    overflow: hidden !important;
    border: 0.5px #e7e5e4 solid !important;

    &:hover,
    &:focus {
      box-shadow: 0px 0px 0px 4px rgba(248.46, 241.19, 255, 0.58) !important;
    }
  }
`;

const StyledInputNumber = styled(InputNumber)`
  width: 100%;

  & .ant-input-number-input {
    color: #6d3b9e;
    font-size: 16px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 500;
    line-height: 24px;
    word-wrap: break-word;
    padding: 16px 24px;
  }

  & .ant-input-number-group-addon {
    border-start-end-radius: 50px !important;
    border-end-end-radius: 50px !important;
    color: #8347bd !important;
    background-color: #faf5ff !important;
  }

  .ant-select-selector {
    border-color: transparent !important;
    box-shadow: none !important;
  }
`;

const InputMultiUnitNumber: React.FC<InputMultiUnitNumberProps> = ({
  value = "0",
  onChange,
}) => {
  const [numberValue, setNumberValue] = useState<number>(parseFloat(value));
  const [unitValue, setUnitValue] = useState<string>("m²");

  useEffect(() => {
    setNumberValue(parseFloat(value));
  }, [value]);

  useEffect(() => {
    if (value === "0") {
      onChange("0");
    }
  }, []);

  return (
    <Wrapper>
      <StyledInputNumber
        addonAfter={
          <Select
            defaultValue="m²"
            style={{ width: 100 }}
            value={unitValue}
            onChange={(unit) => {
              setUnitValue(unit);
            }}
          >
            <Option value="m²">m²</Option>
            <Option value="Squarefeet">Squarefeet</Option>
          </Select>
        }
        defaultValue={0}
        value={numberValue}
        onChange={(num) => {
          if (num !== null && typeof num === "number") {
            setNumberValue(num);
            onChange(`${num}`);
          }
        }}
      />
    </Wrapper>
  );
};

export default InputMultiUnitNumber;
