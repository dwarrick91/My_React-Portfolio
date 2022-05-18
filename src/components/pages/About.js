import React from 'react';
import '../../styles/About.css'
export default function About() {
  
  return (
    <div >
      <h1>About Me</h1>
      <p  className='col-12 col-md-6 about'>
      Hello my name is David Warrick. I have a wife and three beautiful children. I
            most recently made a change to become a web-developer, which better suits my interests. I am currently
            studying
            Full Stack Web Development, through the University of Pennsylvania. Before I started this new journey I
            obtained
            bachelor's degree from Shippensburg University in Accounting, which
            I obtained in 2013. comprised on this webpage are links to some of my best work, as well as ways to contact
            me on
            the bottom of the
            page.
      </p>
      <img src={require('../../assets/images/Linkedin.jpg')} alt="David Warrick" ></img>
    </div>
    
  );
}
