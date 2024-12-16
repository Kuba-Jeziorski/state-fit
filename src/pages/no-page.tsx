import { Button } from "../components/the-button";
import { Title } from "../components/the-title";
import { useRedirectToHome } from "../utils/use-redirect-to-home";

export const NoPage = () => {
  const redirectToHome = useRedirectToHome();

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
