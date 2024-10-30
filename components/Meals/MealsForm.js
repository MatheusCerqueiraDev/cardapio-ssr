"use client";
import { useActionState } from "react";

export default function SubmitMealsFormButton() {
  const { pending } = useActionState();
  return (
    <button
      type="submit"
      disabled={pending}
    >
      {peding ? "Submiting..." : "Share Meal"}
    </button>
  );
}
