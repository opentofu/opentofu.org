import React from "react";
import NavLogo from "@site/static/img/nav-logo.svg";

export default function Footer() {
  return (
    <footer className="text-light2 flex flex-col md:flex-row items-center justify-between gap-6 w-full py-6 px-6 md:px-28">
      <NavLogo />
      <div className="flex flex-row gap-6 align-center">
        <a className="cursor-pointer">Manifesto</a>
        <a className="cursor-pointer">Supporters</a>
        <a className="cursor-pointer">FAQs</a>
        <a className="cursor-pointer">Blog</a>
        <a className="cursor-pointer">Docs</a>
      </div>
      <div className="flex flex-row gap-6">
        <a className="cursor-pointer header-github-link" />
        <a className="cursor-pointer header-twitter-link" />
        <a className="cursor-pointer header-slack-link" />
      </div>
    </footer>
  );
}
