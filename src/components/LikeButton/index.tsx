"use client";

import { ReactNode, useState } from "react";
import style from "./style.module.scss";
import { Heart } from "lucide-react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={style.likeButton}
      onClick={() => setLiked((old) => !old)}
    >
      <Heart size={20} fill={liked ? "#D11A1A" : ""} color={'transparent'} />
      <span className={liked ? style.liked : style.unliked}>gostei (12)</span>
    </button>
  );
}
