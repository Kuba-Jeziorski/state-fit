import {
  AppStateValue,
  TrainingStateValueWithUpdater,
} from "../constants/types";
import { useRedirectIfLoggedOut } from "../utils/useRedirectIfLoggedOut";
import {
  LOGGED_IN,
  TRAINING_OFF,
  TRAINING_ON,
  trainingConfirmMessage,
} from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { Title } from "../components/Title";
import { TrainingForm } from "../components/TrainingForm";
import { useEffect } from "react";

type TrainingProps = AppStateValue & TrainingStateValueWithUpdater;

export const Training = ({
  appState,
  trainingState,
  setTrainingState,
}: TrainingProps) => {
  const navigate = useNavigate();

  const isLoggedIn = appState === LOGGED_IN;
  const isTrainingOn = trainingState === TRAINING_ON;

  const redirectToHome = () => {
    navigate("/");
  };

  const redirectToSummary = () => {
    navigate("/summary");
  };

  const finishTraining = () => {
    setTrainingState(TRAINING_OFF);
    localStorage.setItem("trainingState", TRAINING_OFF);
    redirectToSummary();
  };

  //TODO:  happens twice
  useEffect(() => {
    if (isLoggedIn && !isTrainingOn) {
      if (confirm(trainingConfirmMessage)) {
        setTrainingState(TRAINING_ON);
        localStorage.setItem("trainingState", TRAINING_ON);
      } else {
        redirectToHome();
      }
    }
  }, [trainingState, setTrainingState]);

  useRedirectIfLoggedOut(appState);

  return (
    <>
      <button onClick={redirectToHome}>HOME</button>
      <Title tag="h1">New training</Title>
      <TrainingForm />
      <button onClick={finishTraining}>Finish training</button>
    </>
  );
};
