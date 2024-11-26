"use client";
import classes from "./page.module.css";

export const MealContent = async ({ mealName }) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerText}>
          <h1>{meal.name}</h1>
          <p className={classes.creator}>by {meal.author}</p>
          <p className={classes.summary}>{meal.instruction1}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instruction1,
          }}
        ></p>
      </main>
    </>
  );
};
