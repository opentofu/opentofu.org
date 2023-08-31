import React from "react";
import clsx from "clsx";

type ToggleButtonProps = {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  count?: number;
};

function ToggleButton({
  children,
  isActive,
  count,
  ...rest
}: ToggleButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        "border text-white h-12 px-6 flex items-center hover:no-underline",
        isActive ? "border-white" : "border-white/20"
      )}
      {...rest}
    >
      {children}
      {count && (
        <sup className="ml-2 mt-2 text-brandLight text-base font-bold">
          {count}
        </sup>
      )}
    </button>
  );
}

export default function Supporters() {
  const [activeTab, setActiveTab] = React.useState("all");
  return (
    <section className="py-12 mx-auto container">
      <h3 className="text-center text-5xl font-bold mb-7">Supporters</h3>
      <div className="flex gap-6 justify-center">
        <ToggleButton
          isActive={activeTab === "all"}
          onClick={() => setActiveTab("all")}
        >
          All
        </ToggleButton>
        <ToggleButton
          isActive={activeTab === "companies"}
          onClick={() => setActiveTab("companies")}
          count={12}
        >
          Companies
        </ToggleButton>
        <ToggleButton
          isActive={activeTab === "individuals"}
          onClick={() => setActiveTab("individuals")}
          count={34}
        >
          Individuals
        </ToggleButton>
        <ToggleButton
          isActive={activeTab === "projects"}
          onClick={() => setActiveTab("projects")}
          count={56}
        >
          Projects
        </ToggleButton>
      </div>
    </section>
  );
}
