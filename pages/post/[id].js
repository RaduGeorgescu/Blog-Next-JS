import { useRouter } from "next/router";
import IndividualPost from "../../components/IndividualPost";
import styles from "../../styles/Home.module.css";
import Head from "next/head";

export const getServerSideProps = async ({ params }) => {
  const domain = process.env.DOMAIN;

  const res = await fetch(`${domain}/api/${params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

const Article = ({ article }) => {
  const post = article[0];

  return (
    <div className="px-8 bg-accent1">
      <Head>
        <title>Post</title>
        <meta name="description" content="Post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndividualPost title={post.title} content={post.content} id={post._id} />
    </div>
  );
};

export default Article;
