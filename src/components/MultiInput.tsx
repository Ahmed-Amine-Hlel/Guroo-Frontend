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
  onChange?: (value: {
    Date: string;
    "Durée  Amort (Années)": number;
    Montant: number;
  }) => void;
}

const MultiInput: React.FC<MultiInputProps> = ({ value, onChange }) => {
  const [dateValue, setDateValue] = useState<string>(value?.Date || "");
  const [numberValue, setNumberValue] = useState<number>(
    value?.["Durée  Amort (Années)"] || 0
  );
  const [amountValue, setAmountValue] = useState<number>(value?.Montant || 0);

  const prevValueRef = useRef<{
    Date: string;
    "Durée  Amort (Années)": number;
    Montant: number;
  }>();

  const debouncedOnChange = useRef(
    debounce((value: any) => {
      if (onChange) {
        onChange(value);
      }
    }, 300)
  ).current;

  useEffect(() => {
    const newValue = {
      Date: dateValue,
      "Durée  Amort (Années)": numberValue,
      Montant: amountValue,
    };

    // Only call onChange if the value has genuinely changed
    if (JSON.stringify(newValue) !== JSON.stringify(prevValueRef.current)) {
      debouncedOnChange(newValue);
      prevValueRef.current = newValue;
    }
  }, [dateValue, numberValue, amountValue]);

  return (
    <div className="flex flex-row gap-[25px] w-full">
      <InputCalendar
        reducedwidth
        value={dayjs(dateValue)}
        onChange={(date) => setDateValue(date ? date.format("YYYY-MM-DD") : "")}
      />

      <NumberInput
        reducedwidth
        value={numberValue.toString()}
        onChange={(value) => setNumberValue(Number(value))}
      />
      <InputAmount
        reducedwidth
        value={amountValue}
        onChange={(value) => setAmountValue(value)}
      />
    </div>
  );
};

export default MultiInput;
