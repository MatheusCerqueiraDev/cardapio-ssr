import Link from "next/link";
import LanchesLoadingComponent from "./loadingMeal";
import classes from "./meals.module.css";

export const metadata = {
  title: "Meals",
  description: "Browser the shared meals.",
};

export default function LanchesPage() {
  return (
    <div className={classes.contentWrapper}>
      <header className={classes.header}>
        <h1>
          Receitas de lanches, faceis e saborosas! {""}
          <span className={classes.highlight}>Criadas por você</span>
        </h1>
        <p>Escolha seu prato!</p>
        <p className={classes.cta}>
          <Link href="/receitas/share">Crie sua receita</Link>
        </p>
      </header>
      <main>
        <LanchesLoadingComponent />
      </main>
    </div>
  );
}
