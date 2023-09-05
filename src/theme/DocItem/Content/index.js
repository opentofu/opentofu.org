import React from "react";
import MDXContent from "@theme/MDXContent";

export default function DocItemContent({ children }) {
  return (
    <div className="prose lg:prose-lg prose-h1:text-4xl prose-h2:text-3xl dark:prose-invert">
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
