import type { NextPage } from "next";
import Download from "../components/download/Download";
import Faqs from "../components/faqs/Faqs";
import Features from "../components/features/Features";
import Hero from "../components/hero/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Download />
      <Faqs />
    </>
  );
};

export default Home;
