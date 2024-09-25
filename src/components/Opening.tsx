import { useEffect } from "react";
import { IN_PROGRESS } from "../constants/constants";
import { AppStateChangeFunction } from "../constants/types";
import { useNavigate } from "react-router-dom";

export const Opening = ({ applicationState, onPush }: AppStateChangeFunction) => {

  const navigate = useNavigate();

  useEffect(()=>{
    if(applicationState === IN_PROGRESS) {
      navigate("/");
    }
  },[applicationState,navigate])

  const changeState = () => {
    onPush(IN_PROGRESS);
  };

  return (
    <>
      <button onClick={changeState}>Log in</button>
    </>
  );
};
