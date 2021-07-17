import React, { useState, useEffect } from "react";
import "./assets/css/App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes"
import axios from "axios";
import firebase from "firebase"
let UserContext = React.createContext();
function App() {
  let [user, setUser] = useState();
  useEffect(function () {
    firebase.auth().onAuthStateChanged(function (user) {
      setUser(user);
      if (user) {
        user
          .getIdToken(true)
          .then(function (idToken) {
            axios.defaults.headers["Authorization"] = `Bearer ${idToken}`;
          })
          .catch(function (error) {});
      }
    });
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export { App, UserContext };
