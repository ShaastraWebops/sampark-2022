import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsappSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

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
          <FaInstagram size={window.innerWidth >= 600 ? "45" : "30"} />
        </a>
        <a href="http://localhost:3000" target="_blank" rel="noreferrer">
          <FaLinkedin size={window.innerWidth >= 600 ? "45" : "30"} />
        </a>
        <a
          href="https://www.youtube.com/c/iitmshaastra"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutubeSquare size={window.innerWidth >= 600 ? "45" : "30"} />
        </a>
        <a
          href="https://www.facebook.com/Shaastra"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook size={window.innerWidth >= 600 ? "45" : "30"} />
        </a>
      </div>
      <div className="footer-text-1">
        Sampark, Shaastra 2022 &copy; All Rigths Reserved
      </div>
      <div className="footer-divider"></div>
      <div className="footer-text-2">DESINED BY,</div>
      <div className="team-members-list">
        {webOpsTeam.map((member) => (
          <div className="team-member">
            <div>{member.name}</div>
            <a
              href={`http://wa.me/+91${parseInt(member.number)}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsappSquare color="green"/>
              &nbsp;+91&nbsp;{member.number.slice(0,5)}&nbsp;{member.number.slice(5,10)}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
