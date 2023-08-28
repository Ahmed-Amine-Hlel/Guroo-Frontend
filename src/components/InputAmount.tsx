import { InputNumber } from "antd";
import styled from "styled-components";
import { InputNumberProps } from "antd/lib/input-number";
import { useEffect } from "react";

type StyledInputAmountProps = InputNumberProps & {
  reducedwidth?: boolean;
  value?: number;
  onChange?: (value: string) => void;
};

interface InputAmountProps {
  reducedwidth?: boolean;
  value?: number;
  onChange?: (value: string) => void;
}

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

const StyledInputAmount = styled(
  ({ reducedwidth, ...props }: StyledInputAmountProps) => (
    <InputNumber {...props} />
  )
)`
  width: ${(props) => (props.reducedwidth ? "140px" : "100%")};

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
`;

const InputAmount: React.FC<InputAmountProps> = ({
  reducedwidth = false,
  value = 0,
  onChange,
}) => {
  useEffect(() => {
    if (value === 0 || value === undefined) {
      onChange?.("0");
    }
  }, []);

  return (
    <Wrapper>
      <StyledInputAmount
        addonAfter="€"
        reducedwidth={reducedwidth}
        value={value}
        onChange={(numValue) => {
          if (onChange && typeof numValue === "number") {
            onChange((numValue ?? 0).toString());
          }
        }}
      />
    </Wrapper>
  );
};

export default InputAmount;
