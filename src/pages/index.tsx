import React from "react";
import Layout from "@theme/Layout";
import FAQ from "../components/FAQ";
import HowToSupport from "../components/HowToSupport";
import HowToContribute from "../components/HowToContribute";
import LatestNews from "../components/LatestNews";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <FAQ />
      <HowToSupport />
      <HowToContribute />
      <LatestNews />
      <Footer />
    </Layout>
  );
}
