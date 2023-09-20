import React from "react";

import Layout from "@theme/Layout";
import { Props } from "@theme/BlogLayout";

export default function BlogLayout(props: Props) {
  const { children, ...layoutProps } = props;

  return (
    <Layout {...layoutProps}>
      <main itemScope itemType="http://schema.org/Blog">
        {children}
      </main>
    </Layout>
  );
}
