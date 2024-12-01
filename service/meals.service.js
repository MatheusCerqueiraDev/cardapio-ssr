const { default: axios } = require("axios");

export const getAllMeals = async () => {
  return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/receitas/all`);
};

export const getByName = async (mealName) => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/receitas/searchByName`,
    {
      params: {
        name: mealName,
      },
    }
  );
};

export const postMeal = async (meal) => {
  return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/receitas`, meal, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getByCategory = async (category) => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/receitas/searchByCategory`,
    {
      params: {
        category: category,
      },
    }
  );
};
