"use client";
import { getMealById } from "@/service/meals.service";
import { useEffect, useState } from "react";
import classes from "./page.module.css";

export const MealContent = ({ mealId }) => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      if (mealId) {
        const response = await getMealById(mealId);
        if (response) {
          setData(response.data);
        }
      }
    } catch (error) {
      setErrors(`Error fetching data: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <p className={classes.loading}>Carregando receitas...</p>;
  }

  if (errors) {
    return <p>{errors}</p>;
  }

  console.log(data);
  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerText}>
          <h1>{data?.name}</h1>
          <p className={classes.summary}>{data?.ingredients}</p>
          <p className={classes.instructions}>{data.instruction1}</p>
          <p className={classes.creator}>criado por {data?.author}</p>
        </div>
      </header>
    </>
  );
};
