import { useNavigate } from "react-router-dom";

export const useRedirectToHome = () => {
  const navigate = useNavigate();
  return () => {
    navigate("/");
  };
};
