import { useState, useEffect } from "react";
import { VscTriangleDown } from "react-icons/vsc";

interface NumberInputProps {
  reducedwidth?: boolean;
  onChange?: (value: string) => void;
  value?: string | null;
}

const NumberInput: React.FC<NumberInputProps> = ({
  reducedwidth = false,
  onChange,
  value: propValue = null,
}) => {
  const [value, setValue] = useState<string | null>(propValue);
  const [isValid, setIsValid] = useState(true);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (value !== null && (Number(value) < 0 || Number(value) > 100)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [value]);

  const baseClasses = `${
    reducedwidth ? "w-[140px]" : "w-full"
  } font-medium font-plus-jakarta-sans text-base leading-6 break-words bg-base-white relative rounded-[76px] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border h-14 overflow-hidden flex flex-row py-4 px-6 items-center justify-start focus:outline-none`;

  const validClasses =
    "border-[1px] border-solid border-gray-warm-200 hover:border-[#f4edfb] focus:border-[#f4edfb] text-[#6D3B9E]";
  const invalidClasses =
    "ring-[4px] ring-[#f6dee8] border-[0.50px] border-solid border-[#FDA29B] bg-[#fef3f2] box-shadow-0px-0px-0px-4px-rgba(253,162,155,0.20) text-[#7A271A]";
  return (
    <div className="relative flex items-center w-full">
      <input
        value={value === null ? "" : value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange && onChange(e.target.value);
        }}
        className={`${baseClasses} ${isValid ? validClasses : invalidClasses}`}
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
            <span className="absolute flex items-center right-[-32%] top-[-30px] bg-[#902818] text-white px-[12px] py-[8px] rounded-[8px] ">
              <span className="font-Inter text-[12px] font-medium">
                Votre montant doit être inférieur
              </span>
              <span className="absolute bottom-[-10px]">
                <VscTriangleDown color="#902818" />
              </span>
            </span>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default NumberInput;
