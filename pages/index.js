import Head from "next/head";
import Posts from "../components/Posts";

export const getServerSideProps = async () => {
  const domain = process.env.DOMAIN;

  const res = await fetch(`${domain}/api/mongo`);
  const posts = await res.json();
  return {
    props: {
      data: posts,
    },
  };
};

export default function Home({ data: posts }) {
  return (
    <div className="px-8 bg-accent1">
      <Head>
        <title>Radu Blog</title>
        <meta name="description" content="Radu's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts postsFromApi={posts} />
    </div>
  );
}
