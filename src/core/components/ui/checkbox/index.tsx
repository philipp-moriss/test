// Checkbox.tsx
import React from 'react';
import styles from './checkbox.module.css';
import { ErrorText } from '../error';

interface CheckboxProps {
  label?: string;
  error?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  checked,
  onChange,
  id,
  name,
  className = '',
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={`${styles.checkboxContainer} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={id}
        name={name}
        className={styles.hiddenCheckbox}
      />
      <div className={styles.customCheckbox}>
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          className={styles.checkIcon}
          aria-hidden="true"
        >
          <path
            d="M1 4L4 7L9 1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </label>
       <ErrorText>{error}</ErrorText>
    </div>
  );
};