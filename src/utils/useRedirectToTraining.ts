import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirectToTraining = () => {
  const navigate = useNavigate();
  return useCallback(() => {
    navigate("/training");
  }, [navigate]);
};
