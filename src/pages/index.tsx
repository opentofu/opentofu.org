import React from "react";
import Layout from "@theme/Layout";

import Pattern from "../components/Pattern";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <Layout>
      <Pattern />
      <HomePage />
    </Layout>
  );
}
