import React from "react";
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaYoutubeSquare } from '@react-icons/all-files/fa/FaYoutubeSquare';

import "../../Styles/Footer.css";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <div className="social-links">
          <a href="/"><FaEnvelope size="50"/></a>
          <a href="/"><FaInstagram size="50"/></a>
          <a href="/"><FaLinkedin size="50"/></a>
          <a href="/"><FaYoutubeSquare size="50"/></a>
      </div>
      <div className="footer-text-1">Sampark, Shaastra 2022 &copy; All Rigths Reserved</div>
      <div className="footer-text-2">DESINED BY WEBOPS TEAM, SHAASTRA 2022</div>
    </div>
  );
};

export default Footer;
