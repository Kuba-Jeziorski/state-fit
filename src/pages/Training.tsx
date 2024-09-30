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
import { useState } from "react";
import { ConfirmModal } from "../components/ConfirmModal";
import { usePageTitle } from "../utils/usePageTitle";

type TrainingProps = AppStateValue & TrainingStateValueWithUpdater;

export const Training = ({
  appState,
  trainingState,
  setTrainingState,
}: TrainingProps) => {
  const [isModalVisibe, setIsModalVisible] = useState(true);

  const navigate = useNavigate();
  const isLoggedIn = appState === LOGGED_IN;
  const isTrainingOn = trainingState === TRAINING_ON;
  const isConfirmModalDisplayed = isLoggedIn && !isTrainingOn;

  const redirectToHome = () => {
    navigate("/");
  };
  const redirectToSummary = () => {
    navigate("/summary");
  };
  const finishTraining = () => {
    setTrainingState(TRAINING_OFF);
    localStorage.setItem("trainingState", TRAINING_OFF);
    setIsModalVisible(false);
    redirectToSummary();
  };
  const newTrainingConfirmed = () => {
    setTrainingState(TRAINING_ON);
    localStorage.setItem("trainingState", TRAINING_ON);
    setIsModalVisible(false);
  };
  const newTrainingNotConfirmed = () => {
    setIsModalVisible(false);
    redirectToHome();
  };

  useRedirectIfLoggedOut(appState);
  usePageTitle('Training')
  console.log(isModalVisibe);

  return (
    <>
      <button onClick={redirectToHome}>HOME</button>
      <Title tag="h1">New training</Title>
      <TrainingForm />
      <button onClick={finishTraining}>Finish training</button>
      {isConfirmModalDisplayed && (
        <ConfirmModal
          confirmMessage={trainingConfirmMessage}
          confirmAcceptFunction={newTrainingConfirmed}
          confirmDeclineFunction={newTrainingNotConfirmed}
        />
      )}
    </>
  );
};
