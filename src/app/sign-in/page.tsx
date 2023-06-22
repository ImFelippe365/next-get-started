'use client'
 
import { useRouter } from 'next/navigation'
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Logo from "public/assets/logo.png";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";

export default function SignIn() {

  const router = useRouter();
  
  return (
    <div className={styles.container}>
      <aside>
        <h1>Compartilhe suas dicas de leitura com os seus amigos</h1>
        <Image src={Logo} width={298} height={289} alt="logo" />
      </aside>
      <section className={styles.signInContainer}>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />

        <Button onClick={() => router.push('home')}>
          Entrar
        </Button>

        <a>Esqueceu a senha?</a>

        <Button>Criar nova conta</Button>
      </section>
    </div>
  );
}
