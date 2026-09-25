import React, { useEffect, useRef, useState } from "react";

const cards = [
  {
    number: "01",
    label: "01. VISION",
    title: "Built to stand apart",
    description:
      "Architecture begins with a clear point of view — proportion, rhythm and purpose working together.",
    image: "https://media.istockphoto.com/id/870402320/photo/a-social-worker-meeting-with-a-group-of-villagers.jpg?s=612x612&w=0&k=20&c=2JlS1vqg4pU5lCp8oiFXjVgMPlHbhrmH4wmtRJdq384=",
  },
  {
    number: "02",
    label: "02. MATERIAL",
    title: "Material matters",
    description:
      "Every surface, texture and material contributes to how a space feels and performs.",
    image: "https://d34ad2g4hirisc.cloudfront.net/volunteer_positions/photos/000/033/532/main/4a47a0db6e60853dedfcfdf08a5ca249.png",
  },
  {
    number: "03",
    label: "03. FORM",
    title: "Designed with purpose",
    description:
      "Strong forms create memorable spaces without unnecessary visual noise.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tLgtXkrH8EmDZGZE8FGACQBh5ImnJIRN5aI17fo1ltMsmWC61ah78G8_&s=10",
  },
  {
    number: "04",
    label: "04. CRAFT",
    title: "Precision in every layer",
    description:
      "The difference is often found in the small decisions that shape the larger experience.",
    image: "https://wishesandblessings.net/blog/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-02-at-10.58.36-AM-1.jpeg",
  },
  {
    number: "05",
    label: "05. DETAIL",
    title: "The last millimetre",
    description:
      "Reveals, shadow gaps and junctions decide whether the whole thing looks considered or merely finished.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVl7h92D7E33qYZot_2o-l4tv3wR0xTrAIfcSs2SoTEeW1wJqA2a4EyZb&s=10",
  },
];

export default function StackedCards() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      const scrollableDistance =
        containerRef.current.offsetHeight - window.innerHeight;

      const travelled = -rect.top;

      const rawProgress =
        scrollableDistance > 0 ? travelled / scrollableDistance : 0;

      const normalizedProgress = Math.min(
        Math.max(rawProgress, 0),
        1
      );

      // Convert 0 → 1 into 0 → cards.length - 1
      setProgress(normalizedProgress * (cards.length - 1));

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateScroll);

    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{
        height: `${cards.length * 100}vh`,
      }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-4 md:px-8">
        <div className="relative h-[68vh] w-full max-w-[1100px] md:h-[72vh]">
          {cards.map((card, index) => {
            const difference = index - progress;

            let translateY = 0;
            let scale = 1;
            let blur = 0;
            let brightness = 1;
            let opacity = 1;

            /*
              difference < 0
              = card has already passed
              = keep behind current card
            */

            if (difference < 0) {
              const depth = Math.abs(difference);

              translateY = -depth * 18;
              scale = Math.max(0.9, 1 - depth * 0.025);
              blur = Math.min(depth * 5, 14);
              brightness = Math.max(0.55, 1 - depth * 0.12);
              opacity = Math.max(0.65, 1 - depth * 0.08);
            }

            /*
              difference >= 0
              = upcoming card
              = bring it from bottom
            */

            if (difference >= 0) {
              const mainDistance = Math.min(difference, 1);

              translateY =
                mainDistance * window.innerHeight * 1.05 +
                Math.max(difference - 1, 0) * 20;

              scale = 1;
              blur = 0;
            }

            return (
              <article
                key={card.number}
                className="absolute inset-0 overflow-hidden bg-neutral-900 shadow-2xl will-change-transform"
                style={{
                  zIndex: index + 1,

                  transform: `
                    translate3d(0, ${translateY}px, 0)
                    scale(${scale})
                  `,

                  filter: `
                    blur(${blur}px)
                    brightness(${brightness})
                  `,

                  opacity,

                  transformOrigin: "center top",
                }}
              >
                {/* Background image */}
                <img
                  src={card.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  draggable="false"
                />

                {/* Dark cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />

                {/* Optional grey tint */}
                <div className="absolute inset-0 bg-slate-900/15" />

                {/* Card number */}
                <div className="absolute right-6 top-6 text-sm font-semibold tracking-wider text-white/60 md:right-10 md:top-8">
                  {card.number}/{String(cards.length).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 max-w-3xl p-7 md:p-12 lg:p-14">
                  <div className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-rose-300 md:text-sm">
                    {card.label}
                  </div>

                  <h2 className="mb-5 text-3xl font-medium tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
                    {card.title}
                  </h2>

                  <p className="max-w-2xl text-base leading-relaxed text-white/65 md:text-lg lg:text-xl">
                    {card.description}
                  </p>
                </div>

                {/* Subtle inner border */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}