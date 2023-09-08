import React from "react";
import PatternBg from "../PatternBg";

type JumbotronProps = {
  children: React.ReactNode;
};

export default function Jumbotron({ children }: JumbotronProps) {
  return (
    <div className="pt-8 pb-12 md:pt-10 md:pb-20 flex flex-col items-center justify-center">
      <PatternBg />
      {children}
    </div>
  );
}
