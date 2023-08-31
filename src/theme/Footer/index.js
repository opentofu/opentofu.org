import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";

import FooterComponent from "@site/src/components/Footer";

function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  return <FooterComponent logo={footer.logo} links={footer.links} />;
}

export default React.memo(Footer);
