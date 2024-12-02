"use client";
import { usePathname } from "next/navigation";
import classes from "./page.module.css";

export const MealContent = async ({
  author,
  mealName,
  ingredients,
  instruction1,
  instruction2,
}) => {
  const path = usePathname();

  if (!mealName) {
    path.replace("/receitas");
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerText}>
          <h1>{mealName}</h1>
          <p className={classes.creator}>criado por {author}</p>
          <p className={classes.summary}>{ingredients}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: instruction1,
          }}
        ></p>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: instruction2,
          }}
        ></p>
      </main>
    </>
  );
};
