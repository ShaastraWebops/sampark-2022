import React from "react";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaWhatsappSquare } from "@react-icons/all-files/fa/FaWhatsappSquare";
import "../../Styles/ContactCard.css";

interface Props {
  name: string;
  email: string;
  number: string;
}

const ContactCard = (props: Props) => {
  return (
    <div className="contact-card">
      <div className="contact-name">{props.name}</div>
      <a href={`mailto:${props.email}`}>
        <div className="contact-email">
          <FaEnvelope /> &nbsp; {props.email}
        </div>
      </a>
      <a href={`http://wa.me/+91${props.number}`}>
        <div className="contact-number">
          <FaWhatsappSquare />
          &nbsp; {props.number}
        </div>
      </a>
    </div>
  );
};

export default ContactCard;
