import React from 'react';
import "../styles/Aboutme.css";
import profileImage from '../images/profilepic.JPG';

const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <h1>About Me</h1>
      <div className="profile-pic">
      <img src={profileImage} alt="profile_picture" style={{ width: "200px", height: "200px" }}/>
      </div>
      <p>
      
Welcome to my portfolio! Here, you will find a showcase of my coding portfolios, demonstrating my skills in building dynamic and responsive web applications. Feel free to explore and download my resume for a detailed overview of my qualifications. If you have any inquiries or would like to discuss potential collaborations, please visit the contact page. I look forward to connecting with you!
      </p>
    </div>
  );
};

export default Aboutme;
