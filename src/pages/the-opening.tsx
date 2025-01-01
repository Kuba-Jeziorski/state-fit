import {
  OPENING_CAPTION,
  OPENING_PAGE_TAB_TITLE,
  TOKEN_PROVIDED,
} from "../constants/constants";
import { usePageTitle } from "../utils/use-page-title";
import { Button } from "../components/the-button";
import { useSetAtom } from "jotai";
import { tokenAtom } from "../atoms/token-atom";
import { useRedirectToPage } from "../utils/use-redirect-to-page";

export const Opening = () => {
  const setToken = useSetAtom(tokenAtom);
  const redirectToHome = useRedirectToPage();

  const logIn = () => {
    setToken(TOKEN_PROVIDED);
    redirectToHome();
  };

  usePageTitle(OPENING_PAGE_TAB_TITLE);
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
