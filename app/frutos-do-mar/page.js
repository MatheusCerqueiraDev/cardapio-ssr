import Link from "next/link";
import PeixesLoadingComponent from "./loadingMeal";
import classes from "./meals.module.css";

export const metadata = {
  title: "Meals",
  description: "Browser the shared meals.",
};

export default function PeixesPage() {
  return (
    <div className={classes.contentWrapper}>
      <header className={classes.header}>
        <h1>
          Receitas de frutos do mar, faceis e saborosos! {""}
          <span className={classes.highlight}>Criadas por você</span>
        </h1>
        <p>Escolha seu prato!</p>
        <p className={classes.cta}>
          <Link href="/receitas/share">Crie sua receita</Link>
        </p>
      </header>
      <main>
        <PeixesLoadingComponent />
      </main>
    </div>
  );
}
