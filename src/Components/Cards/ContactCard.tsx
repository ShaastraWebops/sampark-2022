import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import "../../Styles/ContactCard.css";

interface Props {
  name: string;
  number: string;
}

const ContactCard = (props: Props) => {
  return (
    <div className="contact-card">
      <div className="contact-name">{props.name}</div>
      <a
        href={`http://wa.me/+91${props.number}`}
        target="_blank"
        rel="noreferrer"
      >
        <div className="contact-number">
          <FaWhatsappSquare color="green" />
          &nbsp;+91&nbsp;{props.number.slice(0, 5)}&nbsp;
          {props.number.slice(5, 10)}
        </div>
      </a>
    </div>
  );
};

export default ContactCard;
