import Roadmap from "@components/home/Roadmap";
import Story from "@components/home/Story";
import Team from "@components/home/Team";
import Title from "@components/home/Title";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <Title />
    </main>
  );
};

export default Home;
