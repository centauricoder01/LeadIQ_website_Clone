import React from "react";
import "./TypingCSS.css";

export default function TypingEffect() {
  return (
    <div className="wrapper">
      <div className="static-txt"></div>
      <ul className="dynamic-txts">
        <li>
          <span>Personalize cold outreach.</span>
        </li>
        <li>
          <span>Build sales pipeline by prospecting smarter.</span>
        </li>
        <li>
          <span>Track sales triggers.</span>
        </li>
        <li>
          <span>Find prospect data.</span>
        </li>
      </ul>
    </div>
  );
}
