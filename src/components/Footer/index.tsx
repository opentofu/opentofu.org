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
    <footer className="[.light+&]:bg-white [.light+&]:text-dark1 text-light2">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-6">
        <Logo />
        <div className="flex flex-row gap-6 align-center">
          {links.map((link) => (
            <LinkItem key={link.href ?? link.to} item={link} />
          ))}
        </div>
        <div className="flex flex-row gap-6">
          <SocialIconLink
            name="github"
            href="https://github.com/opentffoundation/manifesto"
          />
          <SocialIconLink name="twitter" href="https://twitter.com/opentforg" />
          <SocialIconLink name="slack" href="https://slack.com/" />
        </div>
      </div>
    </footer>
  );
}
