// ParallaxSection.jsx
import React from "react";

export default function ParallaxSection({ heading, paragraph, image }) {
  return (
    <section className="w-full">
      {/* Text block */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase">{heading}</h2>
        <p className="text-lg md:text-xl text-gray-700">{paragraph}</p>
      </div>

      {/* Parallax image block */}
      <div
        className="h-screen w-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </section>
  );
}
