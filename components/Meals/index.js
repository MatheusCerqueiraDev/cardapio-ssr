import MealItem from "./MealItem";
import classes from "./meals.module.css";

export default function Meals({ meals, isLoading }) {
  if (!meals) {
    return (
      <p className={classes.loading}>
        Ainda nÃ£o existem receitas. Que tal criar a primeira!
      </p>
    );
  }

  const renderMealsCount = () => {
    const mealCount = Number(meals.length);

    if (!isLoading && mealCount !== 0) {
      return (
        <p className={classes.mealsCount}>
          {mealCount} {mealCount > 1 ? "receitas" : "receita"}{" "}
          {mealCount > 1 ? "encontradas" : "encontrada"}
        </p>
      );
    }
  };

  return (
    <div className={classes.mealsContainer}>
      {renderMealsCount()}
      <ul className={classes.meals}>
        {meals.map((meal) => {
          return (
            <li key={meal.id}>
              <MealItem
                mealName={meal.name}
                summary={meal.summary}
                author={meal.author}
                id={meal.id}
                {...meal}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
