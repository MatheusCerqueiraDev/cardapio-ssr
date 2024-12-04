"use client";
import classes from "./page.module.css";

export const MealContent = async ({ id }) => {
  if (!id) {
    path.replace("/receitas");
  }

  const [data, setData] = useState([]);
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await getMealById(id);
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
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <p className={classes.loading}>Carregando receitas...</p>;
  }

  if (errors) {
    return <p>{errors}</p>;
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerText}>
          <h1>{mealName}</h1>
          <p className={classes.creator}>criado por {data?.author}</p>
          <p className={classes.summary}>{data.ingredients}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: data.instruction1,
          }}
        ></p>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: data.instruction2,
          }}
        ></p>
      </main>
    </>
  );
};
