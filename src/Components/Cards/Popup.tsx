import React from "react";
import "../../Styles/Popup.css";

interface Props {
  message: string;
  close: any;
  popupType: "ERROR" | "SUCCESS" | "WARNING";
}

const Popup = (props: Props) => {
  let backgroundColor = "";
  if (props.popupType === "ERROR") backgroundColor = "#ff6363";
  if (props.popupType === "SUCCESS") backgroundColor = "#000272";
  if (props.popupType === "WARNING") backgroundColor = "#acbcf7";

  return (
    <div className="popup-modal">
      <div className="popup-modal-content">
        <div className="popup-modal-message">{props.message}</div>
        <button
          className="popup-modal-close-btn"
          onClick={props.close}
          style={{ backgroundColor, color: "#ffffff" }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
