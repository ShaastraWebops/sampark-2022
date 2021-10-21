import React from "react";
import { useHistory } from "react-router";
import { useContext } from "react";
import AuthContext from "../../Utils/contexts";
import { useLogoutMutation } from "../../generated/graphql";
import Popup from "../Cards/Popup";
import { useEffect } from "react";
import Loader from "../Shared/Loader";

const Logout = () => {
  const { setRole } = useContext(AuthContext)!;
  const [logoutUserMutation, { data, loading, error }] = useLogoutMutation();
  const history = useHistory();

  const logoutHandler = async () => {
    try {
      await logoutUserMutation();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    logoutHandler();
  },[]);

  if (loading) return <Loader/>;

  if (error)
    return (
      <Popup
        message={"Some error occurred"}
        close={() => history.push("/")}
        popupType={"ERROR"}
      />
    );

  if (data?.logoutUser) {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("spID");
    const closeHandler = () => {
      setRole("");
      history.push("/");
      window.location.reload()
    };
    return (
      <Popup
        message={"Logout Successful"}
        close={closeHandler}
        popupType={"SUCCESS"}
      />
    );
  } else
    return (
      <Popup
        message={"Some error occurred"}
        close={() => history.push("/")}
        popupType={"ERROR"}
      />
    );
};

export default Logout;
