import React from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const NoData = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <div className='w-full flex justify-center mb-[8px]'>
                <img
                    alt='no-data'
                    src='/no-state.png'
                    className='w-[140px] h-[89px] flex-shrink-0 object-contain ms-4'
                />
            </div>
            <div className='text-[16px] text-center text-lighter-p mb-[24px] text-plus-jakarta-sans'>
                Vous n’avez pas encore de business plan
            </div>
            <button className='flex justify-center w-full'>
                <BsPlusCircleFill onClick={() => navigate("/create-business-plan")} className="cursor-pointer w-[35px] h-[35px] text-foundation-purple-normal" />
            </button>
        </div>
    )
}

export default NoData