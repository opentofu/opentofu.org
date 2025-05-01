import React from "react";
import { ENGINEERING_CONTRIBUTORS, SERVICE_SPONSORS } from "./supporters";
import contributorStats from "../../data/contributor-stats.json";

interface SupporterLogoProps {
  supporter: {
    name: string;
    url: string;
    logoDark: string;
    logoLight: string;
  };
}

function SupporterLogo({ supporter }: SupporterLogoProps) {
  return (
    <a
      href={supporter.url}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-105 focus:scale-105 w-full"
      aria-label={`Visit ${supporter.name} website`}
    >
      <div className="bg-white dark:bg-blue-900/30 shadow-md rounded-xl p-6 border border-gray-100 dark:border-blue-800/50 flex items-center justify-center h-24 w-full sm:w-48 mx-auto transition-colors">
        <>
          <img
            src={supporter.logoDark}
            alt={`${supporter.name} logo`}
            className="dark:hidden max-w-full max-h-full"
          />
          <img
            src={supporter.logoLight}
            alt={`${supporter.name} logo`}
            className="hidden dark:block max-w-full max-h-full"
          />
        </>
      </div>
    </a>
  );
}

function CommunityContributorsTile() {
  return (
    <div className="bg-white dark:bg-blue-900/30 shadow-md rounded-xl p-6 border border-gray-100 dark:border-blue-800/50 flex items-center justify-center h-24 w-full sm:w-48">
      <div className="text-center">
        <span className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          {Math.floor(contributorStats.stats.contributors.total / 10) * 10}+
        </span>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Community Contributors
        </p>
      </div>
    </div>
  );
}

export default function Supporters() {
  return (
    <section className="py-20 md:py-28 mx-auto container px-4">
      <div className="text-left sm:text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Our Supporters
        </h2>
      </div>

      <div className="mb-20">
        <h3 className="text-2xl font-semibold text-left sm:text-center mb-8">
          Engineering Contributors
        </h3>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {ENGINEERING_CONTRIBUTORS.map((supporter) => (
            <div key={supporter.name} className="w-full sm:w-48">
              <SupporterLogo supporter={supporter} />
            </div>
          ))}
          <div className="w-full sm:w-48">
            <CommunityContributorsTile />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-left sm:text-center mb-8">
          Service Sponsors
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto">
          {SERVICE_SPONSORS.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex flex-col items-center w-full mb-6 sm:mb-0 sm:w-auto"
            >
              <SupporterLogo supporter={sponsor} />
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center w-full">
                {sponsor.contribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
