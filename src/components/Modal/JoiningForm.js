/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";


const JoiningForm = ({ text }) => (
  <div css={styles} className="formContainer">
    <form>
        <h3>Please enter the following details!</h3>
      <input type="text" placeholder="Your Name*" />
      <input type="text" placeholder="Your Email*" />
      <input type="text" placeholder="Your Student ID*" />
      <input type="text" placeholder="Your Department*" />
      <input type="text" placeholder="Your Phone#*" />
      <input type="text" placeholder="Your Batch/Semester*" />
     
      <textarea  placeholder="Your Batch/Semester*" rows="7" />
     
      
      
      <Button text="SEND MESSAGE" />
    </form>
  </div>
);

const styles = css`
  width: 100%;
  padding:20px;
  height: auto;
  display: flex;

  form {
    margin: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    background: #fff;
    
    border-radius: 6px;
    h3{
        margin:20px;
        
    }
    input,
    textarea {
        border-radius:5px;
      margin-bottom: 20px;
      padding: 8px;
      border: 1px solid #ddd;
      outline: none;
      color: #7a7a7a;
      &::placeholder {
        color: #7a7a7a;
      }
    }
    input {
      width: 47%;
      &:nth-child(2){
        width: 100%;
      }
    }
    textarea {
      width: 100%;
    }
  }
  @media (max-width: 1200px) {
    
    form {
      max-width: 900px;
      width:100%;
    }
  }
`;

export default JoiningForm;
