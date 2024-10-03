import { useNavigate } from "react-router-dom";

export const useRedirectToTraining = () => {
  const navigate = useNavigate();
  return () => {
    navigate("/training");
  };
};
