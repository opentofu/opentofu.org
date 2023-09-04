import React from "react";
import Layout from "@theme/Layout";
import Jumbotron from "../components/Jumbotron";
import TextContent from "../components/TextContent";

export default function Manifesto() {
  return (
    <Layout wrapperClassName="light">
      <Jumbotron>
        <h1 className="text-7xl font-bold text-white text-center">
          Frequently Asked Questions
        </h1>
      </Jumbotron>
      <div className="bg-white flex-1 text-gray-600">
        <div className="container mx-auto pt-6 pb-10">FAQ</div>
      </div>
    </Layout>
  );
}
