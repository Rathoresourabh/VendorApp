import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../App";
export default function AuthGuard({ children }) {
  let { user } = useContext(UserContext);

  if (user === undefined) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading
      </div>
    );
  } else if (user === null) {
    return <Redirect to="/login" />;
  } else {
    return children;
  }
}
