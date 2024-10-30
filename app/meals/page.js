import Link from "next/link";
import { Suspense } from "react";
import MealsLoadingComponent from "./loadingMeal";
import classes from "./meals.module.css";

export const metadata = {
  title: "Meals",
  description: "Browser the shared meals.",
};

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created {""}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose you favorite recipe and cook it yourself</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <MealsLoadingComponent />
        </Suspense>
      </main>
    </>
  );
}
