import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import MainLayout from "../layouts/mainLayout";
import { Key, useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "@/components/ui/movieCard";

function Home() {
  return (
    <>
      <MainLayout>
        <div className=" bg-rose-200 h-80 flex items-center p-4">
          <p className=" text-2xl font-medium">
            Selamat Datang.
            <br /> Jutaan film, acara TV, dan orang-orang untuk dijelajahi.
            Jelajahi sekarang.
          </p>
        </div>
        <MyCarousel />
      </MainLayout>
    </>
  );
}
// const getData = async () => {
//   return await axios
//     .get(
//       `https://api.themoviedb.org/3/trending/all/day?api_key=e92a7d5bfbd2499a7104d19001e21114`
//     )
//     .then((res) => res.data);
// };

const MyCarousel = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    const getDatas = async () => {
      try {
        setIsloading(true);
        const res = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=e92a7d5bfbd2499a7104d19001e21114`
        );
        setData(res.data);
        setIsloading(false);
      } catch (err) {
        console.error(err);
      }
    };
    getDatas();
  }, []);
  console.log(data);
  return (
    <>
      <div className=" py-3 bg-sky-200">
        <Carousel opts={{ align: "start" }}>
          <CarouselContent>
            <CarouselItem className=" basis-1/2 flex items-center p-2 px -1">
              <span className=" text-primary font-bold text-3xl">
                Trending
                <br />
                of the Day
              </span>
            </CarouselItem>
            {data?.results?.map(
              (
                movie: {
                  name: string;
                  poster_path: string;
                  title: string;
                },
                i: Key | null | undefined
              ) => (
                <CarouselItem key={i} className=" p-1 basis-auto">
                  <MovieCard
                    isLoading={isLoading}
                    image={movie.poster_path}
                    href=""
                    title={movie.title || movie.name}
                  />
                </CarouselItem>
              )
            )}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </>
  );
};

export default Home;
