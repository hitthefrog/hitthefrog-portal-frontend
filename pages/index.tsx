import Roadmap from "@components/home/Roadmap";
import Story from "@components/home/Story";
import Team from "@components/home/Team";
import Title from "@components/home/Title";
import { NextPage } from "next";
import * as React from "react";

const Home: NextPage = () => {
  return (
    <main>
      <Title />
      <Story />
      <Roadmap />
      <Team />
    </main>
  );
};

export default Home;
