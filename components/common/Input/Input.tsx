import { FC, InputHTMLAttributes } from "react";
import s from "./Input.module.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
}

const Input: FC<IInputProps> = ({ id, label, ...rest }) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} {...rest} />
    </>
  );
};

export default Input;
