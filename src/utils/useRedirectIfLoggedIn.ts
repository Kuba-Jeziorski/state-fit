import { useEffect } from "react";
import { LOGGED_IN } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { AppState } from "../constants/types";

export const useRedirectIfLoggedIn = (applicationState: AppState) => {
  const navigate = useNavigate();
  const isLoggedIn = applicationState === LOGGED_IN;

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);
};
