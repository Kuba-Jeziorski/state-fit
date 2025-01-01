import { Button } from "../components/the-button";
import { Title } from "../components/the-title";
import {
  HOME_CAPTION,
  SUMMARY_PAGE_TAB_TITLE,
  SUMMARY_PAGE_TITLE,
} from "../constants/constants";
import { usePageTitle } from "../utils/use-page-title";
import { useRedirectToPage } from "../utils/use-redirect-to-page";

export const Summary = () => {
  const redirectToHome = useRedirectToPage();

  usePageTitle(SUMMARY_PAGE_TAB_TITLE);

  return (
    <>
      <Button
        caption={HOME_CAPTION}
        handleFunction={redirectToHome}
        classes="button primary"
      />
      <Title tag="h1">{SUMMARY_PAGE_TITLE}</Title>
    </>
  );
};
