import { FC, useMemo, useState } from "react";
import s from "./Converter.module.css";
import { Input } from "../../common";

const Converter: FC = () => {
  const [inputValue, setInputValue] = useState<number>(1);
  const outputValue = useMemo<string>(() => {
    return `${inputValue}`;
  }, [inputValue]);

  return (
    <div>
      <Input />
      <h2>{outputValue}</h2>
    </div>
  );
};

export default Converter;
