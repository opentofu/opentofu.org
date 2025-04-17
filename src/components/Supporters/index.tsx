import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { ENGINEERING_CONTRIBUTORS, SERVICE_SPONSORS } from "./supporters";

function SupporterLogo({ supporter }) {
  const { colorMode } = useColorMode();

  const logoSrc =
    colorMode === "dark" ? supporter.logoLight : supporter.logoDark;

  return (
    <a
      href={supporter.url}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-105 focus:scale-105"
      aria-label={`Visit ${supporter.name} website`}
    >
      <div className="bg-white dark:bg-blue-900/30 shadow-md rounded-xl p-6 border border-gray-100 dark:border-blue-800/50 flex items-center justify-center h-24 w-48">
        {logoSrc ? (
          <img
            src={logoSrc}
            alt={`${supporter.name} logo`}
            className="max-w-full max-h-full"
          />
        ) : (
          <span className="text-xl font-bold text-gray-800 dark:text-gray-200">
            {supporter.name}
          </span>
        )}
      </div>
    </a>
  );
}

export default function Supporters() {
  return (
    <section className="py-20 md:py-28 mx-auto container px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Our Supporters
        </h2>
      </div>

      <div className="mb-20">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Engineering Contributors
        </h3>
        <div className="relative overflow-hidden">
          <div className="whitespace-nowrap flex items-center py-4 animate-scroll">
            {/* Show contributors twice for continuous scrolling effect */}
            {[...ENGINEERING_CONTRIBUTORS, ...ENGINEERING_CONTRIBUTORS].map(
              (supporter, idx) => (
                <div
                  key={`${supporter.name}-${idx}`}
                  className="inline-block mx-6"
                >
                  <SupporterLogo supporter={supporter} />
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-center mb-8">
          Service Sponsors
        </h3>
        <div className="flex justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {SERVICE_SPONSORS.map((sponsor) => (
            <div key={sponsor.name} className="flex flex-col items-center">
              <SupporterLogo supporter={sponsor} />
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center max-w-[200px]">
                {sponsor.contribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
