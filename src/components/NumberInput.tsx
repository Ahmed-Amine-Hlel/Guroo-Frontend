import { useState, useEffect } from "react";
import { VscTriangleDown } from "react-icons/vsc";

interface NumberInputProps {
  reducedwidth?: boolean;
  onChange?: (value: string) => void;
  value?: string | null;
  validation?: string | null;
  coloredAiBorder?: boolean;
}

const parseValidationString = (validation: string | null) => {
  if (!validation) return {};

  const result: { min?: number; max?: number } = {};
  const pairs = validation.split("|");

  pairs.forEach((pair) => {
    const [key, value] = pair.split(":");
    if (key === "min") result.min = parseInt(value);
    if (key === "max") result.max = parseInt(value);
  });

  return result;
};

const NumberInput: React.FC<NumberInputProps> = ({
  // reducedwidth = false,
  onChange,
  value: incomingValue,
  validation,
  coloredAiBorder,
}) => {
  // console.log("Received validation prop:", validation);

  const [isValid, setIsValid] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const parsedValidation = parseValidationString(validation || null);
  // console.log("Parsed validation:", parsedValidation);

  const defaultValue =
    incomingValue ||
    (parsedValidation && parsedValidation.min
      ? parsedValidation.min.toString()
      : "0");
  // console.log("Calculated defaultValue:", defaultValue);

  const [value, setValue] = useState<string | null>(defaultValue);

  useEffect(() => {
    let valid = true;
    if (value === null || value === undefined) {
      setIsValid(true);
      return;
    }
    if (
      parsedValidation.min !== undefined &&
      Number(value) < parsedValidation.min
    ) {
      valid = false;
    }
    if (
      parsedValidation.max !== undefined &&
      Number(value) > parsedValidation.max
    ) {
      valid = false;
    }
    setIsValid(valid);
  }, [value, parsedValidation]);

  useEffect(() => {
    if (onChange) {
      onChange(defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const baseClasses = `w-full font-medium font-plus-jakarta-sans text-base leading-6 break-words bg-base-white relative rounded-[76px] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border h-14 overflow-hidden flex flex-row py-4 px-6 items-center justify-start focus:outline-none`;

  const validClasses =
    "border-[1px] border-solid border-gray-warm-200 hover:border-[#f4edfb] focus:border-[#f4edfb] text-[#6D3B9E]";
  const invalidClasses =
    "ring-[4px] ring-[#f6dee8] border-[0.50px] border-solid border-[#FDA29B] bg-[#fef3f2] box-shadow-0px-0px-0px-4px-rgba(253,162,155,0.20) text-[#7A271A]";
  return (
    <div className={coloredAiBorder ? "relative gradient-border z-50" : ""}>
      <div className="relative flex items-center w-full">
        <input
          // value={value === null ? "" : value}
          value={value || ""}
          onChange={(e) => {
            if (e.target.value === "") {
              setValue(null);
              return;
            }
            setValue(e.target.value);
            onChange && onChange(e.target.value);
          }}
          className={`${baseClasses} ${
            isValid ? validClasses : invalidClasses
          }`}
          type="number"
          required
        />
        {!isValid ? (
          <>
            <img
              src="/alert-circle.svg"
              alt="Alert Icon"
              className="hover:cursor-pointer absolute right-[20px]"
              onMouseOver={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            />
            {isHover ? (
              <span className="absolute flex items-center right-[5px] top-[-30px] bg-[#902818] text-white px-[12px] py-[8px] rounded-[8px] ">
                <span className="font-Inter text-[12px] font-medium">
                  {parsedValidation.min && Number(value) < parsedValidation.min
                    ? `La valeur doit être supérieure ou égale à ${parsedValidation.min}`
                    : parsedValidation.max &&
                      Number(value) > parsedValidation.max
                    ? `La valeur doit être inférieure ou égal à ${parsedValidation.max}`
                    : `Erreur de validation`}
                </span>
                <span className="absolute bottom-[-10px] right-[20px]">
                  <VscTriangleDown color="#902818" />
                </span>
              </span>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default NumberInput;
