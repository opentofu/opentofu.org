import React from "react";
import {
  ErrorBoundaryError,
  ErrorBoundaryTryAgainButton,
} from "@docusaurus/theme-common";
import type { Props } from "@theme/Error";

export default function ErrorPageContent({ error, tryAgain }: Props) {
  return (
    <main>
      <h1>This page crashed.</h1>

      <ErrorBoundaryTryAgainButton onClick={tryAgain} />

      <hr />

      <ErrorBoundaryError error={error} />
    </main>
  );
}
