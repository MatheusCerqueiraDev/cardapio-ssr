"use client";

export default function SubmitMealsFormButton({ pending }) {
  return (
    <button
      type="submit"
      disabled={pending}
    >
      Enviar
    </button>
  );
}
