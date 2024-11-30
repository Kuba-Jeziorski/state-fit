import {
  OPENING_CAPTION,
  OPENING_PAGE_TITLE,
  TOKEN_PROVIDED,
} from "../constants/constants";
import { usePageTitle } from "../utils/usePageTitle";
import { Button } from "../components/Button";
import { useSetAtom } from "jotai";
import { tokenAtom } from "../atoms/readonly/token-atop";
import { useRedirectToHome } from "../utils/useRedirectToHome";

export const Opening = () => {
  const setToken = useSetAtom(tokenAtom);
  const redirectToHome = useRedirectToHome();

  const logIn = () => {
    setToken(TOKEN_PROVIDED);
    redirectToHome();
  };

  usePageTitle(OPENING_PAGE_TITLE);
  return (
    <>
      <Button
        caption={OPENING_CAPTION}
        handleFunction={logIn}
        classes="button primary"
      />
    </>
  );
};
