import React from "react";
import "./Cards.css";
export default function Cards({ value }) {
  return (
    <>
      <div className="mainbox">
        <div>
          <img src={value} alt="altimg" />
          <h2 className="htwo">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
          </h2>
          <p className="para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus, error quidem sedesse. debitis impedit aut accusamus
            aperiam. Doloremque, corrupti.
          </p>
          <a href="#" className="anchor">
            Read more about It.
          </a>
        </div>
      </div>
    </>
  );
}
