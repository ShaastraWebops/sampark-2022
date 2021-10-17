import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "../../Styles/Footer.css";
import { webOpsTeam } from "../../Data/Home";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <div className="social-links">
        <a
          href="https://www.instagram.com/shaastra_iitm/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={window.innerWidth >= 600 ? "45" : "30"} color="#000272"/>
        </a>
        <a href="http://localhost:3000" target="_blank" rel="noreferrer">
          <FaLinkedin size={window.innerWidth >= 600 ? "45" : "30"} color="#000272"/>
        </a>
        <a
          href="https://www.youtube.com/c/iitmshaastra"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutubeSquare size={window.innerWidth >= 600 ? "45" : "30"} color="#000272"/>
        </a>
        <a
          href="https://www.facebook.com/Shaastra"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook size={window.innerWidth >= 600 ? "45" : "30"} color="#000272"/>
        </a>
      </div>
      <div className="footer-text-1">
        Sampark, Shaastra 2022 &copy; All Rights Reserved
      </div>
      <div className="footer-divider"></div>
      <div className="footer-text-2">Designed by,</div>
      <div className="team-members-list">
        {webOpsTeam.map((member) => (
          <div className="team-member">
            <div>{member.name}</div>
            <a
              href={`mailto:${member.email}`}
              target="_blank"
              rel="noreferrer"
            >
              <HiMail color="#000272" size={"25"}/>
              &nbsp;{member.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
