import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../utils/usePageTitle";

export const Summary = () => {
  const navigate = useNavigate();

  const useRedirectToHome = () => {
    navigate("/");
  };

  usePageTitle("Summary");

  return (
    <>
      <button className="button primary" onClick={useRedirectToHome}>
        HOME
      </button>
      <h1>Summary</h1>
    </>
  );
};
