import { Title } from "../components/Title";
import { useRedirectToHome } from "../utils/useRedirectToHome";

export const NoPage = () => {
  const redirectToHome = useRedirectToHome();

  return (
    <>
      <Title tag="h1">Nothing to do here!</Title>
      <button className="button primary" onClick={redirectToHome}>
        HOME
      </button>
    </>
  );
};
