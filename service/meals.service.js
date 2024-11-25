const { default: axios } = require("axios");

const route = "/receitas/all";

const MealsService = () => {
  getAllMeals = async () => {
    return await axios.get(process.env.NEXT_PUBLIC_API_URL);
  };
};

export default MealsService;
