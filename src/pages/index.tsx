// import { GetStaticProps, InferGetStaticPropsType } from 'next';
// import Image from 'next/image';
// import axiosFetch from '@/helpers/axiosFetch';
// import useSWR from 'swr';
import styles from '@/styles/Home.module.scss';

const Home = () => {
  return (
    <main className={styles.home}>
      <h1>Home</h1>
    </main>
  );
};

export default Home;

// const { data: blogs, error } = useSWR(
//   'http://localhost:8080/blogs',
//   axiosFetch,
//   {
//     fallbackData: initialBlogs,
//     revalidateOnMount: true,
//     revalidateIfStale: true,
//   },
// );

// export const getStaticProps: GetStaticProps = async () => {
//   const initialBlogs = await axiosFetch('http://localhost:8080/blogs');

//   return {
//     props: { initialBlogs },
//   };
// };
