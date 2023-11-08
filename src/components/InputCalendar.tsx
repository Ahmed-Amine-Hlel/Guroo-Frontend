import { Button, DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/fr_FR';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import styled, { createGlobalStyle } from 'styled-components';

dayjs.extend(localizedFormat);
dayjs.locale('fr');

interface InputCalendarProps {
  reducedwidth?: boolean;
  onChange?: (date: dayjs.Dayjs | null) => void;
  value?: dayjs.Dayjs | null;
  coloredAiBorder?: boolean;
}

const StyledDatePicker = styled(DatePicker)<InputCalendarProps>`
  &.ant-picker,
  &.ant-picker-focused {
    border: none;
    background: transparent;
    width: 100%;
    box-shadow: none !important;
    padding: 0;
    .ant-picker-input {
      border-radius: 76px;
      width: 100%;

      background: #fff;
      box-shadow: none !important;
      overflow: hidden !important;
      border: 0.5px #e7e5e4 solid !important;
      display: flex;
      flex-direction: row-reverse;
      padding: 16px 24px;
      align-items: center;
      gap: 8px;
      align-self: stretch;

      input {
        color: #6d3b9e;
        font-size: 16px;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 500;
        line-height: 24px;
        word-wrap: break-word;
      }

      &:hover,
      &:focus {
        box-shadow: 0px 0px 0px 4px rgba(248.46, 241.19, 255, 0.58) !important;
      }
    }
  }

  .ant-picker-input input::placeholder {
    color: #6d3b9e;
  }

  .ant-picker-suffix {
    display: flex;
    align-items: center;

    .anticon {
      display: none;
    }
  }
`;

const CalendarIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

const GlobalStyles = createGlobalStyle`
  .ant-picker-panel-container {
    display: flex;
    width: 470px !important;
    height: 464px;
    border-radius: 24px !important;
    background: #FFF;
    box-shadow: none !important;
    overflow: hidden !important;
    border: 0.5px #e7e5e4 solid !important;
    margin-left: 10px !important;

    &:hover,
    &:focus {
      box-shadow: 0px 0px 0px 4px rgba(248.46, 241.19, 255, 0.58) !important;
    }
  }

  // .ant-picker-panel-layout {
  //   display: flex;
  //   align-items: flex-start;
  //   height: 100%; 
  //   width: 100%;
  // }

  .ant-picker-presets {
    display: flex;
    padding: 12px 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex: 1 0 0;
    flex-shrink: 0;
    align-self: stretch;
    white-space: normal;
    word-wrap: break-word;
    padding: 8px 12px !important;
    ul {
      max-width: 130px;
      overflow-x: auto;
    }
    li {
      display: flex;
      padding: 10px 16px !important;
      margin: 0 !important;
      align-items: center;
      align-self: stretch;
      border-radius: 6px;
      background: #FFF;
      color: #344054;
      font-family: "Quicksand", sans-serif;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      white-space: normal;  
      word-wrap: break-word; 
    }
  }

  .ant-picker-presets ul {
    max-width: 130px !important;
    overflow-x: auto !important;
  }
  
  .ant-picker-presets li {
    white-space: normal !important;
    word-wrap: break-word !important;
  }

  .ant-picker-panel[tabindex="-1"] {
    display: flex;
    flex-direction: column;
    padding: 24px 10px;
  }

  .ant-picker-date-panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    .ant-picker-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #344054;
      text-align: center;
      font-family: "Quicksand", sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      margin-bottom: 6px;
    }

    .ant-picker-body {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .ant-picker-date-panel .ant-picker-body thead,
  .ant-picker-date-panel .ant-picker-body thead tr {
    display: flex;
    align-items: flex-start;
  }

  .ant-picker-date-panel .ant-picker-body thead th {
    display: flex;
    width: 40px;
    height: 40px;
    padding: 10px 8px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 20px;
  }

  .ant-picker-date-panel .ant-picker-body thead th  {
    width: 24px;
    flex-shrink: 0;
    color: #344054 !important;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }

  .ant-picker-date-panel .ant-picker-body tbody {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .ant-picker-date-panel .ant-picker-body tbody tr {
    display: flex;
    justify-content: space-between;
  }

  .ant-picker-date-panel .ant-picker-body tbody td {
    display: flex;
    width: 40px;
    height: 40px;
    padding: 10px 8px 4px 8px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 1px;
    border-radius: 20px;
  }

  .ant-picker-date-panel .ant-picker-body tbody td .ant-picker-cell-inner {
    width: 24px;
    // color: var(--gray-500, #667085);
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  .ant-picker-date-panel {
    flex: 1;
  }

  .ant-picker-today-btn {
    display: none;
  }

  .ant-picker-dropdown .ant-picker-footer-extra {
    border-bottom : none !important;
  }

  .ant-picker-footer-extra {
    flex-shrink: 0;
    padding-top: 16px;
    align-items: flex-start;
    align-self: stretch;
    border-top: 1px solid #E7E5E4;
  }

  .ant-picker-cell-today .ant-picker-cell-inner:before,
  .ant-picker-cell-today .ant-picker-cell-inner:after {
    display: none;
  }

  .ant-picker-cell-today .ant-picker-cell-inner {
    transform: translateY(6px);
  }
  
  .ant-picker-cell-selected .ant-picker-cell-inner, 
  .ant-picker-cell-selected:hover .ant-picker-cell-inner {
    background-color: #8347bd !important; 
    border-radius: 20px !important; 
    color: #FFF !important;

  .ant-picker-cell-active .ant-picker-cell-inner {
    background-color: transparent !important;
  }

`;

const ApplyButton = styled(Button)`
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 48px;
  border: 1px solid #572f7e;
  background: #8347bd;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05),
    0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  /* Typography styles */
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  &&,
  &&:focus,
  &&:active,
  && *:focus,
  && *:active {
    outline: none !important;
    box-shadow: none !important;
    border-color: #572f7e !important;
    color: #fff !important;
  }
`;

const CancelButton = styled(Button)`
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 58px;
  border: 1px solid #d7d3d0;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  /* Typography styles */
  color: #344054;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  &&,
  &&:focus,
  &&:active,
  && *:focus,
  && *:active {
    outline: none !important;
    box-shadow: none !important;
    border-color: #d7d3d0 !important;
    color: #344054 !important;
  }
`;

const datePresets = [
  { label: 'Today', value: dayjs() },
  { label: 'Last Week', value: dayjs().subtract(7, 'day') },
  { label: 'This Month', value: dayjs().startOf('month') },
  { label: 'Last Month', value: dayjs().subtract(1, 'month').startOf('month') },
  { label: 'This Year', value: dayjs().startOf('year') },
  { label: 'Last Year', value: dayjs().subtract(1, 'year').startOf('year') },
];

// const datePresets = [
//   { label: "Aujourd'hui", value: dayjs() },
//   { label: "La semaine dernière", value: dayjs().subtract(7, "day") },
//   { label: "Ce mois-ci", value: dayjs().startOf("month") },
//   {
//     label: "Le mois dernier",
//     value: dayjs().subtract(1, "month").startOf("month"),
//   },
//   { label: "Cette année", value: dayjs().startOf("year") },
//   {
//     label: "L'année dernière",
//     value: dayjs().subtract(1, "year").startOf("year"),
//   },
// ];

const InputCalendar: React.FC<InputCalendarProps> = ({
  reducedwidth = false,
  onChange,
  value = null,
  coloredAiBorder,
}) => {
  const initialDate =
    typeof value === 'string' ? dayjs(value, 'D/M/YYYY') : value;

  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(
    initialDate
  );
  const [isOpen, setIsOpen] = useState(false);
  const [tempSelectedDate, setTempSelectedDate] = useState<dayjs.Dayjs | null>(
    null
  );

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    setTempSelectedDate(date);
    setIsOpen(true);
  };

  const handleDropdownVisibility = (open: boolean) => {
    if (!open && !isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleApply = () => {
    setSelectedDate(tempSelectedDate);
    if (onChange) {
      onChange(tempSelectedDate);
    }
    setIsOpen(false);
  };

  const handleClear = () => {
    setTempSelectedDate(null);
    setIsOpen(false);
  };

  const CustomClearIcon = () => (
    <IoCloseSharp
      style={{
        color: '#572f7e',
        fontSize: '16px',
        marginRight: '20px',
      }}
      onClick={handleClear}
    />
  );
  const placeholderText = reducedwidth ? 'Date' : 'Sélectionner une date';

  // console.log(selectedDate);
  // console.log("InputCalendar prop value:", value);

  return (
    <div
      className={
        coloredAiBorder ? 'ring-[6px] ring-[#e9cdff] gradient-border z-50' : ''
      }
    >
      <GlobalStyles />
      <StyledDatePicker
        placeholder={placeholderText}
        // reducedwidth={reducedwidth}
        open={isOpen}
        onOpenChange={handleDropdownVisibility}
        value={selectedDate}
        dropdownAlign={{ points: ['tl', 'bl'], offset: [0, 14] }}
        onChange={handleDateChange}
        locale={locale}
        format="DD MMM YYYY"
        presets={datePresets}
        clearIcon={<CustomClearIcon />}
        suffixIcon={
          <CalendarIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
              stroke="#ddc8f1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </CalendarIcon>
        }
        renderExtraFooter={() => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <CancelButton onClick={handleClear}>Cancel</CancelButton>
            <ApplyButton onClick={handleApply}>Apply</ApplyButton>
          </div>
        )}
        cellRender={(current, info) => {
          if (info.type !== 'date') return info.originNode;

          const isToday = current.isSame(dayjs(), 'day');
          const isSelected =
            current.isSame(selectedDate, 'day') ||
            current.isSame(tempSelectedDate, 'day');

          let cellStyle: React.CSSProperties = {};
          let textStyle: React.CSSProperties = {};

          if (isToday) {
            cellStyle = {
              display: 'flex',
              width: '40px',
              height: '40px',
              padding: '10px 8px 4px 8px',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '1px',
              borderRadius: '20px',
              background: '#F5F5F4',
            };
            textStyle = {
              width: '24px',
              color: '#344054',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '20px',
            };
          }

          if (isSelected) {
            cellStyle = {
              ...cellStyle,
              display: 'flex',
              width: '30px',
              height: '30px',
              padding: '8px 10px',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '20px',
              background: '#8347bd',
            };
            textStyle = {
              ...textStyle,
              width: '24px',
              flexShrink: 0,
              color: 'var(--base-white, #FFF)',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '20px',
            };
          }

          return (
            <div className="ant-picker-cell-inner" style={cellStyle}>
              <span style={textStyle}>{current.date()}</span>
              {isToday && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="5"
                  viewBox="0 0 6 5"
                  fill="none"
                  style={{
                    width: '5px',
                    height: '5px',
                    flexShrink: 0,
                  }}
                >
                  <circle cx="3" cy="2.5" r="2.5" fill="#8347bd" />
                </svg>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};
export default InputCalendar;
