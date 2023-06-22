"use client";

import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { Star, StarIcon } from "lucide-react";
import Comment from "@/components/Comment";
import { IBook } from "@/interfaces/Book";
import { api } from "@/services/api";
import Image from "next/image";

interface IBookDetails {
  params: {
    id: number;
  };
}

export default function BookDetails({ params }: IBookDetails) {
  const { id } = params;
  const [book, setBook] = useState<IBook>({} as IBook);

  const getBook = async () => {
    const { data } = await api.get(`books/${id}`);
    console.log(data);
    setBook(data);
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className="container">
      <div className={`content ${styles.bookDetailsContainer}`}>
        <aside>
          <Image src={book?.image} alt={book?.title} width={200} height={296} />
          <h2>{book?.title}</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <span>{book?.author}</span>
          <div className={styles.starsContainer}>
            <Star fill="#F8C615" color="#F8C615" size={32} />
            <Star fill="#F8C615" color="#F8C615" size={32} />
            <Star fill="#F8C615" color="#F8C615" size={32} />
            <Star fill="#F8C615" color="#F8C615" size={32} />
            <Star fill="#D9D9D9" color="#D9D9D9" size={32} />
          </div>

          <button>Adicionar à biblioteca</button>
        </aside>
        <section>
          <article>
            <h1>{book.title}</h1>
            <div className={styles.ratingContainer}>
              <span>4.5</span>
              <p>93 avaliações</p>
            </div>

            <p>
              {book.abstract}
            </p>
          </article>
          <section className={styles.commentsList}>
            <h3>Comentários</h3>
            <Comment content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis a augue sit amet auctor. Integer eget gravida nibh, vel feugiat nibh. Aenean malesuada, mi non maximus bibendum, magna lorem vulputate mauris, at rhoncus risus urna eu nibh. In sed tellus tellus. Suspendisse nulla augue, tempor sit amet ex vel, lobortis varius sapien. Phasellus in tristique felis. Phasellus blandit augue." />
            <Comment content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis a augue sit amet auctor. Integer eget gravida nibh, vel feugiat nibh. Aenean malesuada, mi non maximus bibendum, magna lorem vulputate mauris, at rhoncus risus urna eu nibh. In sed tellus tellus. Suspendisse nulla augue, tempor sit amet ex vel, lobortis varius sapien. Phasellus in tristique felis. Phasellus blandit augue." />
          </section>
        </section>
      </div>
    </div>
  );
}
