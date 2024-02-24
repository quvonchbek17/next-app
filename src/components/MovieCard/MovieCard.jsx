import Image from "next/image";
import Link from "next/link";
import style from "./MovieCard.module.scss"
const MovieCard = ({id, imgUrl, name}) => {
  return (
    <Link href={`movies/${id}`} className={style.moviecard}>
      <div className={style.moviecard_wrapper}>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_URL}${imgUrl}`}
          alt={name}
          width={300}
          height={300}
        />

        <h2 className={style.moviecard_title}>{name.length > 30 ? name.substring(0, 30) + "...": name}</h2>
        <a className={style.moviecard_link} href="#">
          Obuna
        </a>
      </div>
    </Link>
  );
};

export default MovieCard;
