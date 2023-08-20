import InputCalendar from "./InputCalendar";
import InputAmount from "./InputAmount";
import NumberInput from "./NumberInput";

const MultiInput = () => {
    return (
        <div className="flex flex-row gap-[25px]">
            <InputCalendar reducedwidth />
            <NumberInput reducedwidth />
            <InputAmount reducedwidth />
        </div>
    );
};

export default MultiInput;