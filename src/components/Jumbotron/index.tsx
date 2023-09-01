import React from "react";
import PatternBg from "../PatternBg";

type JumbotronProps = {
  children: React.ReactNode;
};

export default function Jumbotron({ children }: JumbotronProps) {
  return (
    <div className="pt-20 pb-24 flex items-center justify-center">
      <PatternBg />
      {typeof children === "string" && (
        <h1 className="text-7xl font-bold text-white">{children}</h1>
      )}
      {typeof children !== "string" && children}
    </div>
  );
}
