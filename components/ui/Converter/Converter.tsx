import { FC } from "react";
import s from "./Converter.module.css";
import { Input } from "../../common";

const Converter: FC = () => {
  return (
    <div>
      <Input />
      <h2>output value</h2>
    </div>
  );
};

export default Converter;
