"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Working with the team completely changed how we approached the project. Their thinking was sharp, collaborative and incredibly effective.",
    name: "Arjun Mehta",
    designation: "Founder, North House",
    company: "North House",
  },
  {
    id: 2,
    quote:
      "They understood the problem before jumping into design. The result feels simple, considered and exactly right for our brand.",
    name: "Rhea Sen",
    designation: "Marketing Director",
    company: "Studio Nine",
  },
  {
    id: 3,
    quote:
      "The process was refreshingly clear from the first conversation. Every decision had a reason behind it and the final result exceeded expectations.",
    name: "Kabir Khanna",
    designation: "Managing Director",
    company: "Forma",
  },
  {
    id: 4,
    quote:
      "What impressed us most was the attention to detail. Nothing felt decorative for the sake of it. Everything had purpose.",
    name: "Ananya Roy",
    designation: "Brand Head",
    company: "Common Ground",
  },
  {
    id: 5,
    quote:
      "A rare combination of strong ideas, craft and an understanding of what the business actually needs.",
    name: "Vikram Shah",
    designation: "CEO",
    company: "Assembly",
  },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function StackedTestimonials() {
  const sectionRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  /*
   * Detect desktop / mobile
   */
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const update = () => {
      setIsDesktop(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  /*
   * Convert page scroll into:
   *
   * 0
   * 1
   * 2
   * 3
   * 4
   *
   * corresponding to each testimonial.
   */
  useEffect(() => {
    let frame = null;

    const updateProgress = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      
      const rect = section.getBoundingClientRect();
      
      const START_OFFSET = 400;
      const scrollDistance = section.offsetHeight - window.innerHeight - START_OFFSET;

      const travelled = -rect.top - START_OFFSET;

      const normalized =
        scrollDistance > 0 ? clamp(travelled / scrollDistance, 0, 1) : 0;

      setProgress(normalized * (testimonials.length - 1));

      frame = null;
    };

    const handleScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        /*
         * More height = slower transition.
         *
         * 80vh per card gives a nice editorial feel.
         */
        height: `${testimonials.length * 80 + 100}vh`,
        marginTop: "0px",
        marginBottom: "20px",
      }}
    >
      <div className="sticky top-[70px] flex h-[84vh] flex-col overflow-hidden">
        {/* Heading */}
        {/* <div className="flex h-[13vh] shrink-0 items-center justify-center px-5">
          <h2 className="m-0 text-center text-[clamp(36px,8vw,72px)] uppercase">
            Our Testimonials
          </h2>
        </div> */}

        {/* Cards */}
        <div className="flex min-h-0 flex-1 px-0 pb-0 md:px-7 md:pb-7">
          <div
            className={`
              flex h-full w-full
              overflow-hidden
              lg:flex-row
              flex-col
              md:border md:border-black/10
            `}
          >
            {testimonials.map((testimonial, index) => {
              /*
               * activation:
               *
               * active card = 1
               * cards away from current progress = 0
               *
               * During transition:
               *
               * card 1 = .5
               * card 2 = .5
               *
               * This creates the smooth handover.
               */
              const distance = Math.abs(progress - index);

              const activation = clamp(1 - distance, 0, 1);

              /*
               * Flex-grow drives the accordion.
               *
               * inactive card: flexGrow = 1
               * active card: flexGrow = 10
               */
              const flexGrow = 1 + activation * (isDesktop ? 18 : 2);

              /*
               * Content fades as card closes.
               */
              const contentOpacity = clamp(activation * 1.8, 0, 1);

              /*
               * Slight movement inside content makes
               * the reveal feel nicer.
               */
              const contentX = isDesktop ? (1 - activation) * 25 : 0;

              const contentY = !isDesktop ? (1 - activation) * 18 : 0;

              return (
                <article
                  key={testimonial.id}
                  className={`
                    group relative
                    min-h-0 min-w-0
                    overflow-hidden
                    border-black/15
                    transition-[background-color]
                    duration-300
                    ease-out

                    border-b
                    last:border-b-0

                    md:border-b-0
                    md:border-r
                    md:last:border-r-0
                  `}
                  style={{
                    flexGrow,
                    flexBasis: 0,

                    backgroundColor:
                      activation > 0.5
                        ? "#ded9d0"
                        : index % 2 === 0
                          ? "#777777"
                          : "#929292",
                  }}
                >
                  {/* =====================================
                      COLLAPSED CARD
                  ====================================== */}

                  <div
                    className={`
                      absolute inset-0
                      flex
                      lg:flex-col
                      items-center
                      md:items-center
                      justify-between
                      p-4
                      md:p-5
                      transition-opacity
                      duration-200
                    `}
                    style={{
                      opacity: 1 - contentOpacity,
                    }}
                  >
                    {/* quote mark */}
                    <span className="text-[28px] font-serif leading-none text-white">
                      “
                    </span>

                    <span
                      className="
                        text-[11px]
                        uppercase
                        tracking-[0.12em]
                        text-white/80

                        lg:[writing-mode:vertical-rl]
                        lg:rotate-180
                      "
                    >
                      {testimonial.name}
                    </span>

                    <span className="text-[11px] text-white/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* =====================================
                      OPEN CARD
                  ====================================== */}

                  <div
                    className="
                      absolute inset-0
                      flex flex-col
                      justify-between
                      p-6
                      md:p-10
                      lg:p-12
                    "
                    style={{
                      opacity: contentOpacity,

                      transform: `
                        translate3d(
                          ${contentX}px,
                          ${contentY}px,
                          0
                        )
                      `,

                      pointerEvents: contentOpacity > 0.7 ? "auto" : "none",
                    }}
                  >
                    {/* Top */}
                    <div>
                      <div className="mb-5 flex items-start justify-between md:mb-8">
                        <span className="font-serif text-[42px] leading-none text-neutral-900 md:text-[58px]">
                          “
                        </span>

                        <span className="text-[12px] font-medium text-black/45 md:text-[13px]">
                          {String(index + 1).padStart(2, "0")}/
                          {String(testimonials.length).padStart(2, "0")}
                        </span>
                      </div>

                      <blockquote className="max-w-[850px] text-[21px] font-medium leading-[1.15] tracking-[-0.035em] text-neutral-900 sm:text-[25px] md:text-[34px] lg:text-[42px]">
                        {testimonial.quote}
                      </blockquote>
                    </div>

                    {/* Bottom */}
                    <div className="mt-6 flex items-end justify-between border-t border-black/15 pt-5 md:mt-10 md:pt-6">
                      <div>
                        <p className="text-[15px] font-semibold text-neutral-900 md:text-[17px]">
                          {testimonial.name}
                        </p>

                        <p className="mt-1 text-[12px] text-black/50 md:text-[14px]">
                          {testimonial.designation}
                        </p>
                      </div>

                      <p className="hidden text-[12px] uppercase tracking-[0.12em] text-black/40 sm:block">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Progress */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-black/10 md:hidden">
          <div
            className="h-full bg-neutral-900"
            style={{
              width: `${((progress + 1) / testimonials.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
