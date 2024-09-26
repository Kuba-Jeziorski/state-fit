import {
  AppStateValue,
  TrainingStateValueWithUpdater,
} from "../constants/types";
import { useRedirectIfLoggedOut } from "../utils/useRedirectIfLoggedOut";
import { useRedirectIfTrainingOff } from "../utils/useRedirectIfTrainingOff";
import { TRAINING_OFF } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { Title } from "../components/Title";
import { TrainingForm } from "../components/TrainingForm";

type TrainingProps = AppStateValue & TrainingStateValueWithUpdater;

export const Training = ({
  appState,
  trainingState,
  setTrainingState,
}: TrainingProps) => {
  const finishTraining = () => {
    setTrainingState(TRAINING_OFF);
    localStorage.setItem("trainingState", TRAINING_OFF);
  };
  const navigate = useNavigate();

  const useRedirectToHome = () => {
    navigate("/");
  };

  useRedirectIfLoggedOut(appState);
  useRedirectIfTrainingOff(appState, trainingState);

  return (
    <>
      <button onClick={useRedirectToHome}>HOME</button>
      <Title tag="h1">New training</Title>
      <TrainingForm />
      <button onClick={finishTraining}>Finish training</button>
    </>
  );
};
