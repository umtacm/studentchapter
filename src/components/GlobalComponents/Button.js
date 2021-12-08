/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Button = ({ text }) => (
  <a css={styles} href="#/" className="btn">
    {text}
    

  </a>
);

const styles = css`
  text-decoration: none;
  display: inline-block;
  background:  #3474eb;
  border-radius:5px;
  color: #fff;
  font-size: 14px;
  padding: 12px 14px;
  transition: background 500ms ease-in-out;
  &:hover {
    background: #2b5d9e;
    
  }
`;

export default Button;
