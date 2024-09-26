import { useEffect } from "react";
import { LOGGED_IN } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { AppState } from "../constants/types";

export const useRedirectIfLoggedIn = (applicationState: AppState) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (applicationState === LOGGED_IN) {
      localStorage.setItem("appState", LOGGED_IN);
      navigate("/");
    }
  }, [applicationState, navigate]);
};
