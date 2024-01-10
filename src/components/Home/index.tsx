import React from "react";
import Layout from "@theme/Layout";
import Hero from "../Hero";
import Goals from "../Goals";
import Supporters from "../Supporters";
import FAQ from "../FAQ";
import HowToSupport from "../HowToSupport";
import HowToContribute from "../HowToContribute";
import LatestNews, { RecentPost } from "../LatestNews";

type HomeProps = {
  recentPosts: RecentPost[];
};

export default function Home({ recentPosts }: HomeProps) {
  return (
    <Layout description="The open source infrastructure as code tool.">
      <Hero />
      <Goals />
      <HowToContribute />
      <FAQ />
      <Supporters />
      <HowToSupport />
      <LatestNews recentPosts={recentPosts} />
    </Layout>
  );
}
