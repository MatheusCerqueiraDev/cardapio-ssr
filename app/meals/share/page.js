"use client";
import SubmitMealsFormButton from "@/components/Meals/MealsForm";
import { CategoriasReceitas } from "@/lib/enums";
import { debounce } from "lodash";
import { useCallback, useState } from "react";
import * as Yup from "yup";
import classes from "./page.module.css";

const formSchema = Yup.object().shape({
  author: Yup.string().required("Author is required"),
  name: Yup.string().required("Recipe name is required"),
  title: Yup.string().required("Title is required"),
  ingredients: Yup.string().required("Ingredients are required"),
  instructions: Yup.string().required("Instructions are required"),
  category: Yup.string()
    .oneOf(Object.values(CategoriasReceitas), "Invalid category")
    .required("Category is required"),
  image: Yup.string().url("Invalid URL").required("Image URL is required"),
});

export default function ShareMealPage() {
  const [formContent, setFormContent] = useState({
    author: "",
    name: "",
    title: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  console.log(formContent);

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
    try {
      await formSchema.validate(formContent, { abortEarly: false });
      showSuccessToast("Receita criada com sucesso!");
    } catch (err) {
      showErrorToast("Por favor revise os campos do formulário");
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
            <label htmlFor="title">
              Titulo <span className={classes.required}>*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              onChange={(e) =>
                debouncedHandleInputChange(e.target.value, "title")
              }
            />
          </p>
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
              Instructions <span className={classes.required}>*</span>
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
              onChange={(e) =>
                debouncedHandleInputChange(e.target.value, "instructions")
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
                  {category}
                </option>
              ))}
            </select>
          </p>
          {/* <ImagePicker
            name="image"
            label="your image"
          /> */}
          {/* {currentState.message && <p>{currentState.message}</p>} */}
          <p className={classes.actions}>
            <SubmitMealsFormButton pending={false} />
          </p>
        </form>
      </main>
    </>
  );
}
