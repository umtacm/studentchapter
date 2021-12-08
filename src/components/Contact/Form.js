/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";
import ContactBg from "../Image/contactBg.jpg";

const Form = ({ text }) => (
  <div css={styles} className="formContainer">
    <form>
      
      <input type="text" placeholder="Your Name*" />
      <input type="text" placeholder="Your Email*" />
      <input type="text" placeholder="Subject" />
      <textarea cols="30" rows="10" placeholder="Message"></textarea>
      <Button text="SEND MESSAGE" />
    </form>
  </div>
);

const styles = css`
  width: 100%;
  padding: 80px;
  min-height: 60vh;
  height:140vh;
  display: flex;
  background: url('${ContactBg}') no-repeat center/cover;

  form {
    position:relative;
    bottom:70px;
    margin:auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 40%;
    background: #fff;
    padding: 40px;
    border-radius: 6px;
    input,
    textarea {
      margin-bottom: 20px;
      padding: 12px;
      border-radius:5px;
      border: 1px solid #ddd;
      outline: none;
      color: #7a7a7a;
      &::placeholder {
        color: #7a7a7a;
      }
    }
    input {
      width: 47%;
      &:nth-child(3) {
        width: 100%;
      }
    }
    textarea {
      width: 100%;
    }
  }
  @media (max-width: 1200px) {
    padding: 80px 30px;
    form {
      max-width: 900px;
      width:100%;
      padding:40px;
    }
  }
`;

export default Form;
