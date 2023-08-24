import Stepper from "../../components/Stepper";
import Questions from "../../components/Questions";

const NewBusinessPlan = () => {
    return (
        <div className='flex items-center justify-center bg-purple-light min-h-[calc(100%_-_65px)] px-[20px] py-[40px] font-plus-jakarta-sans'>
            <div className='px-[10px] xl:px-[100px] grid grid-cols-1 lg:grid-cols-2 lg:gap-[120px]'>
                <div className='flex justify-center lg:justify-end'>
                    <Stepper />
                </div>
                <div className='flex justify-center xl:justify-start'>
                    <Questions />
                </div>
            </div>
        </div>
    )
}

export default NewBusinessPlan;
