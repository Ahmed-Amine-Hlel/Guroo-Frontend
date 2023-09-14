const DatePicker = () => {
  return (
    <div className="relative w-full">
      <input
        type="date"
        className="w-[100%] text-start px-[12px] w-[100%] h-[45px] bg-light-p-hover border-[1px] 
                border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] 
                focus:outline-none text-[14px] text-[#41245eeb] input-date-icon"
        placeholder="Select date"
      />
    </div>
  );
};

export default DatePicker;
