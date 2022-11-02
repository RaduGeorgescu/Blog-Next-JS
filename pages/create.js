import CreatePostForm from "../components/CreatePostForm";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const create = () => {
  return (
    <div className="px-8 bg-accent1">
      <Head>
        <title>Create post</title>
        <meta name="description" content="Create post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.createPost}>
        <CreatePostForm />
      </div>
    </div>
  );
};

export default create;
