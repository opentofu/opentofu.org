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
      className="hover:text-gray-900 hover:dark:text-gray-50"
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
          name="github"
          href="https://github.com/opentofu/manifesto"
          label="Go to the OpenTofu's manifesto GitHub repository"
          hiddenLabel
        />
        <SocialIconLink
          name="twitter"
          href="https://twitter.com/opentofuorg"
          label="Follow us on Twitter"
          hiddenLabel
        />
        <SocialIconLink
          name="slack"
          href="https://join.slack.com/t/slack-9uv6202/shared_invite/zt-22ifsm1t2-AF6cL0cOdzivP8E~4deDJA"
          label="Join us on Slack"
          hiddenLabel
        />
      </div>
    </footer>
  );
}
