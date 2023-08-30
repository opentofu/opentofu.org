import React from "react";
import Layout from "@theme/Layout";
import FAQ from "../components/FAQ";
import HowToSupport from "../components/HowToSupport";

export default function Home() {
  return (
    <Layout>
      <FAQ />
      <HowToSupport />
    </Layout>
  );
}
