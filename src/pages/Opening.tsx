import { LOGGED_IN } from "../constants/constants";
import { useRedirectIfLoggedIn } from "../utils/useRedirectIfLoggedIn";
import { usePageTitle } from "../utils/usePageTitle";
import { Button } from "../components/Button";
import { useAtom } from "jotai";
import { appStateAtom } from "../atoms/app-state-atom";

export const Opening = () => {
  const [appStateValue, setAppStateValue] = useAtom(appStateAtom);

  const logIn = () => {
    setAppStateValue(LOGGED_IN);
    setAppStateValue(LOGGED_IN);
  };

  usePageTitle("Log in");
  useRedirectIfLoggedIn(appStateValue);

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
