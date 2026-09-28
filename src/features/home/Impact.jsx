import React from "react";
import CountUp from "../../components/ui/CountUp";

function Impact() {
  return (
    <section className="-translate-y-10 lg:mb-20 lg:mt-20 scroll-mt-24" id="impact">
      <p className="text-4xl md:text-3xl font-bold mb-4 uppercase text-center">OUR IMPACT</p>
      <div className="uppercase">
        

      </div>
       <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-4xl mx-auto p-4 lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:max-w-7xl lg:w-full lg:mx-auto lg:gap-16">
      <div className="p-6 flex items-center justify-center min-h-37.5">
        <div>
            <div className="font-semibold text-4xl md:text-4xl">
                <CountUp
                from={0}
                to={5000}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                delay={0}
                />+
            </div>
            <p className="text-2xl md:text-3xl">Children reached</p>
        </div>
      </div>
      <div className="p-6 flex items-center justify-center min-h-37.5">
        <div>
            <div className="font-semibold text-4xl md:text-3xl">
                <CountUp
                from={0}
                to={200}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                delay={0}
                />+
            </div>
            <p className="text-2xl md:text-3xl">Women trained</p>
        </div>
      </div>
      <div className="p-6 flex items-center justify-center min-h-37.5">
        <div>
            <div className="font-semibold text-4xl md:text-3xl">
                <CountUp
                from={0}
                to={10}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                delay={0}
                />K+
            </div>
            <p className="text-2xl md:text-3xl">Saplings planted</p>
        </div>
      </div>
      <div className="p-6 flex items-center justify-center min-h-37.5">
        <div>
            <div className="font-semibold text-4xl md:text-3xl">
                <CountUp
                from={0}
                to={3000}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                delay={0}
                />+
            </div>
            <p className="text-2xl md:text-3xl">Patients treated</p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Impact;
