import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

interface IBookCardProps {
  title: string;
  url: string;
  onClick?: () => void;
}

export default function BookCard({ title, url, onClick }: IBookCardProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      <Image src={url} alt={title} width={148} height={226} />
    </button>
  );
}
