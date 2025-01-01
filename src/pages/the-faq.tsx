import { Button } from "../components/the-button";
import { Title } from "../components/the-title";
import {
  FAQ_PAGE_TAB_TITLE,
  FAQ_PAGE_TITLE,
  HOME_CAPTION,
} from "../constants/constants";
import { usePageTitle } from "../utils/use-page-title";
import { useRedirectToHome } from "../utils/use-redirect-to-home";

export const FAQ = () => {
  const redirectToHome = useRedirectToHome();

  usePageTitle(FAQ_PAGE_TAB_TITLE);

  return (
    <>
      <Button
        caption={HOME_CAPTION}
        handleFunction={redirectToHome}
        classes="button primary"
      />
      <Title tag="h1">{FAQ_PAGE_TITLE}</Title>
    </>
  );
};
