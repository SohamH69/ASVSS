import { useState, useEffect } from "react";

function DonateBtn({bgcolor = "white", txtcolor = "black"}) {
  return (
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
  );
}

export default DonateBtn;
