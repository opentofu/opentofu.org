import React from "react";
import MDXContent from "@theme/MDXContent";
import TextContent from "@site/src/components/TextContent";
import { Props } from "@theme/DocItem/Content";

export default function DocItemContent({ children }: Props) {
  return (
    <TextContent className="max-w-none">
      <MDXContent>{children}</MDXContent>
    </TextContent>
  );
}
