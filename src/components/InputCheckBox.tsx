import { Checkbox } from "antd";
import styled from "styled-components";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

interface InputCheckBoxProps {
  onChange: (value: boolean) => void;
  value?: boolean;
}

export const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-inner {
    border-color: #6d3b9e !important;
    width: 28px;
    height: 28px;
    margin-left: 30px;

    &::after {
      left: 30% !important;
      width: 8px !important;
      height: 13px !important;
    }
  }

  .ant-checkbox:hover .ant-checkbox-inner {
    border-color: #572f7e !important;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #6d3b9e !important;
    border-color: #572f7e !important;
  }

  .ant-checkbox + span {
    color: #344054;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
  }
`;

const InputCheckBox: React.FC<InputCheckBoxProps> = ({
  onChange,
  value = false,
}) => {
  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    onChange(e.target.checked);
  };
  return (
    <StyledCheckbox checked={value} onChange={handleCheckboxChange}>
      Toggle
    </StyledCheckbox>
  );
};

export default InputCheckBox;
