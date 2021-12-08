/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import logo from "../Image/logoumtacm.png";

const Logo = () => (
  <h2 css={styles}>
    UMT <span>ACM</span>
    <img src={logo}/>
  </h2>
);

const styles = css`
img{
  position:relative;
  width:60px;
  margin-left:15px;
  

  margin-bottom:-25px;
  bottom:10px;

  
}
  color: #fff;
  font-size: 30px;
  font-weight: 900;
  line-height: 1;
  cursor: pointer;
  
 
  span {
    color: #3474eb;
   
  }
`;

export default Logo;
