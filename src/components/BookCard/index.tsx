import React from "react";
import styles from "./style.module.scss";

interface IBookCardProps {
  onClick?: () => void;
}

export default function BookCard({ onClick }: IBookCardProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.cardContainer} />
    </button>
  );
}
