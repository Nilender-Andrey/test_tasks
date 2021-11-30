import React from 'react';

interface SelectProps {
  classes: string;
  options: { name: string; value: string }[];
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ classes, options, value, onChangeHandler }: SelectProps) {
  return (
    <select className={classes} value={value} onChange={onChangeHandler}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
