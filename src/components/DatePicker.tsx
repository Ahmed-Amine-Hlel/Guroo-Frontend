import {ChangeEvent} from "react";

interface DatePickerProps {
    id?: string;
    className?: string;
    name?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const getCurrentDate = (): string => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

const DatePicker = ({id, className, name, value, defaultValue = getCurrentDate(), onChange}: DatePickerProps) => {
    return (
        <input
            id={id}
            name={name}
            type="date"
            value={value}
            defaultValue={defaultValue}
            className={`w-full text-start px-[12px] h-[45px] bg-light-p-hover
                border-foundation-purple-light-active bg-[#d9b2ff75]
                focus:outline-none text-[12px] text-[#41245eeb] input-date-icon ${className}`}
            placeholder="Select date"
            onChange={onChange}
        />
    );
};

export default DatePicker;
