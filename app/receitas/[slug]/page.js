"use client";
import { notFound } from "next/navigation";
import { MealContent } from "./Content";

export default function MealPage({ params }) {
  if (!params) {
    notFound();
  }
  console.log(params);

  return <MealContent mealId={params.slug} />;
}
