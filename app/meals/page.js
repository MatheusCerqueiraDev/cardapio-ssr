import Link from "next/link";
import MealsLoadingComponent from "./loadingMeal";
import classes from "./meals.module.css";

export const metadata = {
  title: "Meals",
  description: "Browser the shared meals.",
};

export default function MealsPage() {
  return (
    <div className={classes.contentWrapper}>
      <header className={classes.header}>
        <h1>
          Receitas deliciosas, criadas {""}
          <span className={classes.highlight}>por você</span>
        </h1>
        <p>Escolha seu prato, ingredientes e mãos a massa!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Crie sua receita</Link>
        </p>
      </header>
      <main>
        <MealsLoadingComponent />
      </main>
    </div>
  );
}
