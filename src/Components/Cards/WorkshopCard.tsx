import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserRole } from "../../generated/graphql";
import "../../Styles/WorkshopCard.css";
import AuthContext from "../../Utils/contexts";
import RegisterButton from "./RegisterButton";

interface Props {
  id: string;
  title: string;
  date: string;
  image: string;
  registrationCloseTime: string;
}

const WorkshopCard = (props: Props) => {
  const { role } = useContext(AuthContext)!;
  const history = useHistory();

  const currentTime = Date.now();
  const currentEpochTime = new Date(currentTime).getTime();
  const isRegistrationClosed =
    currentEpochTime > parseInt(props.registrationCloseTime);

  return (
    <div className="workshop-card">
      <img src={props.image} alt="Workshop" />
      <div className="workshop-heading">
        <p>{props.title}</p>
        <p style={{ fontWeight: "normal" }}>{props.date.split(". ")[1]}</p>
      </div>
      <div className="workshop-buttons">
        <button
          onClick={() => history.push(`/workshop/${props.id}`)}
          className="workshop-button"
        >
          VIEW DETAILS
        </button>
        {role === UserRole.User && (
          <RegisterButton
            id={props.id}
            className="workshop-button"
            isClosed={isRegistrationClosed}
          />
        )}
        {role === UserRole.Admin && (
          <button
            className="workshop-button"
            onClick={() => history.push(`/edit-workshop/${props.id}`)}
          >
            EDIT WORKSHOP
          </button>
        )}
      </div>
    </div>
  );
};

export default WorkshopCard;
