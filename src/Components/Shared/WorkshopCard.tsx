import React from "react";
import "../../Styles/WorkshopCard.css";

interface Props {
  id: string;
  title: string;
  date: string;
  image: string;
}

const WorkshopCard = (props: Props) => {
  return (
    <div className="workshop-card">
      <img src={props.image} />
      <div className="workshop-heading">
        <p>{props.title}</p>
        <p>{props.date}</p>
      </div>
      <div className="workshop-button">
        <button>VIEW DETAILS</button>
        <button>REGISTER</button>
      </div>
    </div>
  );
};

export default WorkshopCard;
