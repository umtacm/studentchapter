import React from 'react';
import './Modal.css';

import {useSpring, animated} from 'react-spring';
import JoiningForm from "./JoiningForm";


const Modal = (props) => {
  const propss = useSpring({opacity: 1, from: {opacity: 0}})
  const { closeModal } = props;
  const closeicon = () => (
  
    <i className='m-icon' className='fas fa-times'
    onClick={closeModal}
    style={{
    
      
    }}
    />

  );

  return (
   
    <div className="overlay">
    
      <div className="content">
      { closeicon() }
      {props.children}
    
        <JoiningForm />
      </div>
      
  
    </div>
   
  );
};


export default Modal;

