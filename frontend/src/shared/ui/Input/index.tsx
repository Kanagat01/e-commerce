import { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import styles from "./styles.module.scss";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Array<{ label: string; value: string | number }>;
};

export function Input(props: InputProps) {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input {...props} />
    </>
  );
}

export function Checkbox(props: CheckboxProps) {
  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        className={styles.input}
        style={{ marginBottom: "5px", marginRight: "5px" }}
        {...props}
      />
      {props.label}
    </label>
  );
}

export function Select(props: SelectProps) {
  return (
    <>
      <select {...props}>
        {props.options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span>
        <i className="bx bx-chevron-down"></i>
      </span>
    </>
  );
}
