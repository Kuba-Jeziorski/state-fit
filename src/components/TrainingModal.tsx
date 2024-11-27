import { useAtom, useSetAtom } from "jotai";
import { trainingModalStateAtom } from "../atoms/training-modal-state-atom";
import { trainingStateAtom } from "../atoms/training-state-atom";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";
import { trainingsAtom } from "../atoms/trainings-atom";
import { exercisesAtom } from "../atoms/exercises-atom";
import { exerciseSetsAtom } from "../atoms/exercise-sets-atom";
import {
  FINISH_TRAINING_CONFIRM_MESSAGE,
  NEW_TRAINING_CONFIRM_MESSAGE,
  TRAINING_MODAL_STATE_FINISH,
  TRAINING_MODAL_STATE_NEW,
  TRAINING_MODAL_STATE_NULL,
  TRAINING_OFF,
  TRAINING_ON,
} from "../constants/constants";
import { startTrainingAtom } from "../atoms/writeonly/start-training-atom";
import { useRedirectToSummary } from "../utils/useRedirectToSummary";
import { useRedirectToHome } from "../utils/useRedirectToHome";
import { ConfirmModal } from "./ConfirmModal";

export const TrainingModal = () => {
  const [trainingModalState, setTrainingModalState] = useAtom(
    trainingModalStateAtom
  );
  const trainingStateValue = useSetAtom(trainingStateAtom);

  const setCurrentTrainingId = useSetAtom(currentTrainingIdAtom);
  const trainingsValue = useSetAtom(trainingsAtom);
  const exercisesValue = useSetAtom(exercisesAtom);
  const exerciseSetsValue = useSetAtom(exerciseSetsAtom);

  const startTraining = useSetAtom(startTrainingAtom);
  const redirectToSummary = useRedirectToSummary();
  const redirectToHome = useRedirectToHome();

  const finishTrainingAccepted = () => {
    trainingStateValue(TRAINING_OFF);
    setCurrentTrainingId(null);
    setTrainingModalState(TRAINING_MODAL_STATE_NULL);
    redirectToSummary();

    trainingsValue({});
    exercisesValue({});
    exerciseSetsValue({});
  };
  const finishTrainingDeclined = () => {
    setTrainingModalState(TRAINING_MODAL_STATE_NULL);
  };
  const newTrainingAccepted = () => {
    trainingStateValue(TRAINING_ON);
    setTrainingModalState(TRAINING_MODAL_STATE_NULL);
    startTraining();
  };
  const newTrainingDeclined = () => {
    redirectToHome();
  };

  if (trainingModalState === TRAINING_MODAL_STATE_NULL) {
    return;
  }

  if (trainingModalState === TRAINING_MODAL_STATE_NEW) {
    return (
      <ConfirmModal
        confirmMessage={NEW_TRAINING_CONFIRM_MESSAGE}
        confirmAcceptFunction={newTrainingAccepted}
        confirmDeclineFunction={newTrainingDeclined}
      />
    );
  }
  if (trainingModalState === TRAINING_MODAL_STATE_FINISH) {
    return (
      <ConfirmModal
        confirmMessage={FINISH_TRAINING_CONFIRM_MESSAGE}
        confirmAcceptFunction={finishTrainingAccepted}
        confirmDeclineFunction={finishTrainingDeclined}
      />
    );
  }
};
