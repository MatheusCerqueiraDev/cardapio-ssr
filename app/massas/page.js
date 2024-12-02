import Link from "next/link";
import MassasLoadingComponent from "./loadingMeal";
import classes from "./meals.module.css";

export const metadata = {
  title: "Meals",
  description: "Browser the shared meals.",
};

export default function MassasPage() {
  return (
    <div className={classes.contentWrapper}>
      <header className={classes.header}>
        <h1>
          Receitas de massas, faceis e saborosas! {""}
          <span className={classes.highlight}>Criadas por você</span>
        </h1>
        <p>Escolha seu prato!</p>
        <p className={classes.cta}>
          <Link href="/receitas/share">Crie sua receita</Link>
        </p>
      </header>
      <main>
        <MassasLoadingComponent />
      </main>
    </div>
  );
}
