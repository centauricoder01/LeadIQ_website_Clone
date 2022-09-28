import React from "react";
import { Routes, Route } from "react-router-dom";
import Demo from "../Book a Demo/Demo";
import Home from "../Home/Home";
import Platform from "../Platform/Platform";
import Priceing from "../Pricing/Priceing";
import Resources from "../Resources/Resources";
import Success from "../Success Stories/Success";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/success" element={<Success />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/pricing" element={<Priceing />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </>
  );
}
