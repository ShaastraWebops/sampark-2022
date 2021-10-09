import React, { useMemo, useState } from "react";

interface UserContext {
  role: string;
  setRole: (C: string) => void;
}

const AuthContext = React.createContext<UserContext | null>(null);

function AuthContextProvider(props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  const [role, setRole] = useState(localStorage.getItem("role")!);
  const authContext = useMemo(() => ({ role, setRole }), [role, setRole]);

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
