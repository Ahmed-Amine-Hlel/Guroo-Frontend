import { SetStateAction, Dispatch } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Select } from "antd";

const Wrapper = styled.div`
  .ant-select-selector {
    background-color: #fcf9ff !important;
    width: 100% !important;
    height: 43px !important;
    display: flex !important;
    align-items: center !important;
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  .ant-select-selection-item {
    background-color: #fcf9ff !important;
    font-size: 14px !important;
    color: #41245eeb !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
  }
`;

const GlobalStyles = createGlobalStyle`

.ant-select-dropdown { 
    border-radius: 8px !important;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08) !important;
    width: max-content !important;
}

.ant-select-item-option-content {
    border-radius: 4px !important;
    height: 35px !important;
    display: flex !important;
    align-items: center !important;
    font-size: 14px !important;
    color: #41245EEB !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
}

.ant-select-item-option-active {
    border-radius: 8px !important;
    background-color: #faf5ff !important;
    font-size: 14px !important;
    color: #41245EEB !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
}

.ant-select-item-option-selected {
    border-radius: 10px !important;
    background-color: #faf5ff !important;
    font-size: 14px !important;
    color: #41245EEB !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
}   
`;

interface DropDownProps {
  items: string[];
  selectedItem: string;
  setSelectedItem?: Dispatch<SetStateAction<string>>;
  className?: string;
}

const DropDown = ({ items, selectedItem, setSelectedItem }: DropDownProps) => {
  return (
    <Wrapper
      style={{
        width: "100%",
      }}
    >
      <GlobalStyles />
      <Select
        defaultValue={selectedItem ? items[0] : selectedItem}
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          border: "1px solid #DDC8F1",
          color: "#6D3B9E",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
        onChange={setSelectedItem}
        options={items.map((item) => ({ label: item, value: item }))}
      />
    </Wrapper>
  );
};

export default DropDown;

{
  /* <Menu as="div" className="w-full inline-block text-left">
            <div>
                <Menu.Button className={
                    `flex items-center justify-between text-start px-[12px] w-[100%] h-[45px] bg-light-p-hover border 
    border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] 
    focus:outline-none text-[14px] text-[#41245eeb] ${className}`
                }>
                    {selectedItem && selectedItem}
                    <FaChevronDown className="mr-1 h-[12px] w-[15px] text-[#572F7E] opacity-60" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="absolute z-50  mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-[#FCF9FF] focus:outline-none">
                    <div className="py-1">
                        {
                            items && items.map((item, index) => (
                                <Menu.Item key={index}>
                                    <div
                                        className="hover:bg-[#FAF5FF] block px-4 py-2 text-sm cursor-pointer text-foundation-purple-normal"
                                        onClick={() => {
                                            setSelectedItem?.(item)
                                        }}
                                    >
                                        {item}
                                    </div>
                                </Menu.Item>
                            ))
                        }
                    </div>
                </Menu.Items>
            </Transition>
        </Menu> */
}
