import React from "react";

import Button from "@site/src/components/Button";
import { Props } from "@theme/BlogListPaginator";

export default function BlogListPaginator(props: Props) {
  const { metadata } = props;
  const { previousPage, nextPage } = metadata;
  return (
    <nav className="flex gap-6 justify-center py-10">
      {previousPage && (
        <Button variant="secondary" href={previousPage}>
          Previous Page
        </Button>
      )}
      {nextPage && (
        <Button variant="secondary" href={nextPage}>
          Next Page
        </Button>
      )}
    </nav>
  );
}
