import React from 'react';
import { Styles } from 'components/wrappers/Box';
import { Theme } from '../../styles/theme';
import { color } from 'styled-system';
import styled from 'styled-components/macro';

export type InputType = 'text' | 'email' | 'password' | 'date' | 'number';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: InputType;
  placeholder?: string;
  error?: string;
  minValue?: number;
  maxValue?: number;
  handleChange?: () => void;
  handleBlur?: () => void;
  values?: string | number | readonly string[];
  id: string;
  name: string;
}

type InputFieldProps = InputProps & Styles<Theme>;

export const InputField: React.FC<InputFieldProps> = ({
  minValue,
  id,
  name,
  maxValue,
  label,
  type,
  handleChange,
  handleBlur,
  error,
  values,
  placeholder,
  ...rest
}) => (
  <>
    {label && <label htmlFor='input'>{label}</label>}
    <InputElement
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      min={minValue}
      max={maxValue}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values}
      {...rest}
    />
    {error && <span>{error}</span>}
  </>
);

const InputElement = styled.input`
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  padding: 1rem 1rem 0.2rem 1rem;
  width: 100%;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  :focus {
    border-bottom: 1px solid orange;
  }

  &:focus::placeholder {
    color: transparent;
  }

  && {
    ${color}
  }
`;
