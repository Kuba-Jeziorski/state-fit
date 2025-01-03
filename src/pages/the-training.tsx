import {
  FINISH_TRAINING_CAPTION,
  FINISH_TRAINING_CONFIRM_MESSAGE,
  HOME_CAPTION,
  TRAINING_PAGE_TAB_TITLE,
  TRAINING_PAGE_TITLE,
} from "../constants/constants";
import { Title } from "../components/the-title";
import { usePageTitle } from "../utils/use-page-title";
import { Button } from "../components/the-button";
import { ConfirmModal } from "../components/confirm-modal";
import { useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";
import { trainingFinishAtom } from "../atoms/writeonly/training-finish-atom";
import { AllExercises } from "../components/all-exercises";
import { useRedirectToPage } from "../utils/use-redirect-to-page";

export const Training = () => {
  const [trainingFinishModal, setTrainingFinishModal] = useState(false);

  const currentTrainingId = useAtomValue(currentTrainingIdAtom);
  const finishTraining = useSetAtom(trainingFinishAtom);
  const redirectToHome = useRedirectToPage();
  const redirectToSummary = useRedirectToPage("summary");
  usePageTitle(TRAINING_PAGE_TAB_TITLE);

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
        classes="button primary navigation"
      />
      <Title tag="h1">{TRAINING_PAGE_TITLE}</Title>
      <AllExercises />
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
