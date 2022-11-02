import AdminIndividualPost from "../../../components/AdminIndividualPost";
import Cookies from "cookies";
import Link from "next/link";
import Head from "next/head";

export const getServerSideProps = async ({ params, req }) => {
  const domain = process.env.DOMAIN;
  const res = await fetch(`${domain}/api/${params.id}`);
  const article = await res.json();
  const cookies = new Cookies(req, res);
  const cv = cookies.get(process.env.COOKIE);
  if (!cv) {
    return {
      props: {
        cv: false,
        domain: domain,
      },
    };
  } else {
    return {
      props: {
        article,
        domain: domain,
      },
    };
  }
};

const Article = ({ article, domain }) => {
  if (!article) {
    return (
      <div className="px-8 bg-accent1">
        <Head>
          <title>Error</title>
          <meta name="description" content="Error" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>looks like you are not allowed</h1>
        <Link as={"/adminAndAuth"} href="/adminAndAuth">
          <a style={{ textDecorationLine: "underline", color: "blue" }}>
            Log in here
          </a>
        </Link>
      </div>
    );
  }
  const post = article[0];

  return (
    <div className="px-8 bg-accent1">
      <Head>
        <title>Delete</title>
        <meta name="description" content="Delete" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminIndividualPost
        domain={domain}
        title={post.title}
        content={post.content}
        id={post._id}
      />
    </div>
  );
};

export default Article;
