import React from "react";
import Navbar from "../../components/layout/Navbar";
import Banner from "./Banner";
import WhatWeDo from "./WhatWeDo";
import WhyAVSSV from "./WhyAVSSV";
import Impact from "./Impact";
import SectionCard from "./SectionCard";

import StackedScrollCards from "../../components/ui/StackedScrollCards";
import Partners from "./Partners";
import Testimonials from "./Testimonials";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">Our History</h1>
        <p className="text-lg md:text-xl text-gray-700 text-center">
          Lorem Ipsum has been the industry's standard dummy text ever since
          1966, when designers at Letraset and decades, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
      <SectionCard />
      <WhyAVSSV />
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase text-center translate-y-20 relative z-10">
          Our Stories
        </h1>
        <StackedScrollCards />
      </div>
      {/* <WhatWeDo /> */}
      <Impact />
      <Partners />
      <Testimonials />
    </div>
  );
}

export default HomePage;
