import { InputHTMLAttributes, useState } from "react";
import styles from "./InputField.module.css";
import baseStyles from "./input.module.css";
import { ErrorText } from "../error";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  onIconPress?: () => void;
}

export function InputField({
  label,
  error,
  icon,
  onIconPress,
  ...props
}: InputFieldProps) {
  const [focus, setFocus] = useState(false);
  const dynamicInputClass = error
    ? baseStyles.error
    : focus
    ? baseStyles.focus
    : "";

  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>{label}</label>
      <div
        className={`${styles.inputContainer} ${baseStyles.input_wrapper} ${dynamicInputClass}`}
      >
        <input
          className={styles.input}
          {...props}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {icon && (
          <div onClick={onIconPress} className={styles.icon}>
            {icon}
          </div>
        )}
      </div>
      <ErrorText>{error}</ErrorText>
    </div>
  );
}
