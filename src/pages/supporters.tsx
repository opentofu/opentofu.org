import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { groupSupportersByType } from "../utils/groupSupportersByType";
import supporters from "../../supporters.json";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";
import Supporters from "../components/Supporters";
import SupportersList from "../components/SupportersList";

export default function SupportersPage() {
  const { siteConfig } = useDocusaurusContext();
  const groupedSupporters = groupSupportersByType(supporters);
  const types = Object.entries(groupedSupporters);
  const [selectedType, setSelectedType] = React.useState("Companies");
  const [showAll, setShowAll] = React.useState(false);

  const filteredSupporters = groupedSupporters[selectedType];

  const truncatedSupporters = showAll
    ? filteredSupporters
    : filteredSupporters.slice(0, 20);

  const hasMore = filteredSupporters.length > truncatedSupporters.length;

  return (
    <Layout wrapperClassName="light">
      <Jumbotron>
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center leading-tight md:leading-snug">
          Supporters
        </h1>
      </Jumbotron>
      <div className="bg-white flex-1 text-gray-600">
        <div className="container mx-auto md:pt-6 pb-10">
          <div className="flex flex-wrap gap-3 md:gap-6 justify-center bg-white sticky top-0 py-4">
            {types.map(([type, supporters]) => (
              <Button
                key={type}
                variant="secondaryOnLight"
                aria-selected={type === selectedType}
                onClick={() => setSelectedType(type)}
              >
                {type}
                <sup className="text-brandLight font-bold text-base ml-2 mt-2">
                  {supporters.length}
                </sup>
              </Button>
            ))}
          </div>
          <SupportersList list={truncatedSupporters} />
          <div className="flex gap-6 justify-center">
            {hasMore && (
              <Button
                variant="secondaryOnLight"
                onClick={() => setShowAll((v) => !v)}
              >
                {showAll ? "Show Less" : "Show More"}
              </Button>
            )}
            <Button variant="primary" href="/support">
              Support Us
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
