import React from "react";
import CountUp from "../../components/ui/CountUp";

function Impact() {
  return (
    <section className="-translate-y-10 md:mb-20 lg:mb-20 lg:mt-20">
      <p className="text-4xl md:text-5xl font-bold mb-4 uppercase text-center">OUR IMPACT</p>
      <div className="uppercase">
        

      </div>
       <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-4xl mx-auto p-4 lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:max-w-7xl lg:w-full lg:mx-auto lg:gap-16">
      <div className="p-6 flex items-center justify-center min-h-37.5">
        <div>
            <div className="font-semibold text-4xl md:text-6xl">
                <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                delay={0}
                />+
            </div>
            <p className="text-2xl md:text-4xl">Footballers</p>
        </div>
      </div>
      <div className="p-6 flex items-center justify-center min-h-37.5">
        <div>
            <div className="font-semibold text-4xl md:text-6xl">
                <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                delay={0}
                />+
            </div>
            <p className="text-2xl md:text-4xl">Footballers</p>
        </div>
      </div>
      <div className="p-6 flex items-center justify-center min-h-37.5">
        <div>
            <div className="font-semibold text-4xl md:text-6xl">
                <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                delay={0}
                />+
            </div>
            <p className="text-2xl md:text-4xl">Footballers</p>
        </div>
      </div>
      <div className="p-6 flex items-center justify-center min-h-37.5">
        <div>
            <div className="font-semibold text-4xl md:text-6xl">
                <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                delay={0}
                />+
            </div>
            <p className="text-2xl md:text-4xl">Footballers</p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Impact;
