import {
  CURRENT_TRAINING_CAPTION,
  HOME_ACTIVE_BUTTON_LOGOUT,
  HOME_ACTIVE_BUTTON_NULL,
  HOME_ACTIVE_BUTTON_TRAINING,
  HOME_PAGE_TITLE,
  START_NEW_TRAINING_CAPTION,
  TRAINING_ON,
} from "../constants/constants";

import { Title } from "../components/the-title";
import { useState } from "react";
import { usePageTitle } from "../utils/use-page-title";
import { useRedirectToSummary } from "../utils/use-redirect-to-summary";
import { useRedirectToTraining } from "../utils/use-redirec-to-training";
import { Button } from "../components/the-button";
import { useAtomValue } from "jotai";
import { trainingStateAtom } from "../atoms/training-state-atom";

import { HomeConfirmModal } from "../components/home-confirm-modal";
import { ActiveHomeButton } from "../constants/types";

export const Home = () => {
  const [activeButton, setActiveButton] = useState<ActiveHomeButton>(null);

  const trainingStateValue = useAtomValue(trainingStateAtom);

  const redirectToTraining = useRedirectToTraining();
  const redirectToSummary = useRedirectToSummary();
  usePageTitle(HOME_PAGE_TITLE);

  const isTrainingOn = trainingStateValue === TRAINING_ON;

  const trainingButtonCaption = isTrainingOn
    ? CURRENT_TRAINING_CAPTION
    : START_NEW_TRAINING_CAPTION;

  const handleIsTrainingPressed = () => {
    if (isTrainingOn) {
      setActiveButton(HOME_ACTIVE_BUTTON_NULL);
      redirectToTraining();
    } else {
      setActiveButton(HOME_ACTIVE_BUTTON_TRAINING);
    }
  };
  const handleIsLogoutPressed = () => {
    setActiveButton(HOME_ACTIVE_BUTTON_LOGOUT);
  };

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
      <HomeConfirmModal
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
    </>
  );
};