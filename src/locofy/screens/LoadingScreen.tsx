import bravoLogo from '../../assets/bravo-image.png'

const LoadingScreen = () => {
    return (
        <div className='transition-all ease-in-out duration-400 flex min-h-screen p-4 sm:p-10 bg-gradient-to-br from-[#914fd2] from-0% to-[#a56be1] to-100%'>
            <div
                className='flex justify-center items-center w-full bg-[#f4edfb] rounded-[16px]'

            >
                <div className='flex flex-col gap-[10px] items-center'>
                    <div className='relative mb-6'>
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-[60px] h-[60px] md:h-[100px] md:w-[100px] text-purple-200 animate-spin dark:text-gray-600 fill-[#914fd2]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div>
                            <img
                                src='save-02.png'
                                alt='save-icon'
                                className='absolute top-[32%] left-[32%] w-[20px] md:w-[35px] object-cover'
                            />
                        </div>
                        <div className='absolute top-[32%] left-[-115%] md:left-[-75%] flex justify-between w-[200px] md:w-[250px]'> 
                            <div>
                                <img
                                    src="loading-1.svg"
                                    alt='stars-1'
                                    className='w-[40px] md:w-[60px] object-cover translate-y-[30px]'
                                />
                            </div>
                            <div>
                                <img
                                    src="loading-2.svg"
                                    alt='stars-1'
                                    className='w-[40px] md:w-[60px] object-cover -translate-y-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='font-plus-jakarta-sans text-center text-[#331C4A] text-[16px] md:text-[40px] font-medium'>
                        <div className='text-[#914FD2]'>
                            Merci pour les réponses
                        </div>
                        <div>
                            Guroo se charge de créer votre fichier
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen