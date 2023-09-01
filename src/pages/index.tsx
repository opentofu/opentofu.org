import React from "react";
import Layout from "@theme/Layout";
import Hero from "../components/Hero";
import Goals from "../components/Goals";
import Supporters from "../components/Supporters";
import FAQ from "../components/FAQ";
import HowToSupport from "../components/HowToSupport";
import HowToContribute from "../components/HowToContribute";
import LatestNews from "../components/LatestNews";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Goals />
      <Supporters />
      <FAQ />
      <HowToSupport />
      <HowToContribute />
      <LatestNews />
    </Layout>
  );
}
