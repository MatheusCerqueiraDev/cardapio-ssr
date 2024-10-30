import Meals from "@/components/Meals";
import { getMeals } from "@/lib/meals";

export default async function MealsLoadingComponent() {
  const meals = await getMeals();

  return <Meals meals={meals} />;
}
