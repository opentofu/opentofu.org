import React from "react";
import Layout from "@theme/Layout";
import Hero from "../Hero";
import Goals from "../Goals";
import Supporters from "../Supporters";
import FAQ from "../FAQ";
import HowToContribute from "../HowToContribute";

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
