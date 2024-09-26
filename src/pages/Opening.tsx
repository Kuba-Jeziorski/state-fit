import { AppStateValueWithUpdater } from "../constants/types";
import { LOGGED_IN } from "../constants/constants";
import { useRedirectIfLoggedIn } from "../utils/useRedirectIfLoggedIn";

export const Opening = ({
  appState,
  setAppState,
}: AppStateValueWithUpdater) => {
  const logIn = () => {
    setAppState(LOGGED_IN);
    localStorage.setItem("appState", LOGGED_IN);
  };

  useRedirectIfLoggedIn(appState);

  return (
    <>
      <button onClick={logIn}>Log in</button>
    </>
  );
};
