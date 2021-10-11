import React from "react";
import { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useVerifyUserMutation } from "../../generated/graphql";
import AuthContext from "../../Utils/contexts";
import Popup from "../Cards/Popup";

interface Props {}

const Verify = (props: Props) => {
  const history = useHistory();
  const { token } = useParams<{ token: string }>();
  const { setRole } = useContext(AuthContext)!;

  const [verifyUserMutation, { data, loading, error }] =
    useVerifyUserMutation();

  const verifyHandler = async () => {
    try {
      await verifyUserMutation({
        variables: {
          verifyUserData: {
            token: token,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    verifyHandler();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (data?.verifyUser) {
    const loginCloseHandler = () => {
      history.push("/");
      localStorage.setItem("email", data.verifyUser?.email!);
      localStorage.setItem("name", data.verifyUser?.name!);
      localStorage.setItem("role", data.verifyUser?.role!);
      localStorage.setItem("spID", data.verifyUser?.spID!);
      setRole(data.verifyUser?.role!);
    };
    return (
      <Popup
        message={"Verification successful. Continue to register for workshop"}
        close={loginCloseHandler}
        popupType={"SUCCESS"}
      />
    );
  }

  if (error) {
    if (error.message.includes("jwt expired")) {
      return (
        <Popup
          message={
            "Verification link expired. Please request new verification link."
          }
          close={() => history.push("/resend-email")}
          popupType={"ERROR"}
        />
      );
    }
    if (
      error.message.includes("invalid token") ||
      error.message.includes("Argument Validation Error")
    ) {
      return (
        <Popup
          message={
            "Invalid verification link. Please request new verification link."
          }
          close={() => history.push("/resend-email")}
          popupType={"ERROR"}
        />
      );
    }
    if (error.message.includes("User has been verified already!")) {
      return (
        <Popup
          message={"User has been verified already. Login to continue!"}
          close={() => history.push("/login")}
          popupType={"WARNING"}
        />
      );
    }
  }

  return (
    <Popup
      message={"Some error occurred"}
      close={() => history.push("/")}
      popupType={"ERROR"}
    />
  );
};

export default Verify;
