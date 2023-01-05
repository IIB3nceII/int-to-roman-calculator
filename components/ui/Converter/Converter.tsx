import { ChangeEvent, FC, useMemo, useState } from "react";
import s from "./Converter.module.css";
import { Input } from "../../common";

const Converter: FC = () => {
  const [inputValue, setInputValue] = useState<number>(1);
  const outputValue = useMemo<string>(() => {
    return `${inputValue}`;
  }, [inputValue]);

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(+e.target.value);
  };

  return (
    <div>
      <Input
        type="number"
        value={inputValue}
        onChange={handleInputValueChange}
        min="1"
        max="1000"
        placeholder="Write a number between 1 and 1000"
      />
      <h2>{outputValue}</h2>
    </div>
  );
};

export default Converter;
