/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import TrainerOneBg from "../Image/trainerOne.jpg";
import TrainerTwoBg from "../Image/trainerTwo.jpg";
import TrainerThreeBg from "../Image/trainerThree.jpg";
import acmlogo from "../Image/acm-logo.png"
import umtacmlogo from "../Image/logoumtacm.png"
import patron from "../Image/patron.jpg"
import Socials from "./Socials";

const Trainers = () => (
  <section css={styles} className="trainers" id="trainers">
    <h2>
       <span>ABOUT </span>CHAPTER
    </h2>
    <Icon />
    <h3 className="about-headings">
      ACM (Association for Computing & Machinery)
      </h3><br/>
      <img src={acmlogo} className="logos"/>
    <p>
    The Association for Computing Machinery is a US-based international learned society for computing. It was founded in 1947 and is the world's largest scientific and educational computing society. The ACM is a non-profit professional membership group, claiming nearly 100,000 student and professional members as of 2019.
      <br />
      ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life‐long learning, career development, and professional networking.
    </p>
    <h3 className="about-headings">
      UMT-ACM Student Chapter
      </h3><br/>
      <img src={umtacmlogo} className="logos"/>
      <p>
      As ACM is an international computing society dedicated to the advancement and development of all aspects of information technology. UMT has started ACM Student Chapter that not only aims towards the advancement of computer science culture and technology but also aims to train our members into computer science personnel who are ready to execute innovative ideas in order to improve their learning and knowledge and to apply those skills to create a better future. Our members’ qualifications range from technical expertise to gaming warriors and from developers to ethical hackers. We offer workshops for you!
     <br />
     Joining hands with the UMT ACM Student Chapter would not only make you a part of the ‘within-premises’ society but also make you a proud member to one of the largest existing computer science society. The IT adventures are much more thrilling than one can imagine and therefore, UMT ACM emphasizes on providing the best ways to keep the thrills coming!
      </p><br />

      <h3 className="about-headings">
        PATRON UMT-ACM
        </h3><br/>
        <img src={patron} className="logos"/>
        <p><span>Dr. Khawaja Muhammad Umar Suleman</span><br/>
        Assistant Professor<br/>
        School of Systems and Technology UMT<br/>
        Department of Software Engineering<br/><br/>
        A PhD in AI and Robot Learning from LUMS, BS and MS from FAST in AI-Robotics, rigorous experience of 17 years in both software industry and academics, puts him in a unique position to deliver innovation.<br/>
        Besides academics, he has founded three software companies during his career, favoring technical roles and RnD over management. He is on the board of Automatrix specializing in AI and statistics based industrial IOT products and advice other ICT companies on technical matters ranging from embedded systems to computer vision. He was incharge of software development at MetaApp which was part of acquisition by Citrix Systems.
        </p>
      
    <Container>
    
     
    
     <TrainerCard
        title="CHAIR"
        name="Faisal Usman Sattar"
        desc="BS Software Engineering"
        batch="Batch : S2017"
        img={TrainerTwoBg}
      />
     
      
      
     
      <TrainerCard
        title="VICE CHAIR"
        name="Syed Ahmad Muhammad Ali"
        desc="BS Software Engineering"
        batch="Batch : F2018"
        img={TrainerTwoBg}
        />

        <TrainerCard
        title="GENERAL S."
        name="Muhammad Shayan"
        desc="BS Software Engineering"
        batch="Batch : F2020"
        img={TrainerThreeBg}
      
      />
      </Container>
      <Container>
     
      
 
      <TrainerCard
        title="CHAIR TRAININGS"
        name="Muhammad Sameer"
        desc="BS Software Engineering"
        batch="Batch : F2019"
     
        img={TrainerTwoBg}
      />
   
    <TrainerCard
        title="CHAIR EVENTS"
        name="Maaz Ahmad"
        desc="BS Software Engineering"
        batch="Batch : F2020"
        img={TrainerThreeBg}
      />
          <TrainerCard
        title="CHAIR COMPETITIONS"
        name="Muhammad Jawad"
        desc="BS Software Engineering"
        batch="Batch : F2020"
        img={TrainerThreeBg}
      />
          <TrainerCard
        title="TREASURER"
        name="Adil Zahoor"
        desc="BS Software Engineering"
        batch="Batch : F2018"
        img={TrainerThreeBg}
      />
      

    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
 
  .logos{
    position:relative;
    float:right;
    width:20%;  
    margin:30px;
    right:50px;
    border-radius:5px;
    
    
  }
  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #3474eb;
    }
    
  }
  > p {
    position:relative;
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
    width:50%;
    margin:0 auto;
    text-align:left;
    right:10%;
    margin-bottom:20px;
    span{
      font-weight:bold;
      color:black;
    }
  }
  .about-headings{
    
    color: #3474eb;
    text-align:center;
    font-size:20px;
    margin-top:45px;
    
  
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 0 0;
    
  }
  
  @media (max-width: 650px) {
    > p {
      width:100%;

      padding:0px 20px;
    
    }
  }
  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
    .logos{
      float:none;
      bottom:0px;
      min-width:40%;
      right:0;
    }
    > p{
      margin:none;
      right:0;
    }
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default Trainers;
