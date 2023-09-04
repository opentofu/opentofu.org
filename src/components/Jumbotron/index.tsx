import React from "react";
import PatternBg from "../PatternBg";

type JumbotronProps = {
  children: React.ReactNode;
};

export default function Jumbotron({ children }: JumbotronProps) {
  return (
    <div className="pt-12 pb-20 flex items-center justify-center">
      <PatternBg />
      {children}
    </div>
  );
}
