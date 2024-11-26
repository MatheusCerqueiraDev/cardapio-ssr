"use client";
import { notFound } from "next/navigation";
import { MealContent } from "./Content";

export default function MealPage({ params }) {
  if (!params) {
    notFound();
  }

  return <MealContent mealName={params.name} />;
}
