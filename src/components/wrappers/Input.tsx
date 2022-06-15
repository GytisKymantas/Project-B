import React from "react";
import { Styles } from "components/wrappers/Box";
import { Theme } from "../../styles/theme";

export type InputType = "text" | "email" | "password" | "date";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: InputType;
  placeholder?: string;
  error?: string;
  minValue?: number;
  maxValue?: number;
  onChange?: () => void;
}

type InputFieldProps = InputProps & Styles<Theme>;

export const InputField: React.FC<InputFieldProps> = ({
  minValue,
  maxValue,
  label,
  type,
  onChange,
  error,
  placeholder,
  ...rest
}) => (
  <>
    {label && <label htmlFor="input">{label}</label>}
    <input
      id={label}
      type={type}
      placeholder={placeholder}
      min={minValue}
      max={maxValue}
      onChange={onChange}
      {...rest}
    />
    {error && <span>{error}</span>}
  </>
);
