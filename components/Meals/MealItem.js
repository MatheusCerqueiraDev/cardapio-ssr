import Link from "next/link";

import classes from "./mealItem.module.css";

export default function MealItem({ mealName, summary, author, id }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.headerText}>
          <h2>{mealName}</h2>
          <p>criado por{author}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/receitas/${id}`}>Veja Detalhes</Link>
        </div>
      </div>
    </article>
  );
}
