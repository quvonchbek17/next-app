import VideoPlayer from "../../../components/VideoPlayer/VideoPlayer";
import style from "./Movies.module.scss";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const MovieDetails = ({ movie, movies }) => {
  const formatDate = (date) => {
    let releaseDate = new Date(date);
    let year = releaseDate.getFullYear();
    let month = releaseDate.getMonth() + 1;
    let day = releaseDate.getDate();
    return `${year}.${month.toString().padStart(2, "0")}.${day
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <main className="main">
      <div className={`${style.movies} container`}>
        <div className={style.movies_video_wrapper}>
          <VideoPlayer customStyle={{ width: "100%", height: "85%" }} />
          <div className={style.movies_movie_content}>
            <h2 className={style.movies_heading}>{movie?.title}</h2>
            <p
              className={style.movies_release_date}
            >{`Video chiqarilgan sana: ${formatDate(movie.release_date)}`}</p>
          </div>
        </div>
        <div className={style.movies_recomendeds}>
          {movies
            ?.filter((el) => el.id != movie.id)
            .map((el) => {
              return (
                <Link href={`/movies/${el.id}`}>
                  <div className={style.movies_recomended_video}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_URL}${el?.poster_path}`}
                      alt={el.name}
                      width={70}
                      height={70}
                    />
                    <p>{el.name}</p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_DETAILS_URL}/${params.id}?language=en-US`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  );
  const movie = await res.data;

  const resMovies = await axios.get(
    `${process.env.NEXT_PUBLIC_MAIN_URL}/tv?language=en-US&page=1&sort_by=created_at.asc`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  );

  let movies = resMovies.data.results;

  return { props: { movie, movies } };
}

export default MovieDetails;
