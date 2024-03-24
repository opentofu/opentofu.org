import React from "react";
import Layout from "@theme/Layout";
import Hero from "../Hero";
import Supporters from "../Supporters";
import GetStarted from "../GetStarted";

export default function Home() {
  return (
    <Layout description="The open source infrastructure as code tool.">
      <Hero />
      <GetStarted />
      <Supporters />
    </Layout>
  );
}
