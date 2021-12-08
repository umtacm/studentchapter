/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Container from "../GlobalComponents/Container";
import Socials from "../Trainers/Socials";

import Form from "./Form";

const Contact = () => (
  <section css={styles} className="contact" id="contact">
    <p>
      Do you have any queris? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours.
      </p>
    <Container>
    
      <Form />
      
    </Container>

    <div css={styles} className="contact-icons">
    <i className="fab fa-facebook-f"></i>
    <i className="fab fa-twitter"></i>
    <i className="fab fa-linkedin-in"></i>
    <i className="fab fa-behance"></i>
     </div>
  
    <footer>
      <p>
       UMT-ACM - Designed by {""}
        <a  target="_blank">
          alisyedali000
        </a>
      </p>
    </footer>
  </section>
);

const styles = css`
  width: 100%;
  .container {
    max-width: 100%;
    display: flex;
  }
 

  p{
    text-align:center;
    position:relative;
    top:70px;
    color:white;
    font-size:18px;
    margin-bottom:20px;

  }
  .contact-icons{
    i{
      margin:20px;
      color:white;
      font-size:24px;
    }
    text-align:center;
    bottom:100px;
    position:relative;
   
  }
  footer {
    text-align: center;
    padding: 36px 0;
    p {
      font-size: 14px;
      color: #232d39;
      a {
        text-decoration: none;
        color: #ed563b;
        font-weight: 500;
        &:hover {
          color: #ed563b;
        }
      }
    }
  }
 
  @media(max-width: 1200px) {
    .container{
      flex-direction: column-reverse;
      align-items: center;
    }
  }
`;

export default Contact;
