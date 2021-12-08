/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Button from "../GlobalComponents/Button";
import GymOverlayBg from "../Image/gymOverlayBg.jpg";
import React,{ useEffect, useState } from "react";

import Modal from '../Modal/Modal';



const Member = ({ text }) => {
  const [status, setStatus] = useState(false);
  return(
  
  <section css={styles} className="member">
    <h2>
      DON’T <span>THINK</span>, MAKE IT <span>HAPPEN</span>!
    </h2>
    <p>
    UMT ACM Student Chapter strives to make

its members not only members of the 'on-
campus' society,<br/> but also members of one of

the largest existing computer science
societies.<br/> UMT ACM's IT experiences are
far more interesting and thrilling than one can think,<br/> as our mission is to continue giving the
greatest available platforms to our future programmers, developers, and gamers.
    </p>
    { status && (<Modal closeModal={() => setStatus(false)}> </Modal>)}
  <button type="button" className="btn" onClick={() => setStatus(true)}> BECOME A MEMBER!</button>
  </section>
);
  };
const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  background-image: linear-gradient(
    rgba(0,0,0, 0.5),
    rgba(0,0,0, 0.5)
  ),url(../Image/gymOverlayBg.jpg);
  background-size:no-repeat center/cover;


  h2 {
    color: #fff;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #3474eb;
    }
  }
  p {
    color: #fff;
    font-size: 16px;
    line-height: 1.7;
    margin: 20px 0;
  }
  @media(max-width: 850px) {
    h2{
      font-size: 30px;
    }
    p{
      padding: 0 20px;
      br{
        display: none;
      }
    }
  }
`;

export default Member;
