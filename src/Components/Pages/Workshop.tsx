import React from "react";
import { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { useGetWorkshopQuery, UserRole } from "../../generated/graphql";
import "../../Styles/Workshop.css";
import AuthContext from "../../Utils/contexts";
import AdminWorkshop from "../Cards/AdminWorkshop";
import RegisterButton from "../Cards/RegisterButton";
import Navbar from "../Shared/Navbar";
import Title from "../Shared/Title";
import { converter } from "../Form/WorkshopForm";
import Popup from "../Cards/Popup";
import Loader from "../Shared/Loader";
import moment from "moment";

interface Props {}

const Workshop = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const { role } = useContext(AuthContext)!;
  const history = useHistory();
  const { data, loading, error } = useGetWorkshopQuery({
    variables: {
      workshopId: id,
    },
  });

  const currentTime = Date.now();
  const currentEpochTime = new Date(currentTime).getTime();
  const isRegistrationClosed =
    currentEpochTime > parseInt(data?.getWorkshop.registrationCloseTime!);

  if (loading) return <Loader />;
  if (error)
    return (
      <Popup
        message={"Some Error Occured"}
        close={() => history.push("/")}
        popupType={"ERROR"}
      />
    );
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
            <RegisterButton
              className="register-button"
              id={data?.getWorkshop.id!}
              isClosed={isRegistrationClosed}
            />
          )}
          <div className="workshop-date">
            <div>DATE</div>
            <div
              style={{
                marginTop: "5px",
                fontWeight: "normal",
              }}
            >
              31st OCTOBER
            </div>
          </div>
          <div className="workshop-deadline">
            <div>REGISTRATION DEADLINE</div>
            <div
              style={{
                marginTop: "5px",
                fontWeight: "normal",
              }}
            >
              {moment(
                parseInt(data?.getWorkshop.registrationCloseTime!)
              ).format("MMMM Do YYYY, h:mm a")}
            </div>
          </div>
        </div>
        <div className="workshop-details-2">
          <div className="workshop-contacts-list">
            <div className="workshop-contacts-list-heading">CONTACT US</div>
            {data?.getWorkshop.contact.split(" AND ").map((contact) => {
              const parsedContact = JSON.parse(contact);
              return (
                <div className="workshop-contact">
                  <div style={{ textAlign: "start" }}>
                    {parsedContact.name} :
                  </div>
                  <a
                    href={`mailto:${parsedContact.email}`}
                    className="workshop-contact-email"
                  >
                    <div>&nbsp;{parsedContact.email}</div>
                  </a>
                  <a
                    href={`http://wa.me/+91${parsedContact.number}`}
                    className="workshop-contact-number"
                  >
                    <div>&nbsp;{parsedContact.number}</div>
                  </a>
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
