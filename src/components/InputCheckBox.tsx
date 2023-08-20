import { Checkbox } from "antd";
import styled from "styled-components";

export const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-inner {
    border-color: #6d3b9e !important;
    width: 28px;
    height: 28px;

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

const InputCheckBox = () => {
    return <StyledCheckbox>Toggle</StyledCheckbox>;
};

export default InputCheckBox;