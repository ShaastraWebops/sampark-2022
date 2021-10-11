import React from "react";
import "../../Styles/Helpdesk.css";
import { IoIosSearch, IoIosSend } from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";
import Title from "../Shared/Title";
import Navbar from "../Shared/Navbar";
import {
  useAnswerFaqMutation,
  useCreateFaqMutation,
  useDeleteFaQsMutation,
  useGetFaQsQuery,
  UserRole,
} from "../../generated/graphql";
import Popup from "../Cards/Popup";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../Utils/contexts";
import Loader from "../Shared/Loader";

function Helpdesk() {
  const history = useHistory();
  const { role } = useContext(AuthContext)!;
  const [click, setClick] = React.useState<number | null>(null);
  const toggle = (index: any) => {
    if (click === index) {
      setClick(null);
    } else setClick(index);
  };
  const [faqQuestion, setfaqQuestion] = React.useState("");
  const [newQuestion, setnewQuestion] = React.useState("");
  const [faqAnswer, setFaqAnswer] = React.useState("");

  const [
    createFaqMutation,
    { data: createFaqData, loading: createFaqLoading, error: createFaqError },
  ] = useCreateFaqMutation();

  const {
    data: faqData,
    loading: faqLoading,
    error: faqError,
  } = useGetFaQsQuery();

  const [answerFaqMutation] = useAnswerFaqMutation();

  const [deleteFaQsMutation] = useDeleteFaQsMutation();

  const FAQSubmitHandler = async (e: any) => {
    e.preventDefault();
    try {
      createFaqMutation({
        variables: {
          question: newQuestion,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (createFaqData?.createFAQ) {
    return (
      <Popup
        message={
          "Question submitted. It will be answered by the Shaastra Team soon"
        }
        close={() => window.location.reload()}
        popupType={"SUCCESS"}
      />
    );
  }

  if (createFaqLoading || faqLoading) return <Loader/>;

  if (createFaqError)
    return (
      <Popup
        message={"Request Failed. Please retry"}
        close={() => history.push("/")}
        popupType={"ERROR"}
      />
    );

  if (faqError)
    return (
      <Popup
        message={"Failed to fetch data"}
        close={() => history.push("/")}
        popupType={"ERROR"}
      />
    );

  return (
    <div className="helpdesk">
      <Navbar />
      <Title title="HELP DESK" isHomePage={false} />
      {faqData?.getFAQs.count !== 0 && (
        <div>
          <form className="search-bar">
            <input
              className="input-ctn"
              placeholder="Search for existing question"
              value={faqQuestion}
              onChange={(e) => setfaqQuestion(e.target.value)}
            ></input>
            <button className="button-ctn">
              <IoIosSearch className="form-icon" />
            </button>
          </form>
        </div>
      )}
      <div className="faq">
        {faqData?.getFAQs.faqs
          .filter((item) => {
            if (faqQuestion === "") {
              return item;
            } else if (
              item.question.toLocaleLowerCase().includes(faqQuestion)
            ) {
              return item;
            } else if (
              !item.question.toLocaleLowerCase().includes(faqQuestion)
            ) {
            }
          })
          .map((faq, index) => {
            const handelSubmit = () => {
              if (!faqAnswer) {
                if (faq.answer) window.alert("FAQ answer is not edited");
                else window.alert("Add answer to FAQ");
                return;
              }
              answerFaqMutation({
                variables: {
                  answerFaqAnswer: faqAnswer,
                  answerFaqFaqid: faq.id,
                },
              })
                .then(() => {
                  window.alert("Answer Saved");
                  setFaqAnswer("");
                })
                .catch((err) => {
                  console.log(err);
                });
            };

            const handleDelete = () => {
              deleteFaQsMutation({
                variables: {
                  deleteFAQsFAQID: faq.id,
                },
              }).then(() => {
                window.alert("FAQ Deleted");
                window.location.reload();
              });
            };
            return (
              <div className="question">
                <span className="top" onClick={() => toggle(index)}>
                  <h3>{faq.question}</h3>
                  <span
                    style={
                      click === index
                        ? {
                            transform: "rotate(-90deg)",
                            transition: "0.5s",
                          }
                        : {
                            transform: "rotate(0deg)",
                            transition: "0.5s",
                          }
                    }
                    className="down-arrow"
                  >
                    <AiFillCaretDown className="form-icon" />
                  </span>
                </span>
                {role === UserRole.Admin ? (
                  <span
                    style={
                      click === index
                        ? {
                            height: "max-content",
                            paddingTop: "15px",
                          }
                        : {
                            height: "0px",
                            paddingTop: "0px",
                          }
                    }
                    className="panel"
                  >
                    <form>
                      <input
                        value={
                          faq.answer && !faqAnswer ? faq.answer : faqAnswer
                        }
                        required={true}
                        onChange={(e) => {
                          setFaqAnswer(e.target.value);
                        }}
                        placeholder="Add your answer here"
                      ></input>
                      <button onClick={handelSubmit} type="submit">
                        {faq.answer ? "Edit" : "Submit"}
                      </button>
                    </form>
                    <button onClick={handleDelete}>Delete FAQ</button>
                  </span>
                ) : (
                  <span
                    style={
                      click === index
                        ? {
                            height: "max-content",
                            paddingTop: "15px",
                          }
                        : {
                            height: "0px",
                            paddingTop: "0px",
                          }
                    }
                    className="panel"
                  >
                    <p className="answer">{faq.answer}</p>
                  </span>
                )}
              </div>
            );
          })}
      </div>
      <div>
        <form className="question-ctn" onSubmit={FAQSubmitHandler}>
          <input
            className="input-ctn"
            placeholder="Post your question"
            value={newQuestion}
            onChange={(e) => setnewQuestion(e.target.value)}
            required
          ></input>
          <button className="button-ctn" type="submit">
            <IoIosSend className="form-icon" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Helpdesk;
