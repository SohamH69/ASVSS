// InfoCard.jsx
import DonateBtn from "../ui/DonateBtn";
import CountUp from "../ui/CountUp";

export default function InfoCard({ image, title, amountRaised, donors }) {
  return (
    <div className="group relative overflow-hidden bg-white shadow-md transition-transform duration-300 hover:shadow-lg md:h-120 lg:h-94">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Content */}
      <div className="p-4 text-left">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>

        {/* Fixed-height container for stats/button */}
        <div className="h-10 flex items-center justify-evenly text-sm md:flex-col md:gap-2 lg:relative">
          {/* Money & donors (visible by default, hidden on hover) */}
          <div className=" w-full items-center justify-between group-hover:opacity-0 transition-opacity duration-300 inset-0 lg:absolute lg:flex">
            <p className="font-bold text-black text-xl">
              ₹ {amountRaised}{" "}
              <span className="font-normal text-gray-600 text-sm">Raised</span>
            </p>
            <p className="text-gray-600 flex items-center gap-1">
              <span>❤️</span>{" "}
              <CountUp
                from={0}
                to={donors}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                delay={0}
              />
               Donors
            </p>
          </div>

          {/* Donate button (hidden by default, visible on hover) */}
          {/*flex w-full justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0*/}
          <div className="lg:flex lg:w-full lg:justify-center lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 lg:absolute lg:inset-0">
            {/* <DonateBtn bgcolor="black" txtcolor="white" /> */}
            <button className="bg-black text-white text-xl w-full">Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
}
