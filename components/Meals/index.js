import MealItem from "./MealItem";
import classes from "./meals.module.css";

export default function Meals({ meals }) {
  if (!meals) {
    return (
      <p className={classes.loading}>
        Ainda não existem receitas. Que tal criar a primeira!
      </p>
    );
  }

  return (
    <ul className={classes.meals}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem
              name={meal.name}
              {...meal}
            />
          </li>
        );
      })}
    </ul>
  );
}
