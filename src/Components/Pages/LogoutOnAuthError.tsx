import React from "react";
import { useHistory } from "react-router";
import { useContext } from "react";
import AuthContext from "../../Utils/contexts";
import Popup from "../Cards/Popup";

const LogoutOnAuthError = () => {
  const { setRole } = useContext(AuthContext)!;
  const history = useHistory();

  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("role");
  localStorage.removeItem("spID");
  const closeHandler = () => {
    setRole("");
    history.push("/login");
  };
  return (
    <Popup
      message={"Request Failed. Login to continue"}
      close={closeHandler}
      popupType={"ERROR"}
    />
  );
};

export default LogoutOnAuthError;
