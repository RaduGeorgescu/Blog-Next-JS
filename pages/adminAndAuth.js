import React from "react";
import { useState, useEffect } from "react";
import AdminPost from "../components/AdminPosts";
import Cookies from "cookies";
import { useRouter } from "next/router";
import Head from "next/head";

export const getServerSideProps = async ({ req }) => {
  const domain = process.env.DOMAIN;
  const res = await fetch(`${domain}/api/mongo`);
  const posts = await res.json();
  const createCookie = new Cookies(req, res);
  const cookie = createCookie.get(process.env.COOKIE);
  try {
    if (!cookie) {
      return {
        props: {
          data: "Loading...",
          cookie: false,
          domain: domain,
        },
      };
    } else {
      return {
        props: {
          data: posts,
          cookie: true,
          domain: domain,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

const Admin = ({ data: posts, cookie, domain }) => {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(cookie);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const refreshData = () => {
    setIsLogged(true);
    router.reload();
  };
  const checkAuth = async (e) => {
    try {
      e.preventDefault();
      await fetch(`${domain}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }).then(() => refreshData());
    } catch (error) {
      console.log(error);
    }
  };
  if (isLogged) {
    return (
      <div>
        <AdminPost domain={domain} postsFromApi={posts} />
      </div>
    );
  } else {
    return (
      <div className="px-8 bg-accent1">
        <Head>
          <title>Admin</title>
          <meta name="description" content="Admin" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <form>
          <input
            type="text"
            name="username"
            placeholder="username"
            id="username"
            onChange={(e) => {
              setCredentials({ ...credentials, username: e.target.value });
            }}
          />
          <input
            type="text"
            name="password"
            placeholder="password"
            id="password"
            onChange={(e) => {
              setCredentials({ ...credentials, password: e.target.value });
            }}
          />
          <button onClick={checkAuth}>Login</button>
        </form>
      </div>
    );
  }
};

export default Admin;
