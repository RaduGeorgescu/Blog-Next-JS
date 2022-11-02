import { useRouter } from "next/router";
import SearchPosts from "../../components/SearchPosts";
import styles from "../../styles/Home.module.css";
import Head from "next/head";

export const getServerSideProps = async ({ params }) => {
  const domain = process.env.DOMAIN;

  const res = await fetch(`${domain}/api/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: params.param,
    }),
  });
  const posts = await res.json();

  return {
    props: {
      data: posts,
    },
  };
};

const PostsPage = ({ data: posts }) => {
  if (posts.length === 0) {
    return (
      <div className="px-8 bg-accent1">
        <Head>
          <title>Search results</title>
          <meta name="description" content="Not found" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-center text-2xl my-5">No post found</h1>
      </div>
    );
  } else {
    return (
      <div className="px-8 bg-accent1">
        <Head>
          <title>Search results</title>
          <meta name="description" content="Search results" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SearchPosts postsFromApi={posts} />
      </div>
    );
  }
};

export default PostsPage;
