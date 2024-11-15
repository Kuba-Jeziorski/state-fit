import { useEffect } from "react";
import { LOGGED_IN } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { AppState } from "../constants/types";
import { useSetAtom } from "jotai";
import { appStateAtom } from "../atoms/app-state-atom";

export const useRedirectIfLoggedIn = (applicationState: AppState) => {
  const navigate = useNavigate();
  const isLoggedIn = applicationState === LOGGED_IN;
  const setAppStateValue = useSetAtom(appStateAtom);

  useEffect(() => {
    if (isLoggedIn) {
      setAppStateValue(LOGGED_IN);
      navigate("/");
    }
  }, [isLoggedIn, navigate, setAppStateValue]);
};
