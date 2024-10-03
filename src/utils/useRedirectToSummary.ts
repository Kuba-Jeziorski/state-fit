import { useNavigate } from "react-router-dom";

export const useRedirectToSummary = () => {
  const navigate = useNavigate();
  return () => {
    navigate("/summary");
  };
};
