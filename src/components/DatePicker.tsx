import { ChangeEvent } from "react";

interface DatePickerProps {
  id?: string;
  className?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker = ({
  id,
  className,
  name,
  value,
  //   defaultValue = getCurrentDate(),
  onChange,
}: DatePickerProps) => {
  return (
    <input
      id={id}
      name={name}
      type="date"
      value={value}
      //   defaultValue={defaultValue}
      className={`w-full text-start px-[12px] h-[45px] bg-light-p-hover
                border-foundation-purple-light-active bg-[#d9b2ff75]
                focus:outline-none text-[12px] text-[#41245eeb] input-date-icon ${className}`}
      placeholder="Select date"
      onChange={onChange}
    />
  );
};

export default DatePicker;
