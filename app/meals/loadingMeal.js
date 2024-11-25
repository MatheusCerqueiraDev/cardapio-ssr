"use client";
import Meals from "@/components/Meals";
import { Suspense, useEffect, useState } from "react";
import classes from "./meals.module.css";

export default function MealsLoadingComponent() {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/receitas/all`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const recipets = await response.json();
        setData(recipets);
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
    return (
      <Suspense
        fallback={<p className={classes.loading}>Carregando receitas...</p>}
      >
        <Meals meals={data} />
      </Suspense>
    );
  }

  return <Meals meals={data} />;
}
