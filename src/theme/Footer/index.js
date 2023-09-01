import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";

import FooterComponent from "@site/src/components/Footer";

function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  return <FooterComponent links={footer.links} />;
}

export default React.memo(Footer);
