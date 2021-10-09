import React from "react";
import { useHistory } from "react-router";
import { useContext } from "react";
import AuthContext from "../../Utils/contexts";
import { useLogoutMutation } from "../../generated/graphql";

const Logout = () => {
  const { setRole } = useContext(AuthContext)!
  const [logoutUserMutation, { data, loading, error }] = useLogoutMutation();
  const history = useHistory()

  const logoutHandler = async () => {
    try {
      await logoutUserMutation();
    } catch (e) {
      console.log(e);
    }
  };

  logoutHandler();

  if (loading) return <p>Loading...</p> //return <Dialog open={true} ><p>Loading...</p></Dialog>;
  if (error) return <p>{error}</p>
//   {
//     const closeHandler= () => {window.location.reload()}
//     return(
//       <Dialog onClose={closeHandler} open={true} >
//           <p>Some error occurred</p>
//           <button onClick={closeHandler}>Close</button>
//       </Dialog>
//   );}
  if (data) {
    if (data.logoutUser) {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      localStorage.removeItem("spID");
      const closeHandler= () => {
        history.push('/');
        setRole("")
      }
      return(
        // <Dialog onClose={closeHandler} open={true} >
        <div>
            <p>Logout successful.</p>
            <button onClick={closeHandler}>Close</button>
            </div>
        // </Dialog>
    );}
    {
      const closeHandler= () => {history.push('/')}
      return(
        // <Dialog onClose={closeHandler} open={true} >
        <div>
            <p>Some error occurred</p>
            <button onClick={closeHandler}>Close</button>
            </div>
        // </Dialog>
    );}
  } else return <p>Loading...</p>// return <Dialog open={true} ><p>Loading...</p></Dialog>;
};

export default Logout;