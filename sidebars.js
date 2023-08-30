// @ts-check
const stripHtml = require("striptags");

const fs = require("fs");

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

function documentExists(docId) {
  // check if a file without its extension exists in the document folder
  const dirName = docId.substring(0, docId.lastIndexOf("/"));
  const fileName = docId.substring(docId.lastIndexOf("/") + 1);

  const exists =
    fs
      .readdirSync(`${__dirname}/docs/${dirName}`)
      .find((f) => f.split(".")[0] === fileName) !== undefined;

  return exists;
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
    // check if the document exists, if it doesn't then we can ignore this for now
    // TODO: In the long run, ensure that this doesn't happen
    if (!documentExists(navItem.path)) {
      return null;
    }
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
