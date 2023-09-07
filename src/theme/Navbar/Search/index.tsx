import React from "react";

import type { Props } from "@theme/Navbar/Search";

export default function NavbarSearch({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}
