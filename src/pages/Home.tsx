import { useNavigate } from "react-router-dom";
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

type HomeProps = AppStateValueWithUpdater & TrainingStateValueWithUpdater;

export const Home = ({
  appState,
  setAppState,
  trainingState,
  setTrainingState,
}: HomeProps) => {
  const [isLogoutPressed, setIsLoggoutPressed] = useState(false);

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
  const handleIsLogoutPressed = () => {
    setIsLoggoutPressed(true);
  };
  const logOutConfirmAccepted = () => {
    setAppState(LOGGED_OUT);
    localStorage.setItem("appState", LOGGED_OUT);
    setTrainingState(TRAINING_OFF);
    localStorage.setItem("trainingState", TRAINING_OFF);
    setIsLoggoutPressed(false);
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
        <button className="button primary" onClick={startTraining}>
          {isTrainingOn ? "Current Training" : "Start New Training"}
        </button>
        <button className="button primary" onClick={navigateToSummary}>
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
