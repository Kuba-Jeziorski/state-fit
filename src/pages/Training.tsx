import {
  AppStateValue,
  TrainingStateValueWithUpdater,
} from "../constants/types";
import { useRedirectIfLoggedOut } from "../utils/useRedirectIfLoggedOut";
import {
  LOGGED_IN,
  TRAINING_OFF,
  TRAINING_ON,
  finishTrainingConfirmMessage,
  newTrainingConfirmMessage,
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
  const [isModalVisibe, setIsModalVisible] = useState(false);

  const navigate = useNavigate();
  const isLoggedIn = appState === LOGGED_IN;
  const isTrainingOn = trainingState === TRAINING_ON;
  const isNewTrainingModalDisplayed = isLoggedIn && !isTrainingOn;

  const redirectToHome = () => {
    navigate("/");
  };
  const redirectToSummary = () => {
    navigate("/summary");
  };
  const finishTrainingConfirmation = () => {
    setIsModalVisible(true);
  };
  const finishTrainingAccepted = () => {
    setTrainingState(TRAINING_OFF);
    localStorage.setItem("trainingState", TRAINING_OFF);
    setIsModalVisible(false);
    redirectToSummary();
  };
  const finishTrainingDeclined = () => {
    setIsModalVisible(false);
  };
  const newTrainingAccepted = () => {
    setTrainingState(TRAINING_ON);
    localStorage.setItem("trainingState", TRAINING_ON);
    setIsModalVisible(false);
  };
  const newTrainingDeclined = () => {
    setIsModalVisible(false);
    redirectToHome();
  };

  useRedirectIfLoggedOut(appState);
  usePageTitle("Training");

  return (
    <>
      <button className="button primary" onClick={redirectToHome}>
        HOME
      </button>
      <Title tag="h1">New training</Title>
      <TrainingForm />
      <button className="button primary" onClick={finishTrainingConfirmation}>
        Finish training
      </button>
      {isNewTrainingModalDisplayed && (
        <ConfirmModal
          confirmMessage={newTrainingConfirmMessage}
          confirmAcceptFunction={newTrainingAccepted}
          confirmDeclineFunction={newTrainingDeclined}
        />
      )}
      {isModalVisibe && (
        <ConfirmModal
          confirmMessage={finishTrainingConfirmMessage}
          confirmAcceptFunction={finishTrainingAccepted}
          confirmDeclineFunction={finishTrainingDeclined}
        />
      )}
    </>
  );
};
