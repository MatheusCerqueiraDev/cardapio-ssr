"use client";
import Meals from "@/components/Meals";
import { getAllMeals, getMealsSearch } from "@/service/meals.service";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "./meals.module.css";

export default function MealsLoadingComponent() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  const [data, setData] = useState([]);
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState(false);

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

  async function fetchDataViaParams() {
    setIsLoading(true);
    try {
      const response = await getMealsSearch(search);
      if (response) {
        setData(response.data);
      }
    } catch (error) {
      setErrors(`Error fetching data: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    console.log("search", search);
    if (!search) {
      fetchData();
    } else {
      fetchDataViaParams();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  if (errors) {
    return <p>{errors}</p>;
  }

  if (isLoading) {
    return <p className={classes.loading}>Carregando receitas...</p>;
  }

  return <Meals meals={data} />;
}
