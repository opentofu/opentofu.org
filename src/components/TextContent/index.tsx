import React from "react";

type TextContentProps = {
  children: React.ReactNode;
};

export default function TextContent({ children }: TextContentProps) {
  return (
    <div className="bg-white flex-1">
      <div className="container my-14">
        <div className="prose lg:prose-xl mx-auto prose-h3:text-4xl prose-h3:leading-normal">
          {children}
        </div>
      </div>
    </div>
  );
}
