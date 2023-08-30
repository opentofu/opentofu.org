import React from "react";

function Goal({ icon, title, description }) {
  return (
    <div className="bg-dark2 p-6">
      <h4 className="text-xl mb-2">{title}</h4>
      <p className="text-[#818995]">{description}</p>
    </div>
  );
}

export default function Goals() {
  return (
    <section className="py-12 mx-auto container">
      <h3 className="text-center text-5xl font-bold mb-12">Our Goals</h3>
      <div className="grid grid-cols-3 gap-6">
        <Goal
          title="Truly open-source"
          description="under a well-known and widely-accepted license that companies can trus, that won’t suddenly change in the future, and isn’t subhect to the whims of a singe vendor."
        />
        <Goal
          title="Community-driven"
          description="so that the community governs the project for the community, where pull requests are regularly reviewed and accepted on their merit."
        />
        <Goal
          title="Impartial"
          description="so that valuable features and fixes are accepted based on their value to the community, regardless of their impact on any particular vendor."
        />
        <Goal
          title="Layered and modular"
          description="with a programmer-friendly project structure to encourage building on top, enabling a new vibrant ecosystem of tools and integrations."
        />
        <Goal
          title="Backwards-compatibile"
          description="so that the existing code can drive value for years to come."
        />
      </div>
    </section>
  );
}
