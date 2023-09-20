import React from "react";
import PaginatorNavLink from "../PaginatorNavLink";
import type { Props } from "@theme/DocPaginator";

export default function DocPaginator(props: Props) {
  const { previous, next } = props;
  return (
    <nav className="grid grid-cols-2 gap-3" aria-label="Docs pages">
      {previous && (
        <PaginatorNavLink
          {...previous}
          subLabel={<>Previous</>}
        />
      )}
      {next && (
        <PaginatorNavLink
          {...next}
          subLabel={<>Next</>}
          isNext
          className="col-start-2"
        />
      )}
    </nav>
  );
}
