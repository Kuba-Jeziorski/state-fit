import { IN_PROGRESS } from "../constants/constants";
import { AppStateChangeFunction } from "../constants/types";

export const Home = ({ applicationState, onPush }: AppStateChangeFunction) => {
  const changeState = () => {
    onPush(IN_PROGRESS);
  };

  console.log(applicationState)

  return (
    <>
      <h1>Home</h1>
      <button onClick={changeState}>Finish</button>
    </>
  );
};
