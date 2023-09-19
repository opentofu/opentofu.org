import React from "react";
import GitHubButton from "react-github-btn";
import { useColorMode } from "@docusaurus/theme-common";

type GitHubStartNavbarItemProps = {
  ghRepoUrl: string;
  buttonLabel: string;
};

export default function GitHubStartNavbarItem({
  ghRepoUrl,
  buttonLabel,
}: GitHubStartNavbarItemProps) {
  const { colorMode } = useColorMode();
  return (
    <div className="flex items-center [&_span]:flex">
      <GitHubButton
        href={ghRepoUrl}
        data-color-scheme={
          colorMode === "dark" ? "dark_high_contrast" : "light"
        }
        data-size="large"
        data-show-count="true"
        aria-label="Star OpenTofu on GitHub"
      >
        {buttonLabel}
      </GitHubButton>
    </div>
  );
}
