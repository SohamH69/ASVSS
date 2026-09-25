"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const items = [
  {
    id: 1,
    color: "var(--hue-1)",
    label: "Night One",
    image:
      "https://images.unsplash.com/photo-1789758387115-1dfbbb620e93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    color: "var(--hue-2)",
    label: "Night Two",
    image:
      "https://plus.unsplash.com/premium_photo-1789722582311-a9aa3120bb76?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWd8fHx8fA%3D%3D",
  },
  {
    id: 3,
    color: "var(--hue-3)",
    label: "Night Three",
    image:
      "https://images.unsplash.com/photo-1789745199014-452bcf630170?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    color: "var(--hue-4)",
    label: "Night Four",
    image:
      "https://images.unsplash.com/photo-1779974183733-400d98f22e20?q=80&w=1177&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    color: "var(--hue-5)",
    label: "Night Five",
    image:
      "https://images.unsplash.com/photo-1790042281644-4e7637a957d7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

  // Total horizontal distance the cards need to travel
  const totalDistance = (items.length - 1) * (itemWidth + gap);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{
        // The vertical scroll distance drives the horizontal movement
        height: `calc(100vh + ${totalDistance}px)`,
      }}
    >
      {/* Everything inside this stays visible while scrolling h-screen*/}
      <div className="sticky top-6 h-[630px] w-full overflow-hidden">
        {/* HEADING */}
        <section className="flex flex-col justify-center items-center pt-8 lg:pt-10 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            Why ASVSS?
          </h1>
          <p className="mx-auto px-6 max-w-4xl  text-lg md:text-xl text-gray-700 text-center">
            Lorem Ipsum has been the industry's standard dummy text ever since
            1966, when designers at Letraset and decades, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </section>

        {/* CARDS */}
        <div className="mt-8 flex h-[calc(100vh-150px)] items-start overflow-hidden px-5 lg:mt-10">
          <motion.div
            className="flex shrink-0 gap-[30px] will-change-transform max-[600px]:gap-[15px]"
            style={{ x }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="
                                    relative
                                    h-[350px]
                                    w-[400px]
                                    shrink-0
                                    overflow-hidden
                                    bg-cover
                                    bg-center
                                    max-[600px]:h-[350px]
                                    max-[600px]:w-[280px]
                                "
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                {/* Gradient */}
                <div
                  className="
                                        pointer-events-none
                                        absolute
                                        inset-0
                                        bg-linear-to-b
                                        from-transparent
                                        from-60%
                                        to-(--item-color)
                                        mix-blend-multiply
                                    "
                  style={{
                    "--item-color": item.color,
                  }}
                />

                {/* Content */}
                {/* <div className="absolute bottom-7.5 left-7.5 z-10">
                  <span
                    className="mb-2 block font-mono text-sm"
                    style={{
                      color: item.color,
                    }}
                  >
                    0{item.id}
                  </span>

                  <h2 className="m-0 text-[28px] font-semibold">
                    {item.label}
                  </h2>
                </div> */}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyAVSSV;
