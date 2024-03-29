import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
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
