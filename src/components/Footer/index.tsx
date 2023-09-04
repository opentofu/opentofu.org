import React from "react";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import { FooterLogo, FooterLinkItem } from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

type LogoImageProps = {
  logo: FooterLogo;
};

function LogoImage({ logo }: LogoImageProps) {
  const { withBaseUrl } = useBaseUrlUtils();
  const sources = {
    light: withBaseUrl(logo.src),
    dark: withBaseUrl(logo.srcDark ?? logo.src),
  };
  return (
    <ThemedImage
      alt={logo.alt}
      sources={sources}
      width={logo.width}
      height={logo.height}
      style={logo.style}
    />
  );
}

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
  logo: FooterLogo;
  links: FooterLinkItem[];
};

export default function Footer({ logo, links }: FooterProps) {
  return (
    <footer className="text-light2 flex flex-col md:flex-row items-center justify-between gap-6 py-6 container mx-auto">
      <LogoImage logo={logo} />
      <div className="flex flex-row gap-6 align-center">
        {links.map((link) => (
          <LinkItem key={link.href ?? link.to} item={link} />
        ))}
      </div>
      <div className="flex flex-row gap-6">
        <a className="cursor-pointer header-github-link" />
        <a className="cursor-pointer header-twitter-link" />
        <a
          href="https://join.slack.com/t/slack-9uv6202/shared_invite/zt-22ifsm1t2-AF6cL0cOdzivP8E~4deDJA"
          className="cursor-pointer header-slack-link"
        />
      </div>
    </footer>
  );
}
