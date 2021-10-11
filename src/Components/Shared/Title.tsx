import React from "react";

import "../../Styles/Title.css";

interface Props {
  title: string;
  isHomePage: boolean;
}

const Title = (props: Props) => {
  return (
    <div className="title">
      <div className="left-lines">
        <div
          className={
            props.isHomePage ? "start-end-line" : "start-end-line-blue"
          }
        />
        <div className="middle-line" />
        <div
          className={
            props.isHomePage ? "start-end-line" : "start-end-line-blue"
          }
        />
      </div>
      <div className={props.isHomePage ? "title-text" : "title-text-white"}>
        {props.title}
      </div>
      <div className="right-lines">
        <div
          className={
            props.isHomePage ? "start-end-line" : "start-end-line-blue"
          }
        />
        <div className="middle-line" />
        <div
          className={
            props.isHomePage ? "start-end-line" : "start-end-line-blue"
          }
        />
      </div>
    </div>
  );
};

export default Title;
