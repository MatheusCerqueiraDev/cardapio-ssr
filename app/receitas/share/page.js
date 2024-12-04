"use client";
import SubmitMealsFormButton from "@/components/Meals/MealsForm";
import {
  showErrorToast,
  showSuccessToast,
} from "@/components/Toasts/toastNotifications";
import { CategoriasReceitas } from "@/lib/enums";
import { postMeal } from "@/service/meals.service";
import { debounce } from "lodash";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import * as Yup from "yup";
import classes from "./page.module.css";

const formSchema = Yup.object().shape({
  author: Yup.string().required("Author is required"),
  name: Yup.string().required("Recipe name is required"),
  ingredients: Yup.string().required("Ingredients are required"),
  instruction1: Yup.string().required("Instructions are required"),
  category: Yup.string()
    .oneOf(Object.values(CategoriasReceitas), "Invalid category")
    .required("Category is required"),
});

export default function ShareMealPage() {
  const router = usePathname();
  const [formContent, setFormContent] = useState({
    name: "",
    author: "",
    ingredients: "",
    instruction1: "",
    category: Object.values(CategoriasReceitas)[0],
  });

  const [isLoading, setIsLoading] = useState(false);

  const clearForm = () => {
    setFormContent({});
  };

  const handleInputChange = (value, key) => {
    setFormContent((prev) => {
      const prevCopy = { ...prev };
      prevCopy[key] = value;
      return prevCopy;
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleInputChange = useCallback(
    debounce((value, key) => handleInputChange(value, key), 600),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await formSchema.validate(formContent, { abortEarly: false });
      const response = await postMeal(formContent);
      if (response.status === 200) {
        clearForm();
        showSuccessToast("Receita criada com sucesso!");
        router.push("/meals");
      }
    } catch (err) {
      showErrorToast("Por favor revise os campos do formulário");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <header className={classes.header}>
        <h1>
          Compartilhe sua{" "}
          <span className={classes.highlight}>receita favorita!</span>
        </h1>
        <p>ou qualquer outra receita que possa ajudar!</p>
      </header>
      <main className={classes.main}>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <div className={classes.row}>
            <p>
              <label htmlFor="author">
                Seu nome <span className={classes.required}>*</span>
              </label>
              <input
                type="text"
                id="author"
                name="author"
                onChange={(e) =>
                  debouncedHandleInputChange(e.target.value, "author")
                }
              />
            </p>
            <p>
              <label htmlFor="name">
                Nome da receita <span className={classes.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={(e) =>
                  debouncedHandleInputChange(e.target.value, "name")
                }
              />
            </p>
          </div>
          <p>
            <label htmlFor="ingredients">
              Ingredientes <span className={classes.required}>*</span>
            </label>
            <input
              type="text"
              id="ingredients"
              name="ingredients"
              required
              onChange={(e) =>
                debouncedHandleInputChange(e.target.value, "ingredients")
              }
            />
          </p>
          <p>
            <label htmlFor="instructions">
              Instruções <span className={classes.required}>*</span>
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
              onChange={(e) =>
                debouncedHandleInputChange(e.target.value, "instruction1")
              }
            ></textarea>
          </p>
          <p>
            <label htmlFor="category">
              Categoria <span className={classes.required}>*</span>
            </label>
            <select
              id="category"
              name="category"
              required
              onChange={(e) =>
                debouncedHandleInputChange(e.target.value, "category")
              }
              className={classes.select}
            >
              {Object.values(CategoriasReceitas).map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category.replace(/_/g, " ")}
                </option>
              ))}
            </select>
          </p>
          {/* {currentState.message && <p>{currentState.message}</p>} */}
          <p className={classes.actions}>
            <SubmitMealsFormButton pending={isLoading} />
          </p>
        </form>
      </main>
    </>
  );
}
