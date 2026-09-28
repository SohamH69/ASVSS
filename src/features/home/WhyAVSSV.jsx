"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const items = [
  {
    id: 1,
    color: "var(--hue-1)",
    category: "Youth Development",
    title: "Sports & Leadership Academy",
    description:
      "Football training, athletics and structured play as a pathway to discipline, teamwork and social confidence for boys and girls aged 8–18.",
    stat: "300+",
    statDescription: "active players across two training grounds",
    image:
      "https://images.unsplash.com/photo-1789758387115-1dfbbb620e93?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 2,
    color: "var(--hue-2)",
    category: "Education & Arts",
    title: "Creative Development Programme",
    description:
      "Drawing, music, theatre and craft workshops that build self-expression, cognitive growth and pride in children who rarely get these in school.",
    stat: "500+",
    statDescription: "children enrolled each academic year",
    image:
      "https://plus.unsplash.com/premium_photo-1789722582311-a9aa3120bb76?q=80&w=1228&auto=format&fit=crop",
  },
  {
    id: 3,
    color: "var(--hue-3)",
    category: "Women's Livelihoods",
    title: "Vocational Training & SHG Support",
    description:
      "Tailoring, food processing, embroidery and self-help group formation — giving women an independent income and a collective voice.",
    stat: "200+",
    statDescription: "women trained since 2011",
    image:
      "https://images.unsplash.com/photo-1789745199014-452bcf630170?q=80&w=765&auto=format&fit=crop",
  },
  {
    id: 4,
    color: "var(--hue-4)",
    category: "Community Health",
    title: "Healthcare & Wellness Camps",
    description:
      "Free medical camps, blood donation drives, eye checkups and health awareness sessions — bringing preventive care directly to doorsteps.",
    stat: "3,000+",
    statDescription: "patients seen across annual camps",
    image:
      "https://images.unsplash.com/photo-1779974183733-400d98f22e20?q=80&w=1177&auto=format&fit=crop",
  },
  {
    id: 5,
    color: "var(--hue-5)",
    category: "Scientific Beekeeping",
    title: "Creating Opportunities",
    description:
      "Training urban and peri-urban families in modern apiculture — generating honey-based income while restoring local pollinator populations.",
    stat: "40+",
    statDescription: "trained keepers with active hives",
    image:
      "https://images.unsplash.com/photo-1790042281644-4e7637a957d7?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 6,
    color: "var(--hue-5)",
    category: "Conservation",
    title: "Tree Planting & Conservation",
    description:
      "Annual drives to plant native species in urban commons, school grounds and riverside areas — building ecological literacy alongside green cover.",
    stat: "10,000+",
    statDescription: "trained keepers with active hives",
    image:
      "https://images.unsplash.com/photo-1790042281644-4e7637a957d7?q=80&w=687&auto=format&fit=crop",
  },
];

function WhyAVSSV() {
  const containerRef = useRef(null);

  const [itemWidth, setItemWidth] = useState(400);
  const [gap, setGap] = useState(30);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setItemWidth(280);
        setGap(15);
      } else if (window.innerWidth <= 1024) {
        setItemWidth(350);
        setGap(20);
      } else {
        setItemWidth(400);
        setGap(30);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * Total horizontal distance that the cards need to travel.
   */
  const totalDistance = (items.length - 1) * (itemWidth + gap);

  /*
   * We keep the cards completely still for the first
   * 35% of the sticky section.
   *
   * After that, horizontal scrolling begins.
   */
  const horizontalStart = 0.35;

  /*
   * Extra vertical scroll space.
   *
   * The larger this value is, the longer the horizontal
   * animation will take.
   */
  const horizontalScrollDistance = totalDistance / (1 - horizontalStart);

  /*
   * Total section height.
   *
   * 100vh = initial viewport where cards are fully visible
   * + horizontalScrollDistance = horizontal animation
   */
  const sectionHeight =
    typeof window !== "undefined"
      ? `calc(100vh + ${horizontalScrollDistance}px)`
      : "200vh";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /*
   * IMPORTANT:
   *
   * 0       -> cards stay at original position
   * 0.35    -> cards are STILL at original position
   * 1       -> cards reach their final horizontal position
   *
   * This creates the "show cards first, then scroll horizontally"
   * behaviour.
   */
  const x = useTransform(
    scrollYProgress,
    [0, horizontalStart, 1],
    [0, 0, -totalDistance],
  );

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{
        height: sectionHeight,
      }}
      id="our-work"
    >
      {/* =========================
            HEADING
        ========================== */}
      <div className="flex flex-col items-center px-6 pt-8 md:pt-10">
        <h1 className="mb-4 text-2xl font-bold text-center uppercase md:text-3xl">
          Six programmes.<br></br>
          One neighbourhood.<br></br>
          Lasting change.
        </h1>

        <p className="mx-auto max-w-4xl text-center text-sm text-gray-700 md:text-xl">
          Every programme we run was shaped by a direct need we heard from the
          community — not a donor requirement. That is what makes them work.
        </p>
      </div>
      {/* STICKY VIEWPORT */}
      <div className="sticky top-12 h-screen w-full overflow-hidden">
        {/* =========================
            CARDS AREA
        ========================== */}
        <div
          className="
            mt-8
            flex
            items-stretch
            overflow-hidden
            px-5
            md:mt-10
          "
          style={{
            height: "calc(100vh - 150px)",
          }}
        >
          <motion.div
            className="
              flex
              h-full
              shrink-0
              items-stretch
              will-change-transform
            "
            style={{
              x,
              gap: `${gap}px`,
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="
                  relative
                  flex
                  h-full
                  w-[400px]
                  shrink-0
                  flex-col
                  overflow-hidden
                  bg-white
                  max-[600px]:w-[280px]
                "
              >
                {/* =========================
                    IMAGE
                ========================== */}
                <div
                  className="
                    relative
                    h-[240px]
                    w-full
                    shrink-0
                    overflow-hidden
                    max-[600px]:h-[380px]
                    md:h-[550px]
                    lg:h-[270px]
                  "
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute" />
                </div>

                {/* =========================
                    CONTENT
                ========================== */}
                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    px-4
                    py-6
                    justify-between
                    md:px-8
                    md:py-7
                  "
                >
                  <div className="">
                    {/* CATEGORY */}
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-[#C75B26]">
                      {item.category}
                    </p>

                    {/* TITLE */}
                    <h2 className="mb-2 font-serif text-2xl font-semibold leading-tight tracking-tight text-[#151515] md:text-[29px]">
                      {item.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-[16px] text-[#333333] md:text-base">
                      {item.description}
                    </p>
                  </div>

                  <div className="">
                    {/* DIVIDER */}
                    <div className="my-3 bottom-0 border-t border-[#DEDCD5]" />

                    {/* STATISTICS */}
                    <div className="mt-auto flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[#222222]">
                      <span className="text-sm font-semibold">{item.stat}</span>
                      <span className="text-xs">{item.statDescription}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyAVSSV;
