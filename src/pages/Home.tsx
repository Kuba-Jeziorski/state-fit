import { useNavigate } from "react-router-dom";
import { LOGGED_OUT, TRAINING_OFF, TRAINING_ON } from "../constants/constants";
import {
  AppStateValueWithUpdater,
  TrainingStateValueWithUpdater,
} from "../constants/types";
import { useRedirectIfLoggedOut } from "../utils/useRedirectIfLoggedOut";
import { Title } from "../components/Title";

type HomeProps = AppStateValueWithUpdater & TrainingStateValueWithUpdater;

export const Home = ({
  appState,
  setAppState,
  trainingState,
  setTrainingState,
}: HomeProps) => {
  const isTrainingOn = trainingState === TRAINING_ON;
  const navigate = useNavigate();

  const navigateToSummary = () => {
    navigate("/summary");
  };
  const navigateToTraining = () => {
    navigate("/training");
  };
  const startTraining = () => {
    setTrainingState(TRAINING_ON);
    localStorage.setItem("trainingState", TRAINING_ON);
    navigateToTraining();
  };
  const logOut = () => {
    if (confirm(`Are you sure?`)) {
      setAppState(LOGGED_OUT);
      localStorage.setItem("appState", LOGGED_OUT);
      setTrainingState(TRAINING_OFF);
      localStorage.setItem("trainingState", TRAINING_OFF);
    } else {
      return;
    }
  };

  useRedirectIfLoggedOut(appState);

  return (
    <>
      <Title tag="h1">Home</Title>
      <button onClick={startTraining}>
        {isTrainingOn ? "Current Training" : "Start New Training"}
      </button>
      <button onClick={navigateToSummary}>See Summary</button>
      <button onClick={logOut}>Log me out</button>
    </>
  );
};
