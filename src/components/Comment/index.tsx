import React from "react";
import styles from "./style.module.scss";
import { Heart } from "lucide-react";
import LikeButton from "../LikeButton";

interface ICommentProps {
  content: string;
}

export default function Comment({ content }: ICommentProps) {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.avatar} />
      <section>
        <article>{content}</article>
        <LikeButton />
      </section>
    </div>
  );
}
