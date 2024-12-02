import ImageSlideshow from "@/components/Slide";
import Link from "next/link";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Receitas.com</h1>
            <p>Receitas .com facilidade</p>
          </div>
          <div className={classes.cta}>
            <Link href="/receitas">Explore receitas</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>Como funciona</h2>
          <p>
            Recitas.com é uma plataforma para a comunidade de cozinheiros
            compartilhar suas receitas. É também um lugar para descobrir novos
            pratos.
          </p>
          <p>
            Recitas.com é um lugar para você se conectar com outros amantes da
            culinaria ou conseguir uma receita receitas com os ingredientes
            disponíveis na sua casa.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Por que Recitas.com?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
