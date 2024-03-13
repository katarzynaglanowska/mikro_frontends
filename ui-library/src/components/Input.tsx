import React from "react";

interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  value: string;
}

const Input = ({ name, label, value, onChange }: InputProps) => {
  return (
    <label>
      {label}
      <input value={value} name={name} onChange={onChange} />
    </label>
  );
};

export default Input;
