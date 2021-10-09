import React from "react";
import Navbar from "../Shared/Navbar";
import Title from "../Shared/Title";
import Footer from "../Shared/Footer";
import ContactCard from "../Cards/ContactCard";
import Collage from "../../Images/collage.png";
import CSS from "../../Images/css.png";
import CPP from "../../Images/cpp.png";
import Python from "../../Images/python.png";
import JS from "../../Images/js.png";
import { contacts, description, oneLiner } from "../../Data/Home";
import "../../Styles/Home.css";
import WorkshopCard from "../Cards/WorkshopCard";
import {
  useGetWorkshopsQuery,
  useLoginMutation,
  UserRole,
} from "../../generated/graphql";
import { useContext } from "react";
import AuthContext from "../../Utils/contexts";
import Admin from "../Cards/Admin";

interface Props {}

const Home = (props: Props) => {
  const { setRole, role } = useContext(AuthContext)!;

  const [loginMutation, { data: loginData, error: loginError }] =
    useLoginMutation({
      variables: {
        loginData: {
          email: "webops@shaastra.org",
          password: "test1234",
        },
      },
    });

  if (loginData) {
    setRole(loginData.login?.role!);
    localStorage.setItem("email", loginData.login?.email!);
    localStorage.setItem("name", loginData.login?.name!);
    localStorage.setItem("role", loginData.login?.role!);
    localStorage.setItem("spID", loginData.login?.spID!);
  }

  if (loginError) {
    console.log(loginError);
  }

  const { data, loading, error } = useGetWorkshopsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home">
      <Navbar />

      {/** LANDING **/}
      <div id="home" className="landing-section">
        <div className="sampark-title">SAMPARK</div>
        <div className="sampark-title">2021</div>
        <div className="sampark-one-line">{oneLiner}</div>
        {!role && (
          <button className="home-register" onClick={() => loginMutation()}>
            REGISTER NOW
          </button>
        )}
        {role === UserRole.Admin && <Admin />}
      </div>

      {/** ABOUT US **/}
      <div id="about" className="about-us">
        <div className="about-us-left-part">
          <div className="collage-text">
            <img src={Collage} alt="Collage" />
          </div>
          <div className="collage-image">
            <img src={CSS} alt="CSS" />
            <img src={Python} alt="Python" />
            <img src={JS} alt="JS" />
            <img src={CPP} alt="C++" />
          </div>
        </div>
        <div className="description">{description}</div>
        <div className={"about-us-title"}>WHO ARE WE</div>
      </div>

      {/** WORKSHOPS **/}
      <div id="workshops" className="workshops">
        <Title title="WORKSHOPS" isHomePage={true} />
        <div className="workshops-list">
          {data?.getWorkshops.workshops.map((workshop) => (
            <WorkshopCard
              id={workshop.id}
              title={workshop.title}
              date={workshop.workshopDate}
              image={workshop.pic}
              registrationCloseTime={workshop.registrationCloseTime}
            />
          ))}
        </div>
      </div>

      {/** CONTACT US **/}
      <div id="contact" className="contact-us">
        <Title title="CONTACT US" isHomePage={true} />
        <div className="contacts-list">
          {contacts.map((contact) => (
            <ContactCard
              name={contact.name}
              // email={contact.email}
              number={contact.number}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
