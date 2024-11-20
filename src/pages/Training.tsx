import { useRedirectIfLoggedOut } from "../utils/useRedirectIfLoggedOut";
import {
  TRAINING_OFF,
  TRAINING_ON,
  FINISH_TRAINING_CONFIRM_MESSAGE,
  NEW_TRAINING_CONFIRM_MESSAGE,
  FINISH_TRAINING_CAPTION,
  HOME_CAPTION,
  TRAINING_CAPTION,
} from "../constants/constants";
import { Title } from "../components/Title";
import { TrainingForm } from "../components/TrainingForm";
import { useState } from "react";
import { ConfirmModal } from "../components/ConfirmModal";
import { usePageTitle } from "../utils/usePageTitle";
import { useRedirectToSummary } from "../utils/useRedirectToSummary";
import { useRedirectToHome } from "../utils/useRedirectToHome";
import { Button } from "../components/Button";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";
import { trainingStateAtom } from "../atoms/training-state-atom";
import { appStateAtom } from "../atoms/app-state-atom";
import { startTrainingAtom } from "../atoms/writeonly/start-training-atom";
import { trainingsAtom } from "../atoms/trainings-atom";
import { exercisesAtom } from "../atoms/exercises-atom";
import { exerciseSetsAtom } from "../atoms/exercise-sets-atom";

export const Training = () => {
  const [isFinishTrainingModalVisible, setIsFinishTrainingModalVisible] =
    useState(false);

  const setCurrentTrainingId = useSetAtom(currentTrainingIdAtom);
  const appStateValue = useAtomValue(appStateAtom);
  const [trainingStateValue, setTraningStateValue] = useAtom(trainingStateAtom);
  const trainingsValue = useSetAtom(trainingsAtom);
  const exercisesValue = useSetAtom(exercisesAtom);
  const exerciseSetsValue = useSetAtom(exerciseSetsAtom);

  const isTrainingOn = trainingStateValue === TRAINING_ON;

  const startTraining = useSetAtom(startTrainingAtom);
  const redirectToSummary = useRedirectToSummary();
  const redirectToHome = useRedirectToHome();

  const finishTrainingConfirmation = () => {
    setIsFinishTrainingModalVisible(true);
  };
  const finishTrainingAccepted = () => {
    setTraningStateValue(TRAINING_OFF);
    setCurrentTrainingId(null);
    setIsFinishTrainingModalVisible(false);
    redirectToSummary();

    trainingsValue({});
    exercisesValue({});
    exerciseSetsValue({});
  };
  const finishTrainingDeclined = () => {
    setIsFinishTrainingModalVisible(false);
  };
  const newTrainingAccepted = () => {
    setTraningStateValue(TRAINING_ON);
    startTraining();
  };
  const newTrainingDeclined = () => {
    redirectToHome();
  };

  useRedirectIfLoggedOut(appStateValue);
  usePageTitle(TRAINING_CAPTION);

  return (
    <>
      {isTrainingOn && (
        <>
          <Button
            caption={HOME_CAPTION}
            handleFunction={redirectToHome}
            classes="button primary"
          />
          <Title tag="h1">New training</Title>
          <TrainingForm />
          <Button
            caption={FINISH_TRAINING_CAPTION}
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
