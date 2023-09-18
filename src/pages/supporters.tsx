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
    <Layout title="OpenTF Supporters">
      <Jumbotron>
        <Headline>Supporters</Headline>
      </Jumbotron>

      <div className="container mx-auto md:pt-6 pb-10 px-4">
        <div
          className="flex flex-wrap gap-3 md:gap-6 justify-center py-4"
          role="group"
          aria-label="Supporter types"
        >
          {types.map(([type, supporters]) => (
            <Button
              key={type}
              variant="secondary"
              aria-selected={type === selectedType}
              onClick={() => setSelectedType(type)}
              aria-label={`Show ${type} (${supporters.length} total)`}
            >
              {type}
              <sup
                className="text-yellow-700 dark:text-yellow-600 font-bold text-base ml-2 mt-2"
                aria-hidden
              >
                {supporters.length}
              </sup>
            </Button>
          ))}
        </div>
        <SupportersList list={truncatedSupporters} />
        <div className="flex gap-6 justify-center">
          <Button
            variant="secondary"
            onClick={() => setShowAll((v) => !v)}
            aria-controls="supporters-list"
          >
            <span aria-hidden>{showAll ? "Show Less" : "Show More"}</span>
            <span className="sr-only">
              {showAll
                ? "Collapse the list of supporters"
                : "Expand the list of supporters"}
            </span>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
