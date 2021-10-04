import React from "react";
import { useParams } from "react-router-dom";
import "../../Styles/Workshop.css";
import Navbar from "../Shared/Navbar";
import Title from "../Shared/Title";

interface Props {}

const Workshop = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const { title, description, image, date, deadline, contacts } = {
    title: "WORKSHOP 1",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Faucibus in ornare quam viverra. In pellentesque massa placerat duis ultricies lacus sed. Magna fermentum iaculis eu non diam. Massa massa ultricies mi quis hendrerit dolor magna eget. Velit euismod in pellentesque massa. Auctor neque vitae tempus quam pellentesque. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Odio euismod lacinia at quis. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Felis bibendum ut tristique et egestas quis. Eget velit aliquet sagittis id. Adipiscing elit ut aliquam purus sit. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Eu feugiat pretium nibh ipsum consequat nisl. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Leo vel fringilla est ullamcorper eget nulla. Urna et pharetra pharetra massa massa. In arcu cursus euismod quis viverra nibh cras pulvinar.
    Aliquet lectus proin nibh nisl condimentum id. Turpis cursus in hac habitasse platea dictumst quisque. Magna eget est lorem ipsum dolor sit. Urna duis convallis convallis tellus id interdum velit laoreet id. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Dui id ornare arcu odio. Interdum posuere lorem ipsum dolor sit amet. Pharetra magna ac placerat vestibulum lectus. Nunc sed augue lacus viverra vitae congue. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Senectus et netus et malesuada fames ac.
    Id porta nibh venenatis cras sed felis. Bibendum at varius vel pharetra vel. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Id porta nibh venenatis cras sed felis eget velit aliquet. Sit amet commodo nulla facilisi nullam. Sagittis id consectetur purus ut. Quam quisque id diam vel quam elementum pulvinar. Consectetur a erat nam at lectus urna. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Cum sociis natoque penatibus et magnis dis parturient. Nisi lacus sed viverra tellus in hac habitasse platea. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Pellentesque diam volutpat commodo sed egestas. Est pellentesque elit ullamcorper dignissim cras. Quis lectus nulla at volutpat diam ut venenatis. Nulla facilisi etiam dignissim diam. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris.
    Ac turpis egestas maecenas pharetra convallis posuere morbi. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Odio ut enim blandit volutpat. Eget nunc scelerisque viverra mauris in aliquam. Ac turpis egestas sed tempus urna et. Volutpat est velit egestas dui id ornare arcu odio. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Nulla facilisi cras fermentum odio eu feugiat pretium. Morbi non arcu risus quis varius quam quisque id. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Porta nibh venenatis cras sed. Diam vel quam elementum pulvinar etiam non. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Feugiat nisl pretium fusce id velit ut tortor.
    Erat pellentesque adipiscing commodo elit at. Aliquet lectus proin nibh nisl condimentum. Porta nibh venenatis cras sed felis eget. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Libero id faucibus nisl tincidunt eget nullam non nisi est. Accumsan sit amet nulla facilisi morbi tempus. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Vel risus commodo viverra maecenas accumsan. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Dictum non consectetur a erat. Nisi scelerisque eu ultrices vitae. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. At quis risus sed vulputate odio. Eget sit amet tellus cras adipiscing. Etiam non quam lacus suspendisse. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. In hac habitasse platea dictumst quisque sagittis.`,
    image:
      "https://bulkmailattachments.s3.ap-southeast-1.amazonaws.com/Online+scavenger+hunt+poster+Shaastra+junior-02+(1).jpg",
    date: "25th OCTOBER",
    deadline: "1st OCTOBER, 4.00 PM",
    contacts: [
      '{"name":"Janith M S", "email": "janithms9920@gmail.com", "number":"9944010785"}',
      '{"name":"Janith M S", "email": "janithms9920@gmail.com", "number":"9944010785"}',
      '{"name":"Janith M S", "email": "janithms9920@gmail.com", "number":"9944010785"}',
    ],
  };
  return (
    <div className="workshop" id="top">
      <Navbar />
      <Title title={title} isHomePage={false} />
      <div className="workshop-content">
        <div className="workshop-description">{description}</div>
        <div className="workshop-details-1">
          <img className="workshop-details-image" src={image} alt="Workshop" />
          <button className="register-button">REGISTER</button>
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
              {date}
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
              {deadline}
            </div>
          </div>
          <div className="workshop-contacts-list">
            <div className="workshop-contacts-list-heading">CONTACT US</div>
            {contacts.map((contact) => {
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
