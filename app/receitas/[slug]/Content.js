"use client";
import { usePathname } from "next/navigation";
import classes from "./page.module.css";

export const MealContent = async ({ mealName }) => {
  const path = usePathname();

  if (!mealName) {
    path.replace("/receitas");
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerText}>
          <h1>{mealName}</h1>
          <p className={classes.creator}>criado por {}</p>
          <p className={classes.summary}></p>
        </div>
      </header>
      <main>
        {/* <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instruction1,
          }}
        ></p> */}
      </main>
    </>
  );
};
