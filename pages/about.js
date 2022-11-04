import Head from "next/head";

const about = () => {
  return (
    <div className="px-8 md:mx-20 bg-accent1">
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-lg font-bold mt-4 mb-8">About me</h1>
        <div className="h-screen text-justify">
          <p>
            1 year since I have started learning HTML, CSS and JavaScript. The
            stack I am most proficient in is MERN: MongoDB (mongoose),
            ExpressJS, ReactJS and NodeJS. Familiar with Typescript, NextJS,
            TailwindCSS, Bootstrap, MaterialUI, jQuery, EJS, Redux,
            Selenium(Python and JS) and Motoko (ICP/web3).
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
