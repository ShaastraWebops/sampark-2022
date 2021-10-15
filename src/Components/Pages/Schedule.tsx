import React from "react";
import { schedules } from "../../Data/Schedule";
import "../../Styles/Schedule.css";
import Navbar from "../Shared/Navbar";
import Title from "../Shared/Title";

interface Props {}

const Schedule = (props: Props) => {
  return (
    <div className="schedule">
      <Navbar />
      <Title title="SCHEDULE" isHomePage={false} />
      {schedules.map((schedule, index) => (
        <div className="schedule-content">
          <div className="workshop-day">
            <div className="workshop-day-day">{schedule.day}</div>
            <div className="workshop-day-day">-</div>
            <div className="workshop-day-date">{schedule.date}</div>
          </div>
          <div>
            {schedule.schedule.map((workshop) => {
              return workshop.isBreak ? (
                <div className="workshop-break">
                  {"BREAK (" + workshop.time + ")"}
                </div>
              ) : (
                <div className="workshop-schedule">
                  <div className="workshop-schedule-name">{workshop.name}</div>
                  <div className="workshop-schedule-time">
                    {workshop.time?.toLocaleUpperCase()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
