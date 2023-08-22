import { HiMiniArrowLeft, HiMiniArrowRight } from 'react-icons/hi2'
import InputListBox from './InputListBox'
const Questions = () => {
    return (
        <div className='py-6 h-full w-[470px]'>
            <div className='flex items-center gap-[12px] text-[#6D3B9E] mb-[8px]'>
                <div>
                    <HiMiniArrowLeft
                        className="text-[24px]"
                    />
                </div>
                <div className='text-[24px]'>
                    Commencer maintenant
                </div>
            </div>

            <div className='text-[#A08FB1] text-[16px] ps-[38px] mb-[48px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultrices, justo non feugiat imperdiet.
                Lorem ipsum dolor sit amet.
            </div>


            <div className='mb-10'>
                <div className='mb-6'>
                    <div className='px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active'>
                        Selectionner le metier que vous excercez
                    </div>
                    <InputListBox />
                </div>

                <div className='mb-6'>
                    <div className='px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active'>
                        Selectionner le metier que vous excercez
                    </div>
                    <InputListBox />
                </div>
                <div className='mb-6'>
                    <div className='px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active'>
                        Selectionner le metier que vous excercez
                    </div>
                    <InputListBox />
                </div>
                <div className='mb-6'>
                    <div className='px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active'>
                        Selectionner le metier que vous excercez
                    </div>
                    <InputListBox />
                </div>
                <div className='mb-6'>
                    <div className='px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active'>
                        Selectionner le metier que vous excercez
                    </div>
                    <InputListBox />
                </div>

            </div>

            <div className='flex'>
                <button className='w-full flex justify-center items-center gap-[10px] bg-gradient-to-r from-[#914FD2] from-0% to-[#946CBB] to-100% rounded-[45px] px-[35px] py-[15px] text-white hover:cursor-pointer'>
                    <span className='text-[15px]'>
                        Continuer
                    </span>
                    <span className=''>
                        <HiMiniArrowRight
                            className="text-[20px]"
                        />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Questions