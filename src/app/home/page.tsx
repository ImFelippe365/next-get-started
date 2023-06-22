"use client";

import { useRouter } from "next/navigation";
import BookCard from "@/components/BookCard";
import styles from "./style.module.scss";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { IBook } from "@/interfaces/Book";

export default function Home() {
  const router = useRouter();

  const [books, setBooks] = useState<IBook[]>([]);

  const getAllBooks = async () => {
    const { data } = await api.get("books");
    
    setBooks(data);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="container">
      <div className="content">
        <h1>Encontre as melhores indicações de livros</h1>

        <section className={styles.bookList}>
          {books.map(({ id, title, image }) => (
            <BookCard
              title={title}
              url={image}
              onClick={() => router.push(`book-details/${id}`)}
              key={id}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
