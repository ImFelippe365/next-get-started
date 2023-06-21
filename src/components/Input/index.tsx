import React, { InputHTMLAttributes } from "react";
import styles from "./style.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...props }: IInputProps) {
  return <input className={styles.inputContent} {...props} />;
}
