/* eslint-disable no-unused-vars */
import React from "react";
import Login from "../components/Login";
import SignUpArt from "../components/SignUpArt";

const Page2 = () => {
  return (
    <div style={{ display: "flex", width:"100%",height:"100%" }}>
      <div style={{ width: "55%", position: "relative",height:"100%" }}>
        <SignUpArt />
      </div>
      <div style={{ width:"45%",height:"100%" }}>
        <Login />
      </div>
    </div>
  );
};

export default Page2;
