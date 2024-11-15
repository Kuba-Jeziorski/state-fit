import {
  AppStateValue,
  TrainingStateValueWithUpdater,
} from "../constants/types";
import { useRedirectIfLoggedOut } from "../utils/useRedirectIfLoggedOut";
import {
  TRAINING_OFF,
  TRAINING_ON,
  FINISH_TRAINING_CONFIRM_MESSAGE,
  NEW_TRAINING_CONFIRM_MESSAGE,
} from "../constants/constants";
import { Title } from "../components/Title";
import { TrainingForm } from "../components/TrainingForm";
import { useState } from "react";
import { ConfirmModal } from "../components/ConfirmModal";
import { usePageTitle } from "../utils/usePageTitle";
import { useStartTraining } from "../utils/useStartTraining";
import { useRedirectToSummary } from "../utils/useRedirectToSummary";
import { useRedirectToHome } from "../utils/useRedirectToHome";
import { Button } from "../components/Button";

type TrainingProps = AppStateValue & TrainingStateValueWithUpdater;

export const Training = ({
  appState,
  trainingState,
  setTrainingState,
}: TrainingProps) => {
  const [isFinishTrainingModalVisible, setIsFinishTrainingModalVisible] =
    useState(false);

  const isTrainingOn = trainingState === TRAINING_ON;

  const startTraining = useStartTraining();
  const redirectToSummary = useRedirectToSummary();
  const redirectToHome = useRedirectToHome();

  const finishTrainingConfirmation = () => {
    setIsFinishTrainingModalVisible(true);
  };
  const finishTrainingAccepted = () => {
    setTrainingState(TRAINING_OFF);
    localStorage.setItem("trainingState", TRAINING_OFF);
    localStorage.setItem("currentTraining", "not-set");
    setIsFinishTrainingModalVisible(false);
    redirectToSummary();
  };
  const finishTrainingDeclined = () => {
    setIsFinishTrainingModalVisible(false);
  };
  const newTrainingAccepted = () => {
    setTrainingState(TRAINING_ON);
    localStorage.setItem("trainingState", TRAINING_ON);
    startTraining();
  };
  const newTrainingDeclined = () => {
    redirectToHome();
  };

  useRedirectIfLoggedOut(appState);
  usePageTitle("Training");

  return (
    <>
      {isTrainingOn && (
        <>
          <Button
            caption="HOME"
            handleFunction={redirectToHome}
            classes="button primary"
          />
          <Title tag="h1">New training</Title>
          <TrainingForm />
          <Button
            caption="Finish training"
            handleFunction={finishTrainingConfirmation}
            classes="button primary"
          />
          {isFinishTrainingModalVisible && (
            <ConfirmModal
              confirmMessage={FINISH_TRAINING_CONFIRM_MESSAGE}
              confirmAcceptFunction={finishTrainingAccepted}
              confirmDeclineFunction={finishTrainingDeclined}
            />
          )}
        </>
      )}

      {!isTrainingOn && (
        <ConfirmModal
          confirmMessage={NEW_TRAINING_CONFIRM_MESSAGE}
          confirmAcceptFunction={newTrainingAccepted}
          confirmDeclineFunction={newTrainingDeclined}
        />
      )}
    </>
  );
};
