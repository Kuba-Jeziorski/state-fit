import { Button } from "../components/Button";
import { Title } from "../components/Title";
import { usePageTitle } from "../utils/usePageTitle";
import { useRedirectToHome } from "../utils/useRedirectToHome";

export const Summary = () => {
  const redirectToHome = useRedirectToHome();

  usePageTitle("Summary");

  return (
    <>
      <Button
        caption="HOME"
        handleFunction={redirectToHome}
        classes="button primary"
      />
      <Title tag="h1">Summary</Title>
    </>
  );
};
