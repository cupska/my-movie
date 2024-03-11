import { Link } from "react-router-dom";
import { Skeleton } from "./skeleton";

export default function MovieCard({
  href,
  image,
  title,
  isLoading,
}: {
  title: string;
  image: string;
  href: string;
  isLoading: boolean;
}) {
  return (
    <>
      <Link to={href}>
        {isLoading ? (
          <Skeleton className=" w-[150px] h-[225px] rounded-lg" />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500` + image}
            className=" rounded-lg"
            alt={title}
            width={150}
            height={225}
          />
        )}
      </Link>
      <div className=" mt-4">
        {isLoading ? (
          <>
            <Skeleton className=" h-5 w-full" />
            <Skeleton className=" h-5 w-2/3 mt-1" />
          </>
        ) : (
          <Link to={href}>
            <span>{title}</span>
          </Link>
        )}
      </div>
    </>
  );
}
