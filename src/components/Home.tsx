import { IN_PROGRESS } from "../constants/constants";
import { AppStateChangeFunction } from "../constants/types";

export const Home = ({ onPush }: AppStateChangeFunction) => {
  const changeState = () => {
    onPush(IN_PROGRESS);
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={changeState}>Finish</button>
    </>
  );
};
