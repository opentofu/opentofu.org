import React from "react";

type AccordionProps = {
  children: React.ReactNode;
};

const Accordion = ({ children }: AccordionProps) => {
  return <section className="grid grid-cols-1 divide-y">{children}</section>;
};

export default Accordion;
