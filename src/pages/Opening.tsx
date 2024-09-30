import { AppStateValueWithUpdater } from "../constants/types";
import { LOGGED_IN } from "../constants/constants";
import { useRedirectIfLoggedIn } from "../utils/useRedirectIfLoggedIn";
import { usePageTitle } from "../utils/usePageTitle";

export const Opening = ({
  appState,
  setAppState,
}: AppStateValueWithUpdater) => {
  const logIn = () => {
    setAppState(LOGGED_IN);
    localStorage.setItem("appState", LOGGED_IN);
  };

  usePageTitle("Log in");
  useRedirectIfLoggedIn(appState);

  return (
    <>
      <button className="button primary" onClick={logIn}>
        Log in
      </button>
    </>
  );
};
