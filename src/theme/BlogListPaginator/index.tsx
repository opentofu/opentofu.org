import React from "react";

import Button from "@site/src/components/Button";
export default function BlogListPaginator(props) {
  const { metadata } = props;
  const { previousPage, nextPage } = metadata;
  return (
    <nav className="bg-white flex gap-6 justify-center py-10">
      {previousPage && (
        <Button variant="secondaryOnLight" href={previousPage}>
          Previous Page
        </Button>
      )}
      {nextPage && (
        <Button variant="secondaryOnLight" href={nextPage}>
          Next Page
        </Button>
      )}
    </nav>
  );
}
