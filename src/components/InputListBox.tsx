import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const options = [
  { name: "Restaurant" },
  { name: "BTP" },
  { name: "SAAS" },
  { name: "E-commerce" },
  { name: "Chaine de restaurants" },
];

export default function InputListBox() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="bg[#f4edfb] w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-[76px] bg-white pt-4 pb-4 pl-6 pr-6 text-left border-[0.50px] border-[#E7E5E4] focus:outline-none hover:shadow-custom sm:text-sm">
            <span className="block truncate text-base text-[#6D3B9E] font-[500] font-plus-jakarta-sans leading-6 break-words pl-[14px]">
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[24px]">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.63733 15.0898L12.6373 20.0898L17.6373 15.0898M7.63733 9.08984L12.6373 4.08984L17.6373 9.08984"
                  stroke="#E7E5E4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="z-50 absolute w-full mt-[14px] py-[15px] rounded-[24px] bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <Listbox.Options className="h-[175px] rounded-[24px] listbox-options  overflow-y-auto ">
                {options.map((option, optionIdx) => (
                  <Listbox.Option
                    key={optionIdx}
                    className={() =>
                      `relative cursor-default select-none pl-[10px] pr-4 mb-2`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div
                        className={`flex justify-between items-center w-full px-6 h-[45px] rounded-[56px] ${
                          active ? "bg-[#faf5ff]" : ""
                        } ${selected ? "bg-[#faf5ff]" : ""}`}
                      >
                        <span
                          className={`block truncate text-base text-[#6D3B9E] font-[500] font-plus-jakarta-sans leading-6`}
                        >
                          {option.name}
                        </span>
                        {selected ? (
                          <svg
                            width="17"
                            height="13"
                            viewBox="0 0 17 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.304 2.08984L6.13737 11.2565L1.9707 7.08984"
                              stroke="#8347BD"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : null}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
