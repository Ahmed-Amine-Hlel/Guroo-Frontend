import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef } from 'react'
import {
    deleteBusinessPlanAsync
} from "../store/businessPlan/businessPlanSlice";
import { useAppDispatch } from "../hooks/hooks";

interface ModalProps {
    uid: string
    open: boolean
    setOpen: (open: boolean) => void
}

const Modal = ({ uid, open, setOpen }: ModalProps) => {
    const dispatch = useAppDispatch();
    const cancelButtonRef = useRef(null)

    const handleDelete = () => {
        dispatch(deleteBusinessPlanAsync(uid));
        setOpen(false);
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-25 transition-opacity backdrop-blur-[4px]" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-none">
                    <div className="flex min-h-full mt-[114px] items-start justify-center p-4 text-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="flex justify-center items-center relative sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="sm:w-[420px] px-[20px] py-[24px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                                    <div className="sm:flex sm:items-start mb-[13px]">
                                        <div className="flex justify-center w-full sm:w-max">
                                            <div className='flex justify-center items-center h-[45px] w-[45px] flex-shrink-0 items-center justify-center rounded-full bg-purple-light'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                    <path d="M16.9027 6.13867V5.3375C16.9027 4.21575 16.9027 3.65488 16.6844 3.22643C16.4924 2.84956 16.186 2.54315 15.8091 2.35112C15.3806 2.13281 14.8198 2.13281 13.698 2.13281H12.0957C10.9739 2.13281 10.4131 2.13281 9.98461 2.35112C9.60773 2.54315 9.30133 2.84956 9.1093 3.22643C8.89099 3.65488 8.89099 4.21575 8.89099 5.3375V6.13867M10.8939 11.6467V16.6541M14.8998 11.6467V16.6541M3.88367 6.13867H21.91M19.9071 6.13867V17.3551C19.9071 19.0377 19.9071 19.879 19.5796 20.5217C19.2916 21.087 18.832 21.5466 18.2667 21.8346C17.624 22.1621 16.7827 22.1621 15.1001 22.1621H10.6936C9.01101 22.1621 8.1697 22.1621 7.52702 21.8346C6.96171 21.5466 6.5021 21.087 6.21406 20.5217C5.8866 19.879 5.8866 19.0377 5.8866 17.3551V6.13867" stroke="#914FD2" strokeWidth="1.68292" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="mb-[10px] text-[16px] font-plus-jakarta-sans leading-6 text-foundation-purple-dark">
                                                Êtes vous sur de vouloir supprimer ce  business plan ?
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="font-plus-jakarta-sans text-[14px] text-[#BDA7D3]">
                                                    Cette action est irreversible
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center sm:justify-end">
                                        <div className='font-plus-jakarta-sans  flex items-center gap-[12px]'>
                                            <div
                                                className="text-[#026AA2] px-[16px] py-[12px] text-[14px] inline-flex rounded-[8px] border-[1px] border-[#0086C9] bg-[#0086c90d] hover:bg-[#0086c91d] cursor-pointer"
                                                onClick={() => setOpen(false)}
                                            >
                                                Non
                                            </div>
                                            <div
                                                className="text-[#D07373] px-[16px] py-[12px] text-[14px] inline-flex rounded-[8px] border-[1px] border-[#CF8181] bg-[#ffcec71f] hover:bg-[#ffcec737] cursor-pointer"
                                                onClick={handleDelete}
                                                ref={cancelButtonRef}
                                            >
                                                Oui
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal