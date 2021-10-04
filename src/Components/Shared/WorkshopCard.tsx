import React from "react";
import { useHistory } from "react-router-dom";
import "../../Styles/WorkshopCard.css";

interface Props {
  id: string;
  title: string;
  date: string;
  image: string;
}

const WorkshopCard = (props: Props) => {
  const history = useHistory();
  return (
    <div className="workshop-card">
      <img src={props.image} alt="Workshop" />
      <div className="workshop-heading">
        <p>{props.title}</p>
        <p>{props.date}</p>
      </div>
      <div className="workshop-button">
        <button onClick={() => history.replace(`/workshops/${props.id}`)}>
          VIEW DETAILS
        </button>
        <button>REGISTER</button>
      </div>
    </div>
  );
};

export default WorkshopCard;
