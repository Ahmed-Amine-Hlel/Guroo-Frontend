import { HiMiniArrowLeft, HiMiniArrowRight } from 'react-icons/hi2'
import { FiEdit2, FiSave } from 'react-icons/fi'
import { VscTriangleRight } from 'react-icons/vsc'
import Stepper from '../../components/Stepper'
import Questions from '../../components/Questions'
const EditBusinessPlan = () => {
    return (
        <div className='bg-[#E9E9E9] min-h-[calc(100%_-_65px)] px-[20px] lg:px-[100px] py-[40px] font-plus-jakarta-sans'>
            <div className='text-[#572F7E] flex items-center gap-4 mb-[25px]'>
                <div className='flex justify-center items-center bg-white w-10 h-10 rounded-[4px] hover:cursor-pointer'>
                    <HiMiniArrowLeft
                        className="text-[20px]"
                    />
                </div>
                <span className='text-[14px]'>
                    Retour
                </span>
            </div>

            <div className='flex flex-col overflow-hidden bg-white rounded-[16px] border border-[#e6ccff6e]'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between px-[30px] py-[10px] bg-[#F4EDFB] border-b border-b-[#E8D1FF]'>
                    <div className='flex items-center gap-[20px] mb-3 lg:mb-0'>

                        <div className="bg-[#FBF6FF] flex items-center justify-center rounded-full text-[#874CC8] font-bold text-[16px] w-[48px] h-[48px]">
                            LB
                        </div>
                        <div className='text-[20px] text-[#5C3C7C]'>
                            Le Bretagne
                        </div>
                        <div className='flex items-center justify-center rounded-full text-[#874CC8] font-bold text-[16px] w-[28px] h-[28px] hover:bg-[#FBF6FF] hover:cursor-pointer'>
                            <FiEdit2 color="#ddc8f1" />
                        </div>
                    </div>

                    <div className='flex items-center gap-[12px]'>
                        <div className='flex items-center'>
                            <div className='rounded-[8px] px-[12px] py-[8px] text-[12px] text-[#914FD2] bg-[#ddc8f1] '>
                                2 modifications restantes

                            </div>
                            <VscTriangleRight
                                className="ms-[-6px] text-[#ddc8f1] "
                            />
                        </div>

                        <button className='flex items-center bg-gradient-to-r from-[#914FD2] from-0% to-[#7D1EE7] to-100% rounded-[45px] px-[12px] py-[8px] text-white gap-[8px] hover:cursor-pointer'>
                            <span className='text-[12px]'>
                                Enregistrer les modifications
                            </span>
                            <FiSave
                                className="text-[14px]"
                            />
                        </button>
                    </div>

                </div>
                <div className="py-[35px] px-2 w-full grid grid-cols-1 xl:grid-cols-2 min-[1864px]:gap-[0px] gap-[50px]">
                    <div className="flex justify-center w-full">
                        <Stepper />
                    </div>

                    <div className="flex justify-center w-full">
                        <Questions />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBusinessPlan