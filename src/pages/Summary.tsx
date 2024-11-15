import { Button } from "../components/Button";
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
      <h1>Summary</h1>
    </>
  );
};
