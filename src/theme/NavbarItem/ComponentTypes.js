import GitHubStarsNavbarItem from "@site/src/components/GitHubStarsNavbarItem";
import ButtonNavbarItem from "@site/src/components/ButtonNavbarItem";
import SocialIconLink from "@site/src/components/SocialIconLink";

import DefaultNavbarItem from "@theme/NavbarItem/DefaultNavbarItem";
import DropdownNavbarItem from "@theme/NavbarItem/DropdownNavbarItem";
import SearchNavbarItem from "@theme/NavbarItem/SearchNavbarItem";
import DocNavbarItem from "@theme/NavbarItem/DocNavbarItem";
import DocSidebarNavbarItem from "@theme/NavbarItem/DocSidebarNavbarItem";
import DocsVersionNavbarItem from "@theme/NavbarItem/DocsVersionNavbarItem";
import DocsVersionDropdownNavbarItem from "@theme/NavbarItem/DocsVersionDropdownNavbarItem";

export default {
  default: DefaultNavbarItem,
  search: SearchNavbarItem,
  dropdown: DropdownNavbarItem,
  doc: DocNavbarItem,
  docSidebar: DocSidebarNavbarItem,
  docsVersion: DocsVersionNavbarItem,
  docsVersionDropdown: DocsVersionDropdownNavbarItem,
  "custom-github-stars-navbar-item": GitHubStarsNavbarItem,
  "custom-button-navbar-item": ButtonNavbarItem,
  "custom-social-icon-link-navbar-item": SocialIconLink,
};
