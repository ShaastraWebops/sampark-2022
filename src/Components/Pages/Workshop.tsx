import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import { useGetWorkshopQuery, UserRole } from "../../generated/graphql";
import "../../Styles/Workshop.css";
import AuthContext from "../../Utils/contexts";
import AdminWorkshop from "../Cards/AdminWorkshop";
import Register from "../Cards/Register";
import Navbar from "../Shared/Navbar";
import Title from "../Shared/Title";
import { converter } from "../Form/WorkshopForm";

interface Props {}

const Workshop = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const { role } = useContext(AuthContext)!;
  const { data, loading, error } = useGetWorkshopQuery({
    variables: {
      workshopId: id,
    },
  });

  const currentTime = Date.now();
  const currentEpochTime = new Date(currentTime).getTime();
  const isRegistrationClosed =
    currentEpochTime > parseInt(data?.getWorkshop.registrationCloseTime!);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="workshop" id="top">
      <Navbar />
      <Title title={data?.getWorkshop.title!} isHomePage={false} />
      {role === UserRole.Admin && (
        <AdminWorkshop title={data?.getWorkshop.title!} />
      )}
      <div className="workshop-content">
        <div className="workshop-description">
          {parse(converter.makeHtml(data?.getWorkshop.description!))}
        </div>
        <div className="workshop-details-1">
          <img
            className="workshop-details-image"
            src={data?.getWorkshop.pic}
            alt="Workshop"
          />
          {role === UserRole.User && (
            <Register
              className="register-button"
              id={data?.getWorkshop.id!}
              isClosed={isRegistrationClosed}
            />
          )}
        </div>
        <div className="workshop-details-2">
          <div className="workshop-date">
            <div>DATE :</div>
            <div
              style={{
                textAlign: "end",
                marginTop: "3px",
                fontWeight: "normal",
              }}
            >
              {data?.getWorkshop.workshopDate}
            </div>
          </div>
          <div className="workshop-deadline">
            <div>REGISTRATION DEADLINE :</div>
            <div
              style={{
                textAlign: "end",
                marginTop: "3px",
                fontWeight: "normal",
              }}
            >
              {new Date(
                parseInt(data?.getWorkshop.registrationCloseTime!)
              ).toLocaleString()}
            </div>
          </div>
          <div className="workshop-contacts-list">
            <div className="workshop-contacts-list-heading">CONTACT US</div>
            {data?.getWorkshop.contact.split(" AND ").map((contact) => {
              const parsedContact = JSON.parse(contact);
              return (
                <div className="workshop-contact">
                  <div>{parsedContact.name} :</div>
                  <div style={{ textAlign: "end", fontWeight: "normal" }}>
                    {parsedContact.email}
                  </div>
                  <div style={{ textAlign: "end", fontWeight: "normal" }}>
                    {parsedContact.number}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
