import React from "react";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaYoutubeSquare } from "@react-icons/all-files/fa/FaYoutubeSquare";

import "../../Styles/Footer.css";
import { webOpsTeam } from "../../Data/Home";

interface Props {}

const Footer = (props: Props) => {
  console.log(window.innerWidth);
  return (
    <div className="footer">
      <div className="social-links">
        <a href="/">
          <FaEnvelope size={window.innerWidth >= 600 ? "45" : "30"} />
        </a>
        <a href="/">
          <FaInstagram size={window.innerWidth >= 600 ? "45" : "30"} />
        </a>
        <a href="/">
          <FaLinkedin size={window.innerWidth >= 600 ? "45" : "30"} />
        </a>
        <a href="/">
          <FaYoutubeSquare size={window.innerWidth >= 600 ? "45" : "30"} />
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
            <div>{member.number}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
