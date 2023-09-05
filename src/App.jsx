import { useEffect } from "react";
import "./App.css";
import { FcGoogle } from "react-icons/fc";
import useFetch from "./hooks/useFetch";
import GoogleAuth from "./components/google-auth";

function App() {
  return (
    <div className="App">
      <FcGoogle className="logo" />
      <h1>Google Auth</h1>
      <GoogleAuth />
      <div className="button">
        <div className="top" />
        <div className="highlight"></div>
        <div className="bottom"></div>
      </div>
      <p className="read-the-docs">Click on the button to login with google</p>
    </div>
  );
}

export default App;
