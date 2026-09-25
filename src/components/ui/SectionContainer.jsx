// SectionContainer.jsx
import React from "react";

export default function SectionContainer({ title, description, children }) {
  return (
    <section className="px-6 py-12 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase">{title}</h2>
      <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">{description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
        {children}
      </div>
    </section>
  );
}
