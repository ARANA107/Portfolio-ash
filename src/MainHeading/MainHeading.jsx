import React from "react";
import { mainHeading } from "../constants";
const MainHeading = () => {
  return (
    <>
      <p className="white-text ">Hey there!</p>
      <h1
        className="white-text"
        style={{
          fontFamily: "Satoshi, sans-serif",
          fontWeight: 700,
          lineHeight: "70px",
        }}
      >
        {mainHeading}
      </h1>
      <div className="d-flex justify-content-center justify-content-md-start">
        <div className="blinking-circle" style={{ marginRight: "10px" }} />
        <p className="white-text" style={{ margin: "0" }}>
          Available to connect (NY, USA)
        </p>
      </div>
    </>
  );
};

export default MainHeading;
