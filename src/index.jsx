import React from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";

import ImageSlider from "../components/ImageSlider";

import image1 from "../assets/slide_1.jpeg";
import image2 from "../assets/slide_2.jpeg";
import image3 from "../assets/slide_3.jpeg";
import image4 from "../assets/slide_4.jpeg";
import image5 from "../assets/slide_5.jpeg";
import image6 from "../assets/slide_6.jpeg";

const Islider = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <ImageSlider images={[image1, image2, image3, image4, image5, image6]}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <h1>React.js Image Slider</h1>
            <p>Nulla vitae elit libero, a pharetra augue.</p>
          </div>
        </ImageSlider>
      </div>
    </>
  );
};

export default Islider;
