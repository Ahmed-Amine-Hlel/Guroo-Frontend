import { useState } from "react";
import { AutoComplete } from "antd";
import { IoCloseSharp } from "react-icons/io5";

const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
});

const InputGooglePlaces = () => {
    const [value, setValue] = useState<string>("");
    const [options, setOptions] = useState<Array<{ value: string }>>([]);

    const getPanelValue = (searchText: string) =>
        !searchText
            ? []
            : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

    const onSelect = (data: string) => {
        console.log("onSelect", data);
    };

    const onChange = (data: string) => {
        setValue(data);
    };

    return (
        <div>
            <AutoComplete
                value={value}
                options={options.map((option) => ({ value: option.value }))}
                style={{ width: 200 }}
                onSelect={onSelect}
                onSearch={(text) => setOptions(getPanelValue(text))}
                onChange={onChange}
                placeholder="Customized clear icon"
                allowClear={{ clearIcon: <IoCloseSharp /> }}
            />
        </div>
    );
};

export default InputGooglePlaces;