import React, { useEffect, useRef, useState } from "react";

const cards = [
  {
    number: "01",
    label: "01. Livelihoods",
    title: "From a shared balcony to a steady income: Meena's beekeeping journey",
    description:
      "When Meena first heard about the beekeeping training, she was sceptical. Eighteen months later, she tends six hives and sells at two local markets — and three of her neighbours have enrolled.",
    image: "src/assets/beekeperSundarbans.jpeg",
  },
  {
    number: "02",
    label: "02. Youth",
    title: "Raju's first district selection — and the coach who refused to give up",
    description:
      "Three years of early-morning practice, a few setbacks and an unshakeable coach. Raju is now in the district youth squad.",
    image: "src/assets/raju.jpeg",
  },
  {
    number: "03",
    label: "03. Health",
    title: "Annual Health Camp — 420 patients seen in one day",
    description:
      "Our December camp was the largest in ASVSS history. Thirteen volunteer doctors and nurses served 420 patients from five neighbourhoods.",
    image: "src/assets/artcamp.jpeg",
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
                  {/* <div className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white md:text-sm">
                    {card.label}
                  </div> */}

                  <h2 className="mb-5 text-3xl font-medium tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
                    {card.title}
                  </h2>

                  {/* <p className="max-w-2xl text-base leading-relaxed text-white/65 md:text-lg lg:text-xl">
                    {card.description}
                  </p> */}
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