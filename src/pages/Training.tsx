import {
  FINISH_TRAINING_CAPTION,
  FINISH_TRAINING_CONFIRM_MESSAGE,
  HOME_CAPTION,
  TRAINING_CAPTION,
  TRAINING_OFF,
} from "../constants/constants";
import { Title } from "../components/Title";
import { TrainingForm } from "../components/TrainingForm";
import { usePageTitle } from "../utils/usePageTitle";
import { useRedirectToHome } from "../utils/useRedirectToHome";
import { Button } from "../components/Button";
import { ConfirmModal } from "../components/ConfirmModal";
import { useState } from "react";
import { useSetAtom } from "jotai";
import { trainingStateAtom } from "../atoms/training-state-atom";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";
import { useRedirectToSummary } from "../utils/useRedirectToSummary";
import { trainingsAtom } from "../atoms/trainings-atom";
import { exercisesAtom } from "../atoms/exercises-atom";
import { exerciseSetsAtom } from "../atoms/exercise-sets-atom";

export const Training = () => {
  const [trainingFinishModal, setTrainingFinishModal] = useState(false);

  const trainingStateValue = useSetAtom(trainingStateAtom);
  const setCurrentTrainingId = useSetAtom(currentTrainingIdAtom);
  const trainingsValue = useSetAtom(trainingsAtom);
  const exercisesValue = useSetAtom(exercisesAtom);
  const exerciseSetsValue = useSetAtom(exerciseSetsAtom);

  const redirectToHome = useRedirectToHome();
  const redirectToSummary = useRedirectToSummary();

  const handleFinishTraining = () => {
    setTrainingFinishModal(true);
  };
  const trainingFinishConfirmAccepted = () => {
    trainingStateValue(TRAINING_OFF);
    setCurrentTrainingId(null);
    setTrainingFinishModal(false);
    redirectToSummary();

    trainingsValue({});
    exercisesValue({});
    exerciseSetsValue({});
  };
  const trainingFinishConfirmDeclined = () => {
    setTrainingFinishModal(false);
  };

  usePageTitle(TRAINING_CAPTION);

  return (
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
        handleFunction={handleFinishTraining}
        classes="button primary temporary-mt"
      />
      {trainingFinishModal && (
        <ConfirmModal
          confirmAcceptFunction={trainingFinishConfirmAccepted}
          confirmDeclineFunction={trainingFinishConfirmDeclined}
          confirmMessage={FINISH_TRAINING_CONFIRM_MESSAGE}
        />
      )}
    </>
  );
};
