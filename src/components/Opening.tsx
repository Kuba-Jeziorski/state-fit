import { useEffect } from "react";
import { IN_PROGRESS } from "../constants/constants";
import { AppStateChangeFunction } from "../constants/types";
import { NavigateFunction } from "react-router-dom";

type AppStyleChangeAndNavigate = AppStateChangeFunction & {
  navigate: NavigateFunction
}

export const Opening = ({ navigate, applicationState, onPush }: AppStyleChangeAndNavigate) => {

  useEffect(()=>{
    if(applicationState === IN_PROGRESS) {
      // navigate("/");
      console.log(navigate)
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
