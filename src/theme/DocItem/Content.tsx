import React from "react";
import MDXContent from "@theme/MDXContent";
import TextContent from "@site/src/components/TextContent";

export default function DocItemContent({ children }) {
  return (
    <TextContent className="max-w-none">
      <MDXContent>{children}</MDXContent>
    </TextContent>
  );
}
