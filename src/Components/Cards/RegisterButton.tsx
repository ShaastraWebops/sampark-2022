import React from "react";
import { useState } from "react";
import {
  refetchGetWorkshopQuery,
  refetchIsRegisteredQuery,
  useIsRegisteredQuery,
  useRegisterMutation,
} from "../../generated/graphql";
import "../../Styles/RegisterButton.css";
import Loader from "../Shared/Loader";
import Popup from "./Popup";

interface Props {
  id: string;
  isClosed: boolean;
  className: string;
}

const RegisterButton = (props: Props) => {
  const [showRegisterPopup, setShowRegisterPopup] = useState<boolean>(false);

  const { data } = useIsRegisteredQuery({
    variables: {
      isRegisteredWorkshopId: props.id,
    },
  });

  const [registerMutation, { data: registerData, loading, error }] =
    useRegisterMutation({
      variables: { registerWorkshopId: props.id },
      refetchQueries: [
        refetchIsRegisteredQuery({ isRegisteredWorkshopId: props.id }),
        refetchGetWorkshopQuery({ workshopId: props.id }),
      ],
    });

  const registrationHandler = async () => {
    try {
      await registerMutation();
    } catch (e) {
      console.log(e);
    }
  };

  const closePopupHandler = () => {
    return setShowRegisterPopup(false);
  };

  if (loading) return <Loader/>;

  if (data?.isRegistered)
    return (
      <button
        className={props.className}
        disabled
        style={{ backgroundColor: "green" }}
      >
        REGISTERED
      </button>
    );
  else if (props.isClosed)
    return (
      <button
        className={props.className}
        disabled
        style={{ backgroundColor: "#8dacd0" }}
      >
        REGISTRATION CLOSED
      </button>
    );
  else
    return (
      <>
        <button
          className={props.className}
          onClick={() => setShowRegisterPopup(true)}
        >
          REGISTER
        </button>
        {showRegisterPopup && (
          <>
            {!error && !registerData && (
              <div className="popup-modal">
                <div className="popup-modal-content">
                  <div className="popup-modal-message">
                    Your Sampark ID : {localStorage.getItem("spID")}
                  </div>
                  <div className="register-popup-btns">
                    <button
                      className="popup-modal-close-btn"
                      onClick={closePopupHandler}
                    >
                      Close
                    </button>
                    <button
                      className="popup-modal-close-btn"
                      onClick={() => registrationHandler()}
                      style={{
                        marginLeft: window.innerWidth >= 598 ? "10px" : "0px",
                      }}
                    >
                      Confirm Registration
                    </button>
                  </div>
                </div>
              </div>
            )}
            {registerData?.register === true && (
              <Popup
                message="Registration Successful"
                close={closePopupHandler}
                popupType={"SUCCESS"}
              />
            )}
            {error && (
              <Popup
                message={error.message}
                close={closePopupHandler}
                popupType={"ERROR"}
              />
            )}
          </>
        )}
      </>
    );
};

export default RegisterButton;
