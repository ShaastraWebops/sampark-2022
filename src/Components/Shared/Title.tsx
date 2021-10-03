import React from "react";

import "../../Styles/Title.css";

interface Props {
  title: string;
}

const Title = (props: Props) => {
  return (
    <div className="title">
      <div className="left-lines">
        <div className="start-end-line"/>
        <div className="middle-line"/>
        <div className="start-end-line"/>
      </div>
      <div className="title-text">{props.title}</div>
      <div className="right-lines">
        <div className="start-end-line"/>
        <div className="middle-line"/>
        <div className="start-end-line"/>
      </div>
    </div>
  );
};

export default Title;
