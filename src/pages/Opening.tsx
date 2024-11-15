import { AppStateValueWithUpdater } from "../constants/types";
import { LOGGED_IN } from "../constants/constants";
import { useRedirectIfLoggedIn } from "../utils/useRedirectIfLoggedIn";
import { usePageTitle } from "../utils/usePageTitle";
import { Button } from "../components/Button";
import { useSetAtom } from "jotai";
import { appStateAtom } from "../atoms/app-state-atom";

export const Opening = ({
  appState,
  setAppState,
}: AppStateValueWithUpdater) => {
  const setAppStateValue = useSetAtom(appStateAtom);

  const logIn = () => {
    setAppState(LOGGED_IN);
    setAppStateValue(LOGGED_IN);
  };

  usePageTitle("Log in");
  useRedirectIfLoggedIn(appState);

  return (
    <>
      <Button
        caption="Log in"
        handleFunction={logIn}
        classes="button primary"
      />
    </>
  );
};
