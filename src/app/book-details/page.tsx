import React from "react";
import styles from "./style.module.scss";
import { Star, StarIcon } from "lucide-react";
import Comment from "@/components/Comment";

export default function BookDetails() {
  return (
    <div className="container">
      <div className={`content ${styles.bookDetailsContainer}`}>
        <aside>
          <div className={styles.bookImage} />
          <h2>Título do livro</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <span>Fulano de Tal</span>
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
            <h1>Título do livro</h1>
            <div className={styles.ratingContainer}>
              <span>4.5</span>
              <p>93 avaliações</p>
            </div>

            <p className={styles.publishedBy}>Irlan Moreira • 8 Jan 21</p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sagittis a augue sit amet auctor. Integer eget gravida nibh, vel
              feugiat nibh. Aenean malesuada, mi non maximus bibendum, magna
              lorem vulputate mauris, at rhoncus risus urna eu nibh. In sed
              tellus tellus. Suspendisse nulla augue, tempor sit amet ex vel,
              lobortis varius sapien. Phasellus in tristique felis. Phasellus
              blandit augue.
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
