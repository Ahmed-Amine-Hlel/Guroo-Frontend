import {Fragment, SetStateAction, Dispatch} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {FaChevronDown} from 'react-icons/fa';

interface DropDownProps {
    items: string[];
    selectedItem: string
    setSelectedItem?: Dispatch<SetStateAction<string>>;
    className?: string

}


const DropDown = ({items, selectedItem, setSelectedItem, className}: DropDownProps) => {
    return (
        <Menu as="div" className="w-full relative inline-block text-left">
            <div>
                <Menu.Button className={
                    `flex items-center justify-between text-start px-[12px] w-[100%] h-[40px] bg-light-p-hover 
    border-foundation-purple-light-active bg-[#d9b2ff75] rounded-[8px] 
    focus:outline-none text-[14px] text-[#41245eeb] ${className}`
                }>
                    {selectedItem && selectedItem}
                    <FaChevronDown className="mr-1 h-[12px] w-[15px] text-[#572F7E] opacity-60" aria-hidden="true"/>
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
                    className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-[#FCF9FF] focus:outline-none">
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
        </Menu>
    )
}

export default DropDown