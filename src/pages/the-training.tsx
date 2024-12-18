import {
  FINISH_TRAINING_CAPTION,
  FINISH_TRAINING_CONFIRM_MESSAGE,
  HOME_CAPTION,
  TRAINING_CAPTION,
} from "../constants/constants";
import { Title } from "../components/the-title";
import { TrainingForm } from "../components/training-form";
import { usePageTitle } from "../utils/use-page-title";
import { useRedirectToHome } from "../utils/use-redirect-to-home";
import { Button } from "../components/the-button";
import { ConfirmModal } from "../components/confirm-modal";
import { useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";
import { useRedirectToSummary } from "../utils/use-redirect-to-summary";
import { trainingFinishAtom } from "../atoms/writeonly/training-finish-atom";

export const Training = () => {
  const [trainingFinishModal, setTrainingFinishModal] = useState(false);

  const currentTrainingId = useAtomValue(currentTrainingIdAtom);
  const finishTraining = useSetAtom(trainingFinishAtom);
  const redirectToHome = useRedirectToHome();
  const redirectToSummary = useRedirectToSummary();
  usePageTitle(TRAINING_CAPTION);

  if (currentTrainingId === null) {
    return null;
  }

  const handleFinishTraining = () => {
    setTrainingFinishModal(true);
  };
  const trainingFinishConfirmAccepted = () => {
    finishTraining();
    redirectToSummary();
    setTrainingFinishModal(false);
  };
  const trainingFinishConfirmDeclined = () => {
    setTrainingFinishModal(false);
  };

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
