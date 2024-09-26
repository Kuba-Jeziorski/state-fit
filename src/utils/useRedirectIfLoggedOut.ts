import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOGGED_OUT } from "../constants/constants";
import { AppState } from "../constants/types";

export const useRedirectIfLoggedOut = (appState: AppState) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (appState === LOGGED_OUT) {
      navigate("/open");
    }
  }, [appState, navigate]);
};
