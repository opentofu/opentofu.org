import React from "react";
import Layout from "@theme/Layout";

import Hero from "../components/Hero";
import Goals from "../components/Goals";
import Supporters from "../components/Supporters";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Goals />
      <Supporters />
    </Layout>
  );
}
