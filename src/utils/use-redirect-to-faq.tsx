import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirectToFAQ = () => {
  const navigate = useNavigate();
  return useCallback(() => {
    navigate("/faq");
  }, [navigate]);
};
