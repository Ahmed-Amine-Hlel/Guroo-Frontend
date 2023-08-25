import { InputNumber } from "antd";
import styled from "styled-components";

type InputPercentageProps = {
  onChange: (value: string) => void;
  value?: string;
};

const Wrapper = styled.div`
  .ant-input-number {
    border-start-start-radius: 76px !important;
    border-end-start-radius: 76px !important;
    border-start-end-radius: 76px !important;
    border-end-end-radius: 76px !important;
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
  .ant-input-number-handler-wrap {
    display: none;
  }

  & .ant-input-number-input {
    color: #6d3b9e;
    font-size: 16px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 500;
    line-height: 24px;
    word-wrap: break-word;
    padding: 16px 24px;
  }
`;

const InputPercentage = ({ onChange, value = "0%" }: InputPercentageProps) => {
  return (
    <div className="relative flex items-center w-full">
      <Wrapper>
        <StyledInputNumber
          parser={(value) => (value ? value.replace("%", "") : "")}
          className="w-[470px]"
          value={parseFloat(value)}
          onChange={(numValue) => {
            if (typeof numValue === "number") {
              onChange(`${numValue}%`);
            }
          }}
        />
      </Wrapper>
      <img
        src="/Percent.svg"
        alt="Percent Icon"
        className="hover:cursor-pointer absolute right-[20px]"
      />
    </div>
  );
};

export default InputPercentage;
