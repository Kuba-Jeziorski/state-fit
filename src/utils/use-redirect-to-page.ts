import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type Page = string;

export const useRedirectToPage = (page: Page = "") => {
  const navigate = useNavigate();
  return useCallback(() => {
    navigate(`/${page}`);
  }, [navigate, page]);
};
