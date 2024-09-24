import { IN_PROGRESS } from "../constants/constants";
import { AppStateChangeFunction } from "../constants/types";

export const Opening = ({ onPush }: AppStateChangeFunction) => {
  const changeState = () => {
    onPush(IN_PROGRESS);
  };

  return (
    <>
      <button onClick={changeState}>Log in</button>
    </>
  );
};
