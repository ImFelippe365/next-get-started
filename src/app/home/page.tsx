'use client'
 
import { useRouter } from 'next/navigation'
import BookCard from "@/components/BookCard";
import styles from "./style.module.scss";

export default function Home() {
  const router = useRouter()

  return (
    <div className="container">
      <div className="content">
        <h1>Encontre as melhores indicações de livros</h1>

        <section className={styles.bookList}>
          {Array(21)
            .fill(undefined)
            .map((_, index) => (
              <BookCard onClick={() => router.push('book-details')} key={index.toString()} />
            ))}
        </section>
      </div>
    </div>
  );
}
