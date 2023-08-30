// @ts-check
const stripHtml = require("striptags");

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {};

const cliNavData = require("./data/cli-nav-data.json");
const internalsNavData = require("./data/internals-nav-data.json");
const introNavData = require("./data/intro-nav-data.json");
const languageNavData = require("./data/language-nav-data.json");

function processNavItems(navItems) {
  return navItems.map(processNavItem).filter(Boolean);
}

function processTitle(value) {
  return stripHtml(value);
}

function processNavItem(navItem) {
  if (navItem.hidden) {
    return null;
  }

  if (navItem.heading) {
    return {
      type: "html",
      value: `<strong>${navItem.heading}</strong>`,
    };
  }

  if (navItem.divider) {
    return {
      type: "html",
      value: `<hr>`,
    };
  }

  if (navItem.routes) {
    return {
      type: "category",
      label: processTitle(navItem.title),
      items: processNavItems(navItem.routes),
    };
  }

  if (navItem.path) {
    return {
      type: "doc",
      id: navItem.path,
      label: processTitle(navItem.title),
    };
  }

  return {
    type: "link",
    href: navItem.href,
    label: processTitle(navItem.title),
  };
}

sidebars.cli = processNavItems(cliNavData);
sidebars.internals = processNavItems(internalsNavData);
sidebars.intro = processNavItems(introNavData);
sidebars.language = processNavItems(languageNavData);

module.exports = sidebars;
