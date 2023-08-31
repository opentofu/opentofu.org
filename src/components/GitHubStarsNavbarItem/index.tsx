import React from "react";
import GitHubButton from "react-github-btn";

type GitHubStartNavbarItemProps = {
  ghRepoUrl: string;
  buttonLabel: string;
};

export default function GitHubStartNavbarItem({
  ghRepoUrl,
  buttonLabel,
}: GitHubStartNavbarItemProps) {
  return (
    <div className="flex items-center [&_span]:flex">
      <GitHubButton
        href={ghRepoUrl}
        data-color-scheme="no-preference: dark_high_contrast; light: light; dark: dark_high_contrast;"
        data-size="large"
        data-show-count="true"
        aria-label="Star opentffoundation/manifesto on GitHub"
      >
        {buttonLabel}
      </GitHubButton>
    </div>
  );
}
