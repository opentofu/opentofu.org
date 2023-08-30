import React from "react";
import clsx from "clsx";

type ToggleButtonProps = {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
};

function ToggleButton({ children, isActive, onClick }: ToggleButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        "border font-semibold text-white h-12 px-6 flex items-center hover:no-underline",
        isActive ? "border-white" : "border-white/20"
      )}
    >
      {children}
    </button>
  );
}

export default function Supporters() {
  return (
    <section className="py-12 mx-auto container">
      <h3 className="text-center text-5xl font-bold mb-7">Supporters</h3>
      <div className="flex gap-6 justify-center">
        <ToggleButton isActive onClick={() => {}}>
          All
        </ToggleButton>
        <ToggleButton onClick={() => {}}>Companies</ToggleButton>
        <ToggleButton onClick={() => {}}>Individuals</ToggleButton>
        <ToggleButton onClick={() => {}}>Projects</ToggleButton>
      </div>
    </section>
  );
}
