import {
  LOGGED_OUT,
  loggingConfirmMessage,
  TRAINING_OFF,
  TRAINING_ON,
} from "../constants/constants";
import {
  AppStateValueWithUpdater,
  TrainingStateValueWithUpdater,
} from "../constants/types";
import { useRedirectIfLoggedOut } from "../utils/useRedirectIfLoggedOut";
import { Title } from "../components/Title";
import { useState } from "react";
import { ConfirmModal } from "../components/ConfirmModal";
import { usePageTitle } from "../utils/usePageTitle";
import { useRedirectToSummary } from "../utils/useRedirectToSummary";
import { useRedirectToTraining } from "../utils/useRedirectToTraining";

type HomeProps = AppStateValueWithUpdater & TrainingStateValueWithUpdater;

export const Home = ({
  appState,
  setAppState,
  trainingState,
  setTrainingState,
}: HomeProps) => {
  const [isLogoutPressed, setIsLoggoutPressed] = useState(false);

  const isTrainingOn = trainingState === TRAINING_ON;

  const redirectToTraining = useRedirectToTraining();
  const redirectToSummary = useRedirectToSummary();

  const startNewTraining = () => {
    redirectToTraining();
  };
  const handleIsLogoutPressed = () => {
    setIsLoggoutPressed(true);
  };
  const logOutConfirmAccepted = () => {
    setAppState(LOGGED_OUT);
    localStorage.setItem("appState", LOGGED_OUT);
    setTrainingState(TRAINING_OFF);
    localStorage.setItem("trainingState", TRAINING_OFF);
    setIsLoggoutPressed(false);
    localStorage.setItem("currentTraining", "not-set")
  };
  const logOutConfirmDeclined = () => {
    setIsLoggoutPressed(false);
  };

  usePageTitle("Home");
  useRedirectIfLoggedOut(appState);

  return (
    <>
      <Title tag="h1">Home</Title>
      <div className="buttonWrapper">
        <button className="button primary" onClick={startNewTraining}>
          {isTrainingOn ? "Current Training" : "Start New Training"}
        </button>
        <button className="button primary" onClick={redirectToSummary}>
          See Summary
        </button>
        <button className="button primary" onClick={handleIsLogoutPressed}>
          Log me out
        </button>
      </div>
      {isLogoutPressed && (
        <ConfirmModal
          confirmMessage={loggingConfirmMessage}
          confirmAcceptFunction={logOutConfirmAccepted}
          confirmDeclineFunction={logOutConfirmDeclined}
        />
      )}
    </>
  );
};
