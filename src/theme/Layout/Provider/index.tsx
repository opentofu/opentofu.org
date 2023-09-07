import React from "react";
import { composeProviders } from "@docusaurus/theme-common";
import {
  ColorModeProvider,
  AnnouncementBarProvider,
  DocsPreferredVersionContextProvider,
  ScrollControllerProvider,
  NavbarProvider,
  PluginHtmlClassNameProvider,
} from "@docusaurus/theme-common/internal";
import type { Props } from "@theme/Layout/Provider";

const Provider = composeProviders([
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  DocsPreferredVersionContextProvider,
  PluginHtmlClassNameProvider,
  NavbarProvider,
]);

export default function LayoutProvider({ children }: Props) {
  return <Provider>{children}</Provider>;
}
