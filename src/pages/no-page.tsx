import { Button } from "../components/the-button";
import { Title } from "../components/the-title";
import { useRedirectToPage } from "../utils/use-redirect-to-page";

export const NoPage = () => {
  const redirectToHome = useRedirectToPage();

  return (
    <>
      <Title tag="h1">Nothing to do here!</Title>
      <Button
        caption="HOME"
        handleFunction={redirectToHome}
        classes="button primary"
      />
    </>
  );
};
