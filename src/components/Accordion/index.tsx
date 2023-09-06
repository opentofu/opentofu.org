import React from "react";

type AccordionProps = {
  children: React.ReactNode;
};

const Accordion = ({ children }: AccordionProps) => {
  return <section className="flex flex-col">{children}</section>;
};

export default Accordion;
