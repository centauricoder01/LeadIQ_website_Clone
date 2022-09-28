import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div
        style={{
          border: "2px solid red",
          width: "90%",
          margin: "auto",
          marginTop: "4rem",
          display: "flex",
        }}
      >
        <Slider {...settings}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <img
                src="https://assets.website-files.com/60819f9be381394642b5659e/62fbc8535844f63b0bb5f6ab_zukoski-walkme-p-500.png"
                alt="man"
              />
            </div>
            <div>
              <img
                src="https://assets.website-files.com/60819f9be381394642b5659e/6081b633c9bc20456cf9deed_leadiq-walkme-logo.svg"
                alt="logo"
              />
              <h2>
                Without LeadIQ, our outbound team’s workflow would be disjointed
                and time consuming.
              </h2>
              <div>
                <div>
                  <h3>Aaron Zukoski</h3>
                  <p>Director of business development</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
