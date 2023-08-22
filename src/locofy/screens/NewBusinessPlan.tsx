const NewBusinessPlan = () => {
    return (
        <div className='font-plus-jakarta-sans flex justify-center items-center h-full'>
            <div className='transition-all ease-in-out duration-600 shadow-2xl w-[350px] md:w-[450px] lg:w-[470px] xl:w-[500px] p-[25px] border border-gainsboro rounded-[16px]'>
                <form>
                    <div className='mb-5'>
                        <label htmlFor="title" className='text-[14px] text-foundation-purple-darker'>Titre</label>
                        <input
                            type="text"
                            className="text-[14px] h-[56px] mt-1 block w-full px-[24px] py-[16px] bg-white border border-gainsboro 
                                rounded-[76px] text-sm shadow-sm text-foundation-purple-darker
                                focus:outline-none focus:border-foundation-purple-light-hover focus:ring-1 focus:ring-foundation-purple-light-hover
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="title" className='text-[14px] text-foundation-purple-darker'>Description</label>
                        <textarea
                            className="text-[14px] resize-none min-h-[150px] mt-1 block w-full px-[24px] py-[16px] bg-white border border-gainsboro 
                       rounded-[16px] text-sm shadow-sm text-foundation-purple-darker
                       focus:outline-none focus:border-foundation-purple-light-hover focus:ring-1 focus:ring-foundation-purple-light-hover
                       invalid:border-pink-500 invalid:text-pink-600
                       focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        >

                        </textarea>
                    </div>
                    <div className='flex'>
                        <button
                            className='h-[56px] w-full text-center text-white rounded-[48px] bg-foundation-purple-normal hover:bg-foundation-purple-normal-hover'>
                            Ajouter
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewBusinessPlan