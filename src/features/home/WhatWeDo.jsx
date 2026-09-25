import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  {
    title: "Children and Sports",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Community Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Support and Self-Reliance",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80",
  },
];
function WhatWeDo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".scroll-impact");

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const scrollableHeight = section.offsetHeight - window.innerHeight;

      const progress =
        scrollableHeight > 0
          ? Math.min(Math.max(-rect.top / scrollableHeight, 0), 1)
          : 0;

      setStep(Math.min(Math.floor(progress * 3), 2));
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="scroll-impact h-[300vh] my-20">
      <div className="sticky top-20 flex h-[76vh] items-center justify-center overflow-hidden lg:h-screen">
        <div className="flex w-[90%] max-w-5xl flex-col items-center absolute top-4">
          {/* HEADING 1 */}

          <h2 className="text-center text-3xl font-medium uppercase md:text-5xl lg:text-6xl tracking-[4px]">
            Children and Sports
          </h2>

          {/* IMAGE 1 */}

          <div
            className={`
                w-full max-w-2xl overflow-hidden
                transition-all duration-700
                ${step === 0 ? "my-2 opacity-100" : "h-0 opacity-0"}
                `}
          >
            {step === 0 && (
              <img
                src={sections[0].image}
                alt={sections[0].title}
                className="aspect-4/3 w-full object-cover"
              />
            )}
          </div>

          {/* HEADING 2 */}

          <h2 className="text-center text-3xl font-medium uppercase md:text-5xl lg:text-6xl tracking-[4px]">
            Community Healthcare
          </h2>

          {/* IMAGE 2 */}

          <div
            className={`
                w-full max-w-2xl overflow-hidden
                transition-all duration-700
                ${step === 1 ? "my-2 opacity-100" : "h-0 opacity-0"}
                `}
          >
            {step === 1 && (
              <img
                src={sections[1].image}
                alt={sections[1].title}
                className="aspect-4/3 w-full object-cover"
              />
            )}
          </div>

          {/* HEADING 3 */}

          <h2 className="text-center text-3xl font-medium uppercase md:text-5xl lg:text-6xl tracking-[4px]">
            Support and Self-Reliance
          </h2>

          {/* IMAGE 3 */}

          <div
            className={`
                w-full max-w-2xl overflow-hidden
                transition-all duration-700
                ${step === 2 ? "my-2 opacity-100" : "h-0 opacity-0"}
                `}
          >
            {step === 2 && (
              <img
                src={sections[2].image}
                alt={sections[2].title}
                className="aspect-4/3 w-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
