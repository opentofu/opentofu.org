import React, { useState, useEffect } from "react";
import Headline from "../Headline";
import LFLogo from "../LFLogo";
import { Examples } from "../Examples";
import PatternBg from "../PatternBg";
import Button from "../Button";

export default function Hero() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative min-h-[calc(100vh-8rem)]">
      <PatternBg />

      <div className="container mx-auto px-4 md:px-8 py-16 min-h-[calc(100vh-8rem)] flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 lg:pr-16">
          <div className="flex justify-center lg:justify-start mb-8">
            <LFLogo />
          </div>
          <div className="text-center lg:text-left">
            <Headline>Open-Source Infrastructure as Code</Headline>
            <p className="my-8 text-xl text-gray-600 dark:text-gray-400">
              OpenTofu is a reliable, flexible, community-driven infrastructure
              as code tool under the Linux Foundation's stewardship. It serves
              as a <strong>drop-in replacement for Terraform</strong>,
              preserving your existing workflows and configurations.
            </p>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
              With a thriving ecosystem of <strong>3,900+ providers</strong> and{" "}
              <strong>23,600+ modules</strong>, you can build and manage
              infrastructure across every cloud platform with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                href="/docs/intro"
                className="w-full sm:w-auto"
              >
                Get Started
              </Button>
              <Button
                variant="secondary"
                href="https://github.com/opentofu/opentofu"
                className="w-full sm:w-auto"
              >
                View on GitHub
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 mt-16 lg:mt-0 lg:pl-16">
          <Examples />
        </div>
      </div>

      {showArrow && (
        <button
          onClick={scrollToFeatures}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      )}
    </header>
  );
}
