const StringInput = () => {
  return (
    <div className="relative flex items-center w-max">
      <input
        className="border-[1px] border-solid border-gray-warm-200 hover:border-[#f4edfb] focus:border-[#f4edfb] text-[#6D3B9E] font-medium font-plus-jakarta-sans text-base leading-6 break-words bg-base-white relative rounded-[76px] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[470px] h-14 overflow-hidden flex flex-row py-4 px-6 items-center justify-start focus:outline-none"
        type="text"
        required
      />
    </div>
  );
};

export default StringInput;
