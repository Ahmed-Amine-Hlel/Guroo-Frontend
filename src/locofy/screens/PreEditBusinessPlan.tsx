import { HiMiniArrowLeft } from 'react-icons/hi2'
import { FiEdit2 } from 'react-icons/fi'
const PreEditBusinessPlan = () => {
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
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between px-[30px] py-[10px] border-b border-b-[#E8D1FF]'>
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
                            <div className='rounded-[8px] px-[12px] py-[8px] text-[12px] text-[#914FD2] bg-light-p'>
                                3 modifications restantes

                            </div>
                        </div>
                    </div>

                </div>
                <div className="pt-[35px] pb-[65px] px-[10px] sm:px-[30px] flex flex-col xl:flex-row gap-[25px]">
                    <div className='flex justify-center'>
                        <div className='w-[392px] h-max md:h-[465px] py-[30px] rounded-[16px] border border-foundation-purple-light-hover'>
                            <div className='px-[30px] text-foundation-purple-dark-active text-[32px] font-medium mb-[10px]'>
                                Que voulez-vous modifier ?
                            </div>
                            <div className='px-[30px] text-foundation-purple-darker opacity-60 mb-[47px]'>
                                Cliquez pour aller directement à la question
                            </div>
                            <div>
                                <div className='px-[17px] py-[16px] border-l-[2px] border-l-foundation-purple-normal-hover bg-light-p-hover text-foundation-purple-normal text-[20px] hover:cursor-pointer'>
                                    Commencer maintenant
                                </div>
                                <div className='opacity-40 pl-[35px] py-[16px] text-foundation-purple-normal text-[20px] hover:cursor-pointer hover:py-[16px] hover:border-l-[2px] hover:border-l-foundation-purple-normal-hover hover:bg-light-p-hover hover:opacity-100 hover:px-[17px]'>
                                    Indicateurs
                                </div>
                                <div className='opacity-40 pl-[35px] py-[16px] text-foundation-purple-normal text-[20px] hover:cursor-pointer hover:py-[16px] hover:border-l-[2px] hover:border-l-foundation-purple-normal-hover hover:bg-light-p-hover hover:opacity-100 hover:px-[17px]'>
                                    Processing
                                </div>
                                <div className='opacity-40 pl-[35px] py-[16px] text-foundation-purple-normal text-[20px] hover:cursor-pointer hover:py-[16px] hover:border-l-[2px] hover:border-l-foundation-purple-normal-hover hover:bg-light-p-hover hover:opacity-100 hover:px-[17px]'>
                                    Export de mon Business Plan
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[465px] rounded-[16px] overflow-y-scroll edit-thumb'>
                        <div className='w-full mb-[14px] pr-[21px]'>
                            <div className='md:px-[37px] w-full border-l-[3px] border-l-foundation-purple-normal bg-purple-light rounded-[16px] p-4 min-h-[102px] '>
                                <div className='flex justify-between items-center mb-[10px]'>
                                    <div className='text-[14px] text-foundation-purple-normal-hover'>
                                        Entrez le nom de votre SAS
                                    </div>
                                    <div className='flex items-center justify-center rounded-full text-[#874CC8] font-bold text-[16px] w-[28px] h-[28px] hover:bg-[#FBF6FF] hover:cursor-pointer'>
                                        <FiEdit2 color="#ddc8f1" className="text-[20px]" />
                                    </div>
                                </div>
                                <div className='text-[10px] text-foundation-purple-darker opacity-50 mb-1'>
                                    Réponse
                                </div>
                                <div className='text-foundation-purple-normal opacity-50'>
                                    GUROO
                                </div>
                            </div>
                        </div>

                        <div className='w-full mb-[14px] pr-[21px]'>
                            <div className='md:px-[37px] w-full border-l-[3px] border-l-foundation-purple-normal bg-purple-light rounded-[16px] p-4 min-h-[102px] '>
                                <div className='flex justify-between items-center mb-[10px]'>
                                    <div className='text-[14px] text-foundation-purple-normal-hover'>
                                        Entrez le nom de votre SAS
                                    </div>
                                    <div className='flex items-center justify-center rounded-full text-[#874CC8] font-bold text-[16px] w-[28px] h-[28px] hover:bg-[#FBF6FF] hover:cursor-pointer'>
                                        <FiEdit2 color="#ddc8f1" className="text-[20px]" />
                                    </div>
                                </div>
                                <div className='text-[10px] text-foundation-purple-darker opacity-50 mb-1'>
                                    Réponse
                                </div>
                                <div className='text-foundation-purple-normal opacity-50'>
                                    GUROO
                                </div>
                            </div>
                        </div>

                        <div className='w-full mb-[14px] pr-[21px]'>
                            <div className='md:px-[37px] w-full border-l-[3px] border-l-foundation-purple-normal bg-purple-light rounded-[16px] p-4 min-h-[102px] '>
                                <div className='flex justify-between items-center mb-[10px]'>
                                    <div className='text-[14px] text-foundation-purple-normal-hover'>
                                        Entrez le nom de votre SAS
                                    </div>
                                    <div className='flex items-center justify-center rounded-full text-[#874CC8] font-bold text-[16px] w-[28px] h-[28px] hover:bg-[#FBF6FF] hover:cursor-pointer'>
                                        <FiEdit2 color="#ddc8f1" className="text-[20px]" />
                                    </div>
                                </div>
                                <div className='text-[10px] text-foundation-purple-darker opacity-50 mb-1'>
                                    Réponse
                                </div>
                                <div className='text-foundation-purple-normal opacity-50'>
                                    GUROO
                                </div>
                            </div>
                        </div>

                        <div className='w-full mb-[14px] pr-[21px]'>
                            <div className='md:px-[37px] w-full border-l-[3px] border-l-foundation-purple-normal bg-purple-light rounded-[16px] p-4 min-h-[102px] '>
                                <div className='flex justify-between items-center mb-[10px]'>
                                    <div className='text-[14px] text-foundation-purple-normal-hover'>
                                        Entrez le nom de votre SAS
                                    </div>
                                    <div className='flex items-center justify-center rounded-full text-[#874CC8] font-bold text-[16px] w-[28px] h-[28px] hover:bg-[#FBF6FF] hover:cursor-pointer'>
                                        <FiEdit2 color="#ddc8f1" className="text-[20px]" />
                                    </div>
                                </div>
                                <div className='text-[10px] text-foundation-purple-darker opacity-50 mb-1'>
                                    Réponse
                                </div>
                                <div className='text-foundation-purple-normal opacity-50'>
                                    GUROO
                                </div>
                            </div>
                        </div>

                        <div className='w-full mb-[14px] pr-[21px]'>
                            <div className='md:px-[37px] w-full border-l-[3px] border-l-foundation-purple-normal bg-purple-light rounded-[16px] p-4 min-h-[102px] '>
                                <div className='flex justify-between items-center mb-[10px]'>
                                    <div className='text-[14px] text-foundation-purple-normal-hover'>
                                        Entrez le nom de votre SAS
                                    </div>
                                    <div className='flex items-center justify-center rounded-full text-[#874CC8] font-bold text-[16px] w-[28px] h-[28px] hover:bg-[#FBF6FF] hover:cursor-pointer'> 
                                        <FiEdit2 color="#ddc8f1" className="text-[20px]" />
                                    </div>
                                </div>
                                <div className='text-[10px] text-foundation-purple-darker opacity-50 mb-1'>
                                    Réponse
                                </div>
                                <div className='text-foundation-purple-normal opacity-50'>
                                    GUROO
                                </div>
                            </div>
                        </div>
                        <div className='w-full mb-[14px] pr-[21px]'>
                            <div className='md:px-[37px] w-full border-l-[3px] border-l-foundation-purple-normal bg-purple-light rounded-[16px] p-4 min-h-[102px] '>
                                <div className='flex justify-between items-center mb-[10px]'>
                                    <div className='text-[14px] text-foundation-purple-normal-hover'>
                                        Entrez le nom de votre SAS
                                    </div>
                                    <div className='flex items-center justify-center rounded-full text-[#874CC8] font-bold text-[16px] w-[28px] h-[28px] hover:bg-[#FBF6FF] hover:cursor-pointer'>
                                        <FiEdit2 color="#ddc8f1" className="text-[20px]" />
                                    </div>
                                </div>
                                <div className='text-[10px] text-foundation-purple-darker opacity-50 mb-1'>
                                    Réponse
                                </div>
                                <div className='text-foundation-purple-normal opacity-50'>
                                    GUROO
                                </div>
                            </div>
                        </div>

                        <div className='w-full mb-[14px] pr-[21px]'>
                            <div className='md:px-[37px] w-full border-l-[3px] border-l-foundation-purple-normal bg-purple-light rounded-[16px] p-4 min-h-[102px] '>
                                <div className='flex justify-between items-center mb-[10px]'>
                                    <div className='text-[14px] text-foundation-purple-normal-hover'>
                                        Entrez le nom de votre SAS
                                    </div>
                                    <div className='flex items-center justify-center rounded-full text-[#874CC8] font-bold text-[16px] w-[28px] h-[28px] hover:bg-[#FBF6FF] hover:cursor-pointer'>
                                        <FiEdit2 color="#ddc8f1" className="text-[20px]" />
                                    </div>
                                </div>
                                <div className='text-[10px] text-foundation-purple-darker opacity-50 mb-1'>
                                    Réponse
                                </div>
                                <div className='text-foundation-purple-normal opacity-50'>
                                    GUROO
                                </div>
                            </div>
                        </div>

                        <div className='w-full mb-[14px] pr-[21px]'>
                            <div className='md:px-[37px] w-full border-l-[3px] border-l-foundation-purple-normal bg-purple-light rounded-[16px] p-4 min-h-[102px] '>
                                <div className='flex justify-between items-center mb-[10px]'>
                                    <div className='text-[14px] text-foundation-purple-normal-hover'>
                                        Entrez le nom de votre SAS
                                    </div>
                                    <div className='flex items-center justify-center rounded-full text-[#874CC8] font-bold text-[16px] w-[28px] h-[28px] hover:bg-[#FBF6FF] hover:cursor-pointer'>
                                        <FiEdit2 color="#ddc8f1" className="text-[20px]" />
                                    </div>
                                </div>
                                <div className='text-[10px] text-foundation-purple-darker opacity-50 mb-1'>
                                    Réponse
                                </div>
                                <div className='text-foundation-purple-normal opacity-50'>
                                    GUROO
                                </div>
                            </div>
                        </div>

                        <div className='w-full mb-[14px] pr-[21px]'>
                            <div className='md:px-[37px] w-full border-l-[3px] border-l-foundation-purple-normal bg-purple-light rounded-[16px] p-4 min-h-[102px] '>
                                <div className='flex justify-between items-center mb-[10px]'>
                                    <div className='text-[14px] text-foundation-purple-normal-hover'>
                                        Entrez le nom de votre SAS
                                    </div>
                                    <div className='flex items-center justify-center rounded-full text-[#874CC8] font-bold text-[16px] w-[28px] h-[28px] hover:bg-[#FBF6FF] hover:cursor-pointer'>
                                        <FiEdit2 color="#ddc8f1" className="text-[20px]" />
                                    </div>
                                </div>
                                <div className='text-[10px] text-foundation-purple-darker opacity-50 mb-1'>
                                    Réponse
                                </div>
                                <div className='text-foundation-purple-normal opacity-50'>
                                    GUROO
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreEditBusinessPlan