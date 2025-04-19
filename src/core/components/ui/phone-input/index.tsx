import React, { useState } from "react";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import "./phone.css";
import styles from "../input-field/input.module.css";
import { ErrorText } from "../error";

interface CustomPhoneProps extends PhoneInputProps {
  error?: string;
  label?: string;
}

export const Phone: React.FC<CustomPhoneProps> = ({
  country = "by",
  label,
  error,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);

  const dynamicInputClass = error ? styles.error : focus ? styles.focus : "";
  return (
    <div className={styles.wrapper}>
      {label ? <span className={styles.label}>{label}</span> : <br />}
      <div className={`${styles.input_wrapper} ${dynamicInputClass}`}>
        <PhoneInput
          showDropdown={false}
          disableDropdown
          country={country}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...rest}
        />
      </div>
      <ErrorText>{error}</ErrorText>
    </div>
  );
};
