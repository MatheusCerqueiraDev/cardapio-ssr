"use client";
import Meals from "@/components/Meals";
import { getAllMeals } from "@/service/meals.service";
import { useEffect, useState } from "react";
import classes from "./meals.module.css";

export default function MealsLoadingComponent() {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await getAllMeals();
        console.log(response);
        if (response) {
          setData(response.data);
        }
      } catch (error) {
        setErrors(`Error fetching data: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (errors) {
    return <p>{errors}</p>;
  }

  if (isLoading) {
    return <p className={classes.loading}>Carregando receitas...</p>;
  }

  return <Meals meals={data} />;
}