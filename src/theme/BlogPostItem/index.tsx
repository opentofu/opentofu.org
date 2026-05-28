import React from "react";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import BlogPostItemContent from "@theme/BlogPostItem/Content";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import type { Props } from "@theme/BlogPostItem";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

const platforms = [
  {
    name: "X",
    href: ({ title, url }) =>
      `https://x.com/intent/tweet/?text=${title}&amp;url=${url}`,
    iconPath:
      "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "LinkedIn",
    href: ({ title, url }) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
    iconPath:
      "M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z",
  },
  {
    name: "Reddit",
    href: ({ title, url }) =>
      `https://reddit.com/submit/?url=${url}&amp;resubmit=true&amp;title=${title}`,
    iconPath:
      "M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 13.37C1.5 13.07 1 12.35 1 11.5c0-1.1.9-2 2-2 .64 0 1.22.32 1.6.82-1.1.85-1.92 1.9-2.3 3.05zm3.7.13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.8c-1.08.63-2.42.96-3.8.96-1.4 0-2.74-.34-3.8-.95-.24-.13-.32-.44-.2-.68.15-.24.46-.32.7-.18 1.83 1.06 4.76 1.06 6.6 0 .23-.13.53-.05.67.2.14.23.06.54-.18.67zm.2-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.7-2.13c-.38-1.16-1.2-2.2-2.3-3.05.38-.5.97-.82 1.6-.82 1.1 0 2 .9 2 2 0 .84-.53 1.57-1.3 1.87z",
  },
  {
    name: "Hacker News",
    href: ({ title, url }) =>
      `https://news.ycombinator.com/submitlink?u=${url}&amp;t=${title}`,
    iconPath:
      "M0 0v24h24V0H0Zm1.136 10.564h-.011c.005-.005.01-.016.016-.021 0 .005 0 .016-.005.021Zm11.678 2.888v5.405h-1.682v-5.502L6.857 5.143h1.998c2.813 5.266 2.636 5.421 3.177 6.728.66-1.446.31-1.307 3.247-6.728h1.864l-4.329 8.309Z",
  },
];

function ShareButton({ platform, title, url }) {
  const href = platform.href({
    title: encodeURIComponent(title),
    url: encodeURIComponent(url),
  });

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      className="rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 p-2 hover:bg-brand-700 dark:hover:bg-brand-500 hover:text-gray-50 dark:hover:text-gray-900 transition-colors"
      aria-label={`Share on ${platform.name}`}
    >
      <div aria-hidden className="w-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d={platform.iconPath} className="fill-current" />
        </svg>
      </div>
    </Link>
  );
}

export default function BlogPostItem({ children }: Props) {
  const { metadata } = useBlogPost();
  const { title, frontMatter } = metadata;
  const {
    siteConfig: { url: siteUrl },
  } = useDocusaurusContext();
  const url = siteUrl + useBaseUrl(metadata.permalink);

  return (
    <BlogPostItemContainer>
      <BlogPostItemHeader />

      { frontMatter.image &&
      <div className="max-w-5xl mx-auto flex justify-center">
        <img src={frontMatter.image} alt={title} />
      </div>
      }
      <div className="max-w-5xl mx-auto flex flex-col justify-center relative">
        <div className="lg:sticky top-0">
          <div className="flex justify-center mb-4 md:mb-10 lg:flex-col relative lg:absolute right-0 top-4 md:top-10 gap-4">
            {platforms.map((platform) => (
              <ShareButton
                key={platform.name}
                platform={platform}
                title={title}
                url={url}
              />
            ))}
          </div>
        </div>

        <BlogPostItemContent>{children}</BlogPostItemContent>
      </div>
    </BlogPostItemContainer>
  );
}
