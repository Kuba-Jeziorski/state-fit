import { Button } from "../components/Button";
import { Title } from "../components/Title";
import { HOME_CAPTION, SUMMARY_PAGE_TITLE } from "../constants/constants";
import { usePageTitle } from "../utils/usePageTitle";
import { useRedirectToHome } from "../utils/useRedirectToHome";

export const Summary = () => {
  const redirectToHome = useRedirectToHome();

  usePageTitle(SUMMARY_PAGE_TITLE);

  return (
    <>
      <Button
        caption={HOME_CAPTION}
        handleFunction={redirectToHome}
        classes="button primary"
      />
      <Title tag="h1">Summary</Title>
    </>
  );
};
