import React from "react";

function Partners() {
  return (
    <div className="mb-20">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 uppercase text-center">
        Our Partners
      </h1>
      <div className="grid grid-rows-1 grid-cols-2 md:grid-rows-1 md:grid-cols-2 lg:place-items-center lg:justify-self-center lg:gap-80">
        <img src="src/assets/Keventer logo.png" alt="" style={{width:"250px"}}/>
        <img src="src/assets/deepakIndustriesLogo.png 2x" alt="" style={{width:"250px"}}/>
      </div>
    </div>
  );
}

export default Partners;
