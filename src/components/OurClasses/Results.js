/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Output from "./Output";
import ClassOneBg from "../Image/classOne.JPG";
import ClassTwoBg from "../Image/classTwo.jpg";
import ClassThreeBg from "../Image/classThree.jpg";
import ClassFourBg from "../Image/classFour.jpg";

const Results = ({ training }) => (
  <div css={styles} className="results">
    {training === "FirstClass" && (
      <Output
        title="The Art Of Problem Solving"
        info="From July 5th to July 5th, for five weeks, 4 days a week, Mon to Thu, from 2PM to 6PM. UMT-
        ACM organized a problem-solving summer camp for students in grades 6 to 10. The session
        
        was led by our respected patron and 6 assistant instructors (UMT-ACM volunteers). It was a no-
        boundaries workshop that included physics, electronics, mathematics, woodworking, plumbing,
        
        and some programming."
      
        
        img={ClassOneBg}
      />
    )}

    {training === "SecondClass" && (
      <Output
        title="Programming Robots"
        info="UMT ACM launched its first-ever PROGRAMMING COMPETITION SERIES on
        Wednesday, November 17th.
        The contests taught students not only to become competent problem solvers, but also to compete
        in competitions such as ICPC and others. Participation in ACM ICPC and other global contests
        are wonderful way to be noticed by Apple, Facebook, Google, IBM, and other software
        industries. As they are continuously monitoring these sorts of events."
        img={ClassTwoBg}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="The Professionals Seminar"
        info="UMT-ACM was pleased to provide an intriguing seminar for computer students. During this
        session, industry specialists educated students on current technologies and skills in demand in the
        market, including the following technologies:"
        info2="Web Development"
        info3="Android Technology"
        info4="Cyber Security"
        info5="Quality Assurance"
        info6="Project Management"
        img={ClassThreeBg}
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="AWS Seminar (Amazon Web Services)"
        info="On November 25th, 2021, UMT ACM hosted another fantastic seminar on AWS (Amazon Web
          Services). The goal of the seminar was to introduce students to the world of AWS cloud
          computing, which has been a pioneer in providing cloud services since 2006. The seminar was
          led by a professional Software Architect with over 20 years of diverse experience in the field of
          Software Engineering."
        img={ClassFourBg}
      />
    )}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  .test {
    width: 100%;
    height: 400px;
    background: red;
    &.two {
      background: blue;
    }
  }
  @media(max-width: 900px){
    max-width: 590px;
    padding: 30px 0 0 0;
  }
  @media (min-width: 901px) and (max-width: 1226px){
    max-width: 62%;
  }
`;

export default Results;
