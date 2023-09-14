import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface InputCheckBoxProps {
  onChange: (value: string) => void;
  value?: boolean;
}

const CheckboxContainer = styled.div`
  display: flex;
  padding: 0px 16px;
  align-items: flex-start;
  gap: 24px;
`;

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    display: none;
  }
`;

const StyledCheckbox = styled.span`
  display: flex;
  width: 24.01px;
  height: 24.01px;
  padding: 3.601px;
  justify-content: center;
  align-items: center;
  border-radius: 7.203px;
  border: 1.2px solid var(--primary-600, #7f56d9);
  background: var(--primary-50, #f9f5ff);
`;

const CheckboxLabel = styled.span`
  color: var(--foundation-purple-normal, #914fd2);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const InputCheckBox: React.FC<InputCheckBoxProps> = ({
  onChange,
  value = false,
}) => {
  const [ouiChecked, setOuiChecked] = useState(value);
  const [nonChecked, setNonChecked] = useState(!value);

  useEffect(() => {
    onChange(ouiChecked ? "true" : "false");
  }, [ouiChecked]);

  const handleOuiChange = () => {
    setOuiChecked(true);
    setNonChecked(false);
    onChange("true");
  };

  const handleNonChange = () => {
    setNonChecked(true);
    setOuiChecked(false);
    onChange("false");
  };

  return (
    <CheckboxContainer>
      <CheckboxWrapper>
        <StyledCheckbox
          onClick={handleOuiChange}
          style={{
            backgroundColor: ouiChecked ? "#F9F5FF" : "#FFF",
            borderColor: nonChecked ? "#D0D5DD" : "#7F56D9",
          }}
        >
          {ouiChecked && (
            <img
              src="/check.png"
              width="16.807px"
              height="16.807px"
              alt="Checked"
            />
          )}
        </StyledCheckbox>

        <CheckboxLabel>Oui</CheckboxLabel>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <StyledCheckbox
          onClick={handleNonChange}
          style={{
            backgroundColor: nonChecked ? "#FFF" : "#F9F5FF",
            borderColor: nonChecked ? "#7F56D9" : "#D0D5DD",
          }}
        >
          {nonChecked && (
            <img
              src="/check.png"
              width="16.807px"
              height="16.807px"
              alt="Checked"
            />
          )}
        </StyledCheckbox>

        <CheckboxLabel>Non</CheckboxLabel>
      </CheckboxWrapper>
    </CheckboxContainer>
  );
};

export default InputCheckBox;
