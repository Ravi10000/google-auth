import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

function GoogleAuth() {
  const { error, handleGoogle, loading } = useFetch(
    "http://localhost:5000/api/auth/google" //api google auth handler
  );
  useEffect(() => {
    /* global google */
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_CLIENT_ID,
        callback: handleGoogle,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("gAuth"),
        {
          theme: "outline",
          // "filled_blue", "filled_black", "outline"
          size: "large",
          // "large", "medium", "small"
          text: "continue_with",
          //"signin_with","signup_with", "continue_with", "signin"
          shape: "rectangular",
          // "rectangular", "square", "pill", "circle"
          logo_alignment: "center",
          // "left", "center"
          width: "50px",
        }
      );

      window.google.accounts.id.prompt();
    }
  }, []);
  return <div id="gAuth"></div>;
}

export default GoogleAuth;
