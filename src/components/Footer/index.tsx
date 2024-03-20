import React from "react";
import { FooterLinkItem } from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Logo from "@theme/Logo";
import SocialIconLink from "../SocialIconLink";

type LinkItemProps = {
  item: FooterLinkItem;
};

function LinkItem({ item }: LinkItemProps) {
  const { to, href, label, prependBaseUrlToHref, ...props } = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });
  return (
    <Link
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      className="font-bold text-gray-900 dark:text-gray-50 hover:text-brand-500 dark:hover:text-brand-500 menu-text "
      target="_blank"
      {...props}
    >
      {label}
    </Link>
  );
}

type FooterProps = {
  links: FooterLinkItem[];
};

export default function Footer({ links }: FooterProps) {
  return (
    <footer className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-6 px-4">
      <Logo />
      <div className="flex gap-6 align-center flex-wrap justify-center">
        {links.map((link) => (
          <LinkItem key={link.href ?? link.to} item={link} />
        ))}
      </div>
      <div className="flex gap-6">
        <SocialIconLink
          name="youtube"
          href="https://www.youtube.com/channel/UCgIzfj9QuWL9HHXIXq2A0Ig"
          label="Go to the OpenTofu's Youtube page"
          hiddenLabel
        />
        <SocialIconLink
          name="github"
          href="https://github.com/opentofu/opentofu"
          label="Go to the OpenTofu's GitHub repository"
          hiddenLabel
        />
        <SocialIconLink
          name="x"
          href="https://x.com/opentofuorg"
          label="Follow us on X"
          hiddenLabel
        />
        <SocialIconLink
          name="slack"
          href="/slack"
          label="Join us on Slack"
          hiddenLabel
        />
      </div>
    </footer>
  );
}
