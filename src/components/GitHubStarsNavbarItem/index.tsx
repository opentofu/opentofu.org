import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore should be fixed when upgrating to docusaurus v3
import GitHubButton from "react-github-btn";
import { useTheme } from "../../utils/useTheme";

type GitHubStartNavbarItemProps = {
  ghRepoUrl: string;
  buttonLabel: string;
};

export default function GitHubStartNavbarItem({
  ghRepoUrl,
  buttonLabel,
}: GitHubStartNavbarItemProps) {
  const isDarkTheme = useTheme();

  return (
    <div className="flex items-center [&_span]:flex">
      <GitHubButton
        href={ghRepoUrl}
        data-color-scheme={isDarkTheme ? "dark_high_contrast" : "light"}
        data-size="large"
        data-show-count="true"
        aria-label="Star OpenTofu on GitHub"
      >
        {buttonLabel}
      </GitHubButton>
    </div>
  );
}
