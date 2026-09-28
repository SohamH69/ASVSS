import DonatePage from "../DonateSection";
import { Link } from "react-router-dom";

function DonateBtn({bgcolor = "white", txtcolor = "black"}) {
  return (
    <a href="#contact">
      <button
        style={{
          backgroundColor: bgcolor,
          color: txtcolor,
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Donate
      </button>
    </a>
  );
}

export default DonateBtn;
