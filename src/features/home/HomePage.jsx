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
import DonateSection from "../../components/DonateSection";
import CSRPartnershipSection from "../../components/CSRPartnershipSection";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <section className="max-w-6xl mx-auto px-6 py-12 text-center" id="about-us">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
          Rooted in Anandapur. <br></br>
          <span className="text-[#e85d04] text-2xl md:text-3xl">Working for all.</span>
        </h1>
        <p className="text-sm mx-auto md:text-xl text-gray-700 text-center">
          Anandapur Swami Vivekananda Seva Samity was established on Swami
          Vivekananda's 145th birth anniversary — a deliberate choice. We
          believe, as he did, that service to people is service to the divine.
          Over eighteen years, that belief has grown into twelve active
          programmes touching thousands of lives across Kolkata's most
          underserved pockets. <br></br><br></br>We are not a distant organisation managing
          beneficiaries. We are neighbours, coaches, trainers and health workers
          — working alongside the communities we serve, not above them.
        </p>
      </section>
      <SectionCard />
      <WhyAVSSV />
      <div id="stories-updates">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-center translate-y-20 relative z-10">
          Stories & Updates
        </h1>
        <StackedScrollCards />
      </div>
      {/* <WhatWeDo /> */}
      <Impact />
      <CSRPartnershipSection />
      <Partners />
      <Testimonials />
      <DonateSection />
    </div>
  );
}

export default HomePage;
