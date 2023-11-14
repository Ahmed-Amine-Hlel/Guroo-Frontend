import { useState } from 'react';
import { AutoComplete } from 'antd';
import { IoCloseSharp } from 'react-icons/io5';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';

export interface LocationValue {
  label: string;
  score: number;
  id: string;
  name: string;
  postcode: string;
  citycode: string;
  x: number;
  y: number;
  city: string;
  context: string;
  type: string;
  importance: number;
  street: string;
}

interface InputGooglePlacesProps {
  handleSelectOption: (rowNumber: string, value: LocationValue) => void;
}

/* ant-select-selection-search-input */
const Wrapper = styled.div`
  .ant-select-selector {
    height: 3.5rem !important;
    border: 1px solid #e7e5e4 !important;
    outline: none !important;
    box-shadow: none !important;
    border-radius: 76px !important;
    display: flex !important;
    align-items: center !important;
    overflow: hidden !important;
    color: #6d3b9e !important;
    font-size: 16px !important;
    font-family: 'Plus Jakarta Sans', sans-serif !important;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05) !important;
    padding-left: 24px !important;
    padding-right: 24px !important;
    &:hover {
      border-color: #f4edfb !important;
    }
    &:focus {
      border-color: #f4edfb !important;
    }
  }

  .ant-select-selection-search-input {
    height: 100% !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
  }
`;

const GlobalStyles = createGlobalStyle`
  .ant-select-dropdown {
    border-radius: 16px !important;
  }
  .rc-virtual-list {
    border-radius: 12px !important;
  }
  .ant-select-item {
    margin-bottom: 10px !important;
  }
  .ant-select-item-option {
    font-size: 16px !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
    border-radius: 76px !important;
    height: 45px !important;
    display: flex !important;
    align-items: center !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .ant-select-item-option-content{
    width: 100%;  
    border-radius: 76px !important;
    height: 45px !important;
    display: flex !important;
    align-items: center !important;
  }

  .ant-select-item-option-active {
    background-color: #faf5ff !important;
  }
`;

const renderItem = (
  title: string,
  id: string,
  value: string,
  index: number
) => ({
  key: `option-${title}-${index}`,
  value: id,
  label: (
    <div
      className={`flex items-center justify-between w-full h-full px-[24px] ${
        title === value ? 'bg-[#faf5ff] text-[#6D3A9E]' : ''
      }`}
    >
      {title}
      {title === value && (
        <span>
          <svg
            width="17"
            height="13"
            viewBox="0 0 17 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.304 2.08984L6.13737 11.2565L1.9707 7.08984"
              stroke="#8347BD"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </div>
  ),
});

const InputGooglePlaces = ({ handleSelectOption }: InputGooglePlacesProps) => {
  const [value, setValue] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [options, setOptions] = useState<Array<any>>([]);
  const getPanelValue = async (searchText: string) => {
    const q = searchText.replace(/\s/g, '+');
    const result = await axios.get(
      `https://guroo-search-place-service.onrender.com/search/${q}`
    );
    return result.data.features;
  };

  const onSearch = async (text: string) => {
    try {
      if (text.match(/^[A-Za-z0-9].{2,199}$/)) {
        const newOptions = await getPanelValue(text);
        console.log('newOptions', newOptions);
        setOptions(newOptions);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onSelect = (selectedId: string) => {
    const foundOption = options.find(
      (option) => option.properties.id === selectedId
    );
    console.log('Selected object:', foundOption);
    if (foundOption) {
      setValue(foundOption.properties.label);
      /* ------------------ THE DISPATCH FUNCTION WILL BE HERE ------------------ */
      handleSelectOption('14-15', foundOption.properties);
      /* ------------------------------------------------------------------------ */
    }
  };
  const onChange = (data: string) => {
    setValue(data);
  };

  return (
    <Wrapper>
      <GlobalStyles />
      <AutoComplete
        value={value}
        options={options.map((option, index) =>
          renderItem(
            option.properties.label,
            option.properties.id,
            value,
            index
          )
        )}
        style={{
          width: '100%',
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="Rechercher une ville"
        allowClear={{ clearIcon: <IoCloseSharp /> }}
      />
    </Wrapper>
  );
};

export default InputGooglePlaces;
