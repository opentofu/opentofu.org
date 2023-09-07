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
    <footer className="dark:text-gray-50">
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
          <SocialIconLink
            name="slack"
            href="https://join.slack.com/t/slack-9uv6202/shared_invite/zt-22ifsm1t2-AF6cL0cOdzivP8E~4deDJA"
          />
        </div>
      </div>
    </footer>
  );
}
