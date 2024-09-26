import { useNavigate } from "react-router-dom";

export const Summary = () => {
  const navigate = useNavigate();

  const useRedirectToHome = () => {
    navigate("/");
  };
  return (
    <>
      <button onClick={useRedirectToHome}>HOME</button>
      <h1>Summary</h1>
    </>
  );
};
