import React from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";

import ImageSlider from "../components/ImageSlider";

import image1 from "../assets/slide_1.JPG";
import image2 from "../assets/slide_2.JPG";
import image3 from "../assets/slide_3.jpg";
import image4 from "../assets/slide_4.JPG";
import image5 from "../assets/slide_5.jpg";
import image6 from "../assets/slide_6.jpg";
import image7 from "../assets/slide_7.jpg";

const Application = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <ImageSlider images={[image1, image2, image3, image4, image5, image6,image7]}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
            }}
          >
           
          </div>
        </ImageSlider>
      </div>
    </>
  );
};

export default Application;
