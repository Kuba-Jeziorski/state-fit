import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirectToHome = () => {
  const navigate = useNavigate();
  return useCallback(() => {
    navigate("/");
  }, [navigate]);
};
