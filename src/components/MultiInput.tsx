import InputCalendar from "./InputCalendar";
import InputAmount from "./InputAmount";
import NumberInput from "./NumberInput";
import { useEffect, useState, useRef } from "react";
import dayjs from "dayjs";

function debounce<F extends (...args: any[]) => any>(
  func: F,
  wait: number
): (...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

interface MultiInputProps {
  value?: {
    Date: string;
    "Durée  Amort (Années)": number;
    Montant: number;
  };
  options?: {
    [key: string]: {
      type: string;
      column: string;
    };
  };
  onChange?: (value: string) => void;
}

const MultiInput: React.FC<MultiInputProps> = ({
  value,
  options,
  onChange,
}) => {
  const reformattedDate = dayjs(value?.Date, "DD/MM/YYYY").format("MM/DD/YYYY");
  const [dateValue, setDateValue] = useState<string>(reformattedDate || "");
  const [numberValue, setNumberValue] = useState<number>(
    value?.["Durée  Amort (Années)"] || 0
  );
  const [amountValue, setAmountValue] = useState<number>(value?.Montant || 0);

  const prevValueRef = useRef<string>("");

  const debouncedOnChange = useRef(
    debounce((value: any) => {
      if (onChange) {
        onChange(value);
      }
    }, 300)
  ).current;

  useEffect(() => {
    const newValue: any = {};

    if (options?.Date) {
      const databaseFormatDate = dayjs(dateValue, "MM/DD/YYYY").format(
        "DD/MM/YYYY"
      );
      newValue.Date = databaseFormatDate;
    }
    if (options?.["Durée  Amort (Années)"]) {
      newValue["Durée  Amort (Années)"] = numberValue;
    }
    if (options?.Montant) newValue.Montant = amountValue;

    let newValueString = JSON.stringify(newValue)
      .replace(/"/g, "'")
      .replace(/\\'/g, "'");

    newValueString = newValueString.replace(
      /'Durée  Amort (Années)': '(\d+)'/g,
      "'Durée  Amort (Années)': $1"
    );
    newValueString = newValueString.replace(
      /'Montant': '(\d+\.?\d*)'/g,
      "'Montant': $1"
    );

    if (newValueString !== prevValueRef.current) {
      debouncedOnChange(newValueString);
      prevValueRef.current = newValueString;
    }
  }, [dateValue, numberValue, amountValue]);

  return (
    <div className="flex flex-row gap-[5px] w-full">
      {options?.Date && (
        <InputCalendar
          reducedwidth
          value={
            dayjs(dateValue, "MM/DD/YYYY").isValid()
              ? dayjs(dateValue, "MM/DD/YYYY")
              : null
          }
          onChange={(date) => {
            const formattedDate = date ? date.format("MM/DD/YYYY") : "";
            if (formattedDate) {
              setDateValue(formattedDate);
            }
          }}
        />
      )}

      {options?.["Durée  Amort (Années)"] && (
        <NumberInput
          reducedwidth
          value={numberValue.toString()}
          onChange={(value) => setNumberValue(Number(value))}
        />
      )}

      {options?.Montant && (
        <div className="w-full">
          <InputAmount
            reducedwidth
            value={amountValue}
            onChange={(value) => setAmountValue(Number(value))}
          />
        </div>
      )}
    </div>
  );
};

export default MultiInput;
