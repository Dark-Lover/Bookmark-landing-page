import type { NextPage } from "next";
import Download from "../components/download/Download";
import Features from "../components/features/Features";
import Hero from "../components/hero/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Download />
    </>
  );
};

export default Home;
