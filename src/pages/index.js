import Layout from "../layouts";
import Input from "../components/Input/Input";
import Showcase from "../components/Showcase/Showcase";
import MovieCard from "../components/MovieCard/MovieCard";
import useFetch from "../hooks/useFetch";
import { useContext, useEffect } from "react";
import { MoviesContext } from "../context/MoviesContext";
import style from "../styles/pages/index.module.scss"


const Home = () => {
  let {setMovies} = useContext(MoviesContext)
  const {data, loading, error} = useFetch({url: `tv?language=en-US&page=1&sort_by=created_at.asc`})

  useEffect(() => {
    if (data?.results) {
      setMovies(data.results);
    }
  }, [data, setMovies]);

  return (
    <Layout>
      <Showcase />
      <section className={style.movies}>
        <div className={`${style.movies_container} container`}>
          <Input  placeholder={"Qidiring..."} />
          <div className={style.movies_wrapper}>
            {
              loading ? <h1>Loading...</h1>: data?.results.map(el => {
                return <MovieCard key={el.id} id={el.id} imgUrl={el?.poster_path} name={el.name} />
              })
            }
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
