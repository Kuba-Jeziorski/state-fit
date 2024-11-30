import {
  CURRENT_TRAINING_CAPTION,
  LOGGING_CONFIRM_MESSAGE,
  START_NEW_TRAINING_CAPTION,
  TRAINING_OFF,
  TRAINING_ON,
} from "../constants/constants";

import { Title } from "../components/Title";
import { useState } from "react";
import { ConfirmModal } from "../components/ConfirmModal";
import { usePageTitle } from "../utils/usePageTitle";
import { useRedirectToSummary } from "../utils/useRedirectToSummary";
import { useRedirectToTraining } from "../utils/useRedirectToTraining";
import { Button } from "../components/Button";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";
import { useAtom, useSetAtom } from "jotai";
import { trainingStateAtom } from "../atoms/training-state-atom";
import { exercisesAtom } from "../atoms/exercises-atom";
import { exerciseSetsAtom } from "../atoms/exercise-sets-atom";
import { trainingsAtom } from "../atoms/trainings-atom";
import { tokenAtom } from "../atoms/readonly/token-atop";
import { startTrainingAtom } from "../atoms/writeonly/start-training-atom";

export const Home = () => {
  const [isLogoutPressed, setIsLoggoutPressed] = useState(false);
  const [isTrainingPressed, setIsTrainingPressed] = useState(false);

  const [trainingStateValue, setTraningState] = useAtom(trainingStateAtom);

  const setCurrentTrainingId = useSetAtom(currentTrainingIdAtom);
  const setTrainings = useSetAtom(trainingsAtom);
  const setExercises = useSetAtom(exercisesAtom);
  const setExerciseSets = useSetAtom(exerciseSetsAtom);
  const setToken = useSetAtom(tokenAtom);
  //
  const startTraining = useSetAtom(startTrainingAtom);

  const isTrainingOn = trainingStateValue === TRAINING_ON;

  const trainingButtonCaption = isTrainingOn
    ? CURRENT_TRAINING_CAPTION
    : START_NEW_TRAINING_CAPTION;

  const redirectToTraining = useRedirectToTraining();
  const redirectToSummary = useRedirectToSummary();

  const handleIsTrainingPressed = () => {
    if (isTrainingOn) {
      redirectToTraining();
    } else {
      setIsTrainingPressed(true);
    }
  };
  const trainingConfirmAccepted = () => {
    setTraningState(TRAINING_ON);
    startTraining();

    setIsTrainingPressed(false);
    redirectToTraining();
  };
  const trainingConfirmDeclined = () => {
    setIsTrainingPressed(false);
  };
  const handleIsLogoutPressed = () => {
    setIsLoggoutPressed(true);
  };
  const logOutConfirmAccepted = () => {
    setToken(null);
    setTraningState(TRAINING_OFF);
    setIsLoggoutPressed(false);
    setCurrentTrainingId(null);
    setTrainings({});
    setExercises({});
    setExerciseSets({});
  };
  const logOutConfirmDeclined = () => {
    setIsLoggoutPressed(false);
  };

  usePageTitle("Home");

  return (
    <>
      <Title tag="h1">Home</Title>
      <div className="buttonWrapper">
        <Button
          caption={trainingButtonCaption}
          handleFunction={handleIsTrainingPressed}
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
      {isTrainingPressed && (
        <ConfirmModal
          confirmMessage={trainingButtonCaption}
          confirmAcceptFunction={trainingConfirmAccepted}
          confirmDeclineFunction={trainingConfirmDeclined}
        />
      )}
    </>
  );
};
