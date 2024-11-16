import {
  CURRENT_TRAINING_CAPTION,
  LOGGED_OUT,
  LOGGING_CONFIRM_MESSAGE,
  START_NEW_TRAINING_CAPTION,
  TRAINING_OFF,
  TRAINING_ON,
} from "../constants/constants";

import { useRedirectIfLoggedOut } from "../utils/useRedirectIfLoggedOut";
import { Title } from "../components/Title";
import { useState } from "react";
import { ConfirmModal } from "../components/ConfirmModal";
import { usePageTitle } from "../utils/usePageTitle";
import { useRedirectToSummary } from "../utils/useRedirectToSummary";
import { useRedirectToTraining } from "../utils/useRedirectToTraining";
import { Button } from "../components/Button";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";
import { useAtomValue, useSetAtom } from "jotai";
import { appStateAtom } from "../atoms/app-state-atom";
import { trainingStateAtom } from "../atoms/training-state-atom";

export const Home = () => {
  const [isLogoutPressed, setIsLoggoutPressed] = useState(false);

  const setCurrentTrainingId = useSetAtom(currentTrainingIdAtom);
  const appStateValue = useAtomValue(appStateAtom);
  const setAppStateValue = useSetAtom(appStateAtom);
  const trainingStateValue = useAtomValue(trainingStateAtom);
  const setTraningStateValue = useSetAtom(trainingStateAtom);

  const isTrainingOn = trainingStateValue === TRAINING_ON;
  const trainingButtonCaption = isTrainingOn
    ? CURRENT_TRAINING_CAPTION
    : START_NEW_TRAINING_CAPTION;

  const redirectToTraining = useRedirectToTraining();
  const redirectToSummary = useRedirectToSummary();

  const startNewTraining = () => {
    redirectToTraining();
  };
  const handleIsLogoutPressed = () => {
    setIsLoggoutPressed(true);
  };
  const logOutConfirmAccepted = () => {
    setAppStateValue(LOGGED_OUT);
    setTraningStateValue(TRAINING_OFF);
    setIsLoggoutPressed(false);
    setCurrentTrainingId(null);
  };
  const logOutConfirmDeclined = () => {
    setIsLoggoutPressed(false);
  };

  usePageTitle("Home");
  useRedirectIfLoggedOut(appStateValue);

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
          confirmMessage={LOGGING_CONFIRM_MESSAGE}
          confirmAcceptFunction={logOutConfirmAccepted}
          confirmDeclineFunction={logOutConfirmDeclined}
        />
      )}
    </>
  );
};
