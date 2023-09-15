const DatePicker = ({className}: { className: string }) => {
  return (
      <input
          type="date"
          className={`${className} w-full text-start px-[12px] h-[45px] bg-light-p-hover border-[1px]
                border-foundation-purple-light-active bg-[#d9b2ff75]
                focus:outline-none text-[12px] text-[#41245eeb] input-date-icon`}
          placeholder="Select date"
      />
  );
};

export default DatePicker;
