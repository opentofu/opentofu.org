import React from "react";
import Layout from "@theme/Layout";
import Hero from "../components/Hero";
import Goals from "../components/Goals";
import Supporters from "../components/Supporters";
import FAQ from "../components/FAQ";
import HowToContribute from "../components/HowToContribute";

export default function Home() {
  return (
    <Layout description="The open source infrastructure as code tool.">
      <Hero />
      <Goals />
      <HowToContribute />
      <FAQ />
      <Supporters />
    </Layout>
  );
}
