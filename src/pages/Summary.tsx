import { usePageTitle } from "../utils/usePageTitle";
import { useRedirectToHome } from "../utils/useRedirectToHome";

export const Summary = () => {
  const redirectToHome = useRedirectToHome();

  usePageTitle("Summary");

  return (
    <>
      <button className="button primary" onClick={redirectToHome}>
        HOME
      </button>
      <h1>Summary</h1>
    </>
  );
};
