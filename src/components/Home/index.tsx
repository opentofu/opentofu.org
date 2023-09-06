import React from "react";
import Layout from "@theme/Layout";
import Hero from "../Hero";
import Goals from "../Goals";
import Supporters from "../Supporters";
import FAQ from "../FAQ";
import HowToSupport from "../HowToSupport";
import HowToContribute from "../HowToContribute";
import LatestNews from "../LatestNews";

export default function Home({ recentPosts }) {
  return (
    <Layout>
      <Hero />
      <Goals />
      <Supporters />
      <FAQ />
      <HowToSupport />
      <HowToContribute />
      <LatestNews recentPosts={recentPosts} />
    </Layout>
  );
}
