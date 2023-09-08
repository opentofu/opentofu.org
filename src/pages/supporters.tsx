import React from "react";
import Layout from "@theme/Layout";
import { groupSupportersByType } from "../utils/groupSupportersByType";
import supporters from "../../supporters.json";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";
import SupportersList from "../components/SupportersList";
import Headline from "../components/Headline";

export default function SupportersPage() {
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
    <Layout>
      <Jumbotron>
        <Headline>Supporters</Headline>
      </Jumbotron>

      <div className="container mx-auto md:pt-6 pb-10 px-4">
        <div className="flex flex-wrap gap-3 md:gap-6 justify-center py-4">
          {types.map(([type, supporters]) => (
            <Button
              key={type}
              variant="secondary"
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
            <Button variant="secondary" onClick={() => setShowAll((v) => !v)}>
              {showAll ? "Show Less" : "Show More"}
            </Button>
          )}
          <Button variant="primary" href="/support">
            Support Us
          </Button>
        </div>
      </div>
    </Layout>
  );
}
