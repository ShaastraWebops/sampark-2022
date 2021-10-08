import React from "react";
import Navbar from "../Shared/Navbar";
import Title from "../Shared/Title";
import Footer from "../Shared/Footer";
import ContactCard from "../Shared/ContactCard";
import Collage from "../../Images/collage.png";
import CSS from "../../Images/css.png";
import CPP from "../../Images/cpp.png";
import Python from "../../Images/python.png";
import JS from "../../Images/js.png";
import { contacts, description, oneLiner } from "../../Data/Home";
import "../../Styles/Home.css";
import WorkshopCard from "../Shared/WorkshopCard";

interface Props {}

const Home = (props: Props) => {
  const workshops = [
    {
      id: "1",
      title: "Python",
      date: "30th Octber",
      image:
        "https://bulkmailattachments.s3.ap-southeast-1.amazonaws.com/Online+scavenger+hunt+poster+Shaastra+junior-02+(1).jpg",
    },
    {
      id: "2",
      title: "Learn 3D Modelling using Fusion 360",
      date: "30th Octber",
      image:
        "https://bulkmailattachments.s3.ap-southeast-1.amazonaws.com/Online+scavenger+hunt+poster+Shaastra+junior-02+(1).jpg",
    },
    {
      id: "3",
      title: "CKT",
      date: "6th November",
      image:
        "https://bulkmailattachments.s3.ap-southeast-1.amazonaws.com/Online+scavenger+hunt+poster+Shaastra+junior-02+(1).jpg",
    },
    {
      id: "4",
      title: "Web Development",
      date: "6th November",
      image:
        "https://bulkmailattachments.s3.ap-southeast-1.amazonaws.com/Online+scavenger+hunt+poster+Shaastra+junior-02+(1).jpg",
    },
    {
      id: "5",
      title: "Machine Learning - A project based approach",
      date: "7th November",
      image:
        "https://bulkmailattachments.s3.ap-southeast-1.amazonaws.com/Online+scavenger+hunt+poster+Shaastra+junior-02+(1).jpg",
    },
  ];

  return (
    <div className="home">
      <Navbar />

      {/** LANDING **/}
      <div id="home" className="landing-section">
        <div className="sampark-title">SAMPARK</div>
        <div className="sampark-title">2021</div>
        <div className="sampark-one-line">{oneLiner}</div>
        <button className="home-register">REGISTER NOW</button>
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
          {workshops.map((workshop) => (
            <WorkshopCard
              id={workshop.id}
              title={workshop.title}
              date={workshop.date}
              image={workshop.image}
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
