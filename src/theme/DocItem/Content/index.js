import React from "react";
import MDXContent from "@theme/MDXContent";

export default function DocItemContent({ children }) {
  return (
    <div className="prose lg:prose-lg prose-h1:text-4xl prose-h2:text-3xl dark:prose-invert prose-code:px-1.5 prose-code:before:content-none prose-code:after:content-none max-w-none">
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
