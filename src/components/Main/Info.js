/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Button from "../GlobalComponents/Button";
import Islider from "../index";
import React,{ useEffect, useState } from "react";

import Modal from '../Modal/Modal';


const Info = () => {
  const [status, setStatus] = useState(false);

return(
  <div>
    <Islider/>
  <div css={styles} className="info">
   
    <p><span>WELCOME TO</span></p>
    <h1>
       UMT <span>ACM </span>STUDENT CHAPTER
    </h1>
    { status && (<Modal closeModal={() => setStatus(false)}> </Modal>)}
  <button type="button" className="btn" onClick={() => setStatus(true)}> BECOME A MEMBER!</button>
  </div>
  </div>
    
);
};
const styles = css`
  width: 100%;
  max-width: 900px;
  position: relative;
 margin:auto;
 bottom:400px;
 
  z-index: 2;
  text-align: center;
  color: #fff;
  p {
    span{
      color:  #3474eb;
    }
    font-size: 17px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: 1.2px;
  }
  h1 {
    
    font-size: 50px;
    line-height: 1;
    font-weight: 900;
    margin: 36px 0;
    span {
      color:  #3474eb;
    }
  }
  img{
    display: inline-block;
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 30px;
    
    color: #FFFF !important;
    border-radius: 50px;
    text-align: center;
    z-index: 99;
   
   
      color: #fff;
    
  }
  .btn {
    padding: 14px 16px;

  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 42px;
    }


}
  }
`;

export default Info;
