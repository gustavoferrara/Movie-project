import styles from '@/styles/Home.module.scss';
import getFeaturedMovies from '@/helpers/getFeaturedMovies';
import { useEffect, useRef, useState } from 'react';
import axiosFetch from '@/helpers/axiosFetch';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

//?
const Home = ({
  movieList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const featuredMovies = useRef<number[] | null>(null);
  // const featuredMovieGenres = useRef<string[][]>([]);

  return (
    <main className={styles.home}>
      <>
        <h1>Home</h1>
      </>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fetchUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  const movieList = await axiosFetch(fetchUrl);

  return {
    props: { movieList },
  };
};

export default Home;
