import React from "react";
import Layout from "@theme/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Supporters from "../components/Supporters";
import FAQ from "../components/FAQ";
import HowToContribute from "../components/HowToContribute";

export default function Home() {
  return (
    <Layout description="OpenTofu - Modern Infrastructure as Code">
      <Hero />
      <Features />
      <HowToContribute />
      <FAQ />
      <Supporters />
    </Layout>
  );
}
