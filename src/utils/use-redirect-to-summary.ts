import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirectToSummary = () => {
  const navigate = useNavigate();
  return useCallback(() => {
    navigate("/summary");
  }, [navigate]);
};
