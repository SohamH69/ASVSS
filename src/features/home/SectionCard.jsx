"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Sports & Leadership",
    image:
      "src/assets/sportsandledership.jpeg",
    link:""
    ///football
    },
  {
    id: 2,
    title: "Healthcare Access",
    image:
      "https://d12aarmt01l54a.cloudfront.net/cms/images/Media-20220512170241/808-440.png",
    link:""
    ///healthcare
    },
  {
    id: 3,
    title: "Women's Livelihood",
    image:
      "src/assets/CreatingOpportunities.jpeg",
    link:""
    ///self-reliance
    },
];

function TiltCard({ item }) {
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
  });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
    });
  };

  return (
    <div
      className="group"
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={item.link}>
      <div
        style={style}
        className="overflow-hidden border border-black/10 bg-white shadow-sm transition-all duration-300 ease-out will-change-transform group-hover:shadow-2xl"
      >
        <div className="relative aspect-A[16/9] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="h-78 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* optional overlay glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 opacity-60" />
        </div>

        <div className="flex items-center justify-center px-4 py-5 sm:py-6">
          <h3 className="text-center text-xl font-medium tracking-tight text-black sm:text-2xl">
            {item.title}
          </h3>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default function SectionCard() {
  return (
    <section className="px-4 pb-8 sm:px-6 md:px-8 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-[1900px]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3">
          {items.map((item) => (
            <TiltCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}