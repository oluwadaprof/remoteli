import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoSettingsOutline } from "react-icons/io5";

const TokenHandler: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      const code = new URLSearchParams(window.location.search).get("code");
      const codeVerifier = sessionStorage.getItem("codeVerifier");

      if (code && codeVerifier) {
        try {
          const params = new URLSearchParams({
            grant_type: "authorization_code",
            client_id: process.env.REACT_APP_CLIENT_ID || "",
            code,
            redirect_uri: process.env.REACT_APP_REDIRECT_URI || "",
            code_verifier: codeVerifier,
          });

          const response = await axios.post(
            process.env.REACT_APP_TOKEN_ENDPOINT as string,
            params
          );

          sessionStorage.setItem("accessToken", response.data.access_token);

          navigate("/authenticated");
        } catch (error) {
          console.error("Token fetching failed", error);
        }
      }
    };

    fetchToken();
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen mx-auto">
     <IoSettingsOutline className="animate-spin-slow" /> <p> Processing authentication...</p>
    </div>
  );
};

export default TokenHandler;
