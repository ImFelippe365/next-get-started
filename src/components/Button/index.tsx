import { ReactNode } from "react";
import style from "./style.module.scss";
interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick, ...props }: ButtonProps) {
  
  return (
    <button onClick={onClick} className={`${style.button} ${style.searchButton}`}>
      {children}
    </button>
  );
}
