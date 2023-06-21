import React from "react";
import styles from "./style.module.scss";
import { Heart } from "lucide-react";

interface ICommentProps {
  content: string;
}

export default function Comment({ content }: ICommentProps) {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.avatar} />
      <section>
        <article>{content}</article>
        <button>
          <Heart size={20} fill="#D11A1A" color="#D11A1A" />
          <span>gostei (12)</span>
        </button>
      </section>
    </div>
  );
}
