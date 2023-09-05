import axios from "axios";
import { useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogle = async (response) => {
    console.log({ response });
    setLoading(true);
    axios
      .post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/google`,
        { credential: response.credential },
        {
          headers: "Content-Type: application/json",
        }
      )
      .then((res) => {
        setLoading(false);
        console.log({ res });
        return res.json();
      })
      .then((data) => {
        if (data?.user) {
          localStorage.setItem("user", JSON.stringify(data?.user));
          window.location.reload();
        }

        throw new Error(data?.message || data);
      })
      .catch((error) => {
        setError(error?.message);
      });
  };
  return { loading, error, handleGoogle };
};

export default useFetch;
