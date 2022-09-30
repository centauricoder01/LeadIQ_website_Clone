import React from "react";
import { Routes, Route } from "react-router-dom";
import Demo from "../Book a Demo/Demo";
import Home from "../Home/Home";
import Priceing from "../Pricing/Priceing";
import Success from "../Success Stories/Success";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />

        <Route path="/pricing" element={<Priceing />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </>
  );
}
