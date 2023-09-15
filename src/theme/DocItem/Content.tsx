import React from "react";
import MDXContent from "@theme/MDXContent";

export default function DocItemContent({ children }) {
  return (
    <div className="prose prose-hr:my-6 dark:prose-hr:border-gray-800 prose-hr:border-gray-200 prose-hr:border-solid prose-pre:bg-blue-900 text-gray-600 dark:text-gray-500 lg:prose-lg prose-h1:text-4xl prose-h2:text-3xl dark:prose-invert prose-code:px-1.5 prose-code:before:content-none prose-code:after:content-none">
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
