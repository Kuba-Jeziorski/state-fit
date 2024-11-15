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
import { Button } from "../components/Button";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";
import { useSetAtom } from "jotai";
import { appStateAtom } from "../atoms/app-state-atom";
import { trainingStateAtom } from "../atoms/training-state-atom";

type HomeProps = AppStateValueWithUpdater & TrainingStateValueWithUpdater;

export const Home = ({
  appState,
  setAppState,
  trainingState,
  setTrainingState,
}: HomeProps) => {
  const [isLogoutPressed, setIsLoggoutPressed] = useState(false);

  const setCurrentTrainingId = useSetAtom(currentTrainingIdAtom);
  const setAppStateValue = useSetAtom(appStateAtom);
  const setTraningStateValue = useSetAtom(trainingStateAtom);

  const isTrainingOn = trainingState === TRAINING_ON;
  const trainingButtonCaption = isTrainingOn
    ? "Current Training"
    : "Start New Training";

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
    setAppStateValue(LOGGED_OUT);
    setTrainingState(TRAINING_OFF);
    setTraningStateValue(TRAINING_OFF);
    setIsLoggoutPressed(false);
    setCurrentTrainingId(null);
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
        <Button
          caption={trainingButtonCaption}
          handleFunction={startNewTraining}
          classes="button primary"
        />
        <Button
          caption="See Summary"
          handleFunction={redirectToSummary}
          classes="button primary"
        />
        <Button
          caption="Log me out"
          handleFunction={handleIsLogoutPressed}
          classes="button primary"
        />
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
