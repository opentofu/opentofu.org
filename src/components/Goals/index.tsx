import React from "react";
import ExpandIcon from "../../icons/expand.svg";
import DotsIcon from "../../icons/dots.svg";
import ScaleIcon from "../../icons/scale.svg";
import LayersIcon from "../../icons/layers.svg";
import HumidityIcon from "../../icons/humidity.svg";

function Goal({ icon: Icon, title, description }) {
  return (
    <div className="bg-white dark:bg-blue-900 p-6">
      <Icon className="w-12 mb-4" aria-hidden />
      <h3 className="text-xl mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-500">{description}</p>
    </div>
  );
}

export default function Goals() {
  return (
    <section className="py-6 md:py-12 mx-auto container px-4">
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-6 md:mb-12">
        Our Goals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Goal
          icon={ExpandIcon}
          title="Truly open-source"
          description="under a well-known and widely-accepted license that companies can trust, that won’t suddenly change in the future, and isn’t subject to the whims of a single vendor."
        />
        <Goal
          icon={DotsIcon}
          title="Community-driven"
          description="so that the community governs the project for the community, where pull requests are regularly reviewed and accepted on their merit."
        />
        <Goal
          icon={ScaleIcon}
          title="Impartial"
          description="so that valuable features and fixes are accepted based on their value to the community, regardless of their impact on any particular vendor."
        />
        <Goal
          icon={LayersIcon}
          title="Layered and modular"
          description="with a programmer-friendly project structure to encourage building on top, enabling a new vibrant ecosystem of tools and integrations."
        />
        <Goal
          icon={HumidityIcon}
          title="Backwards-compatibile"
          description="so that the existing code can drive value for years to come."
        />
      </div>
    </section>
  );
}
