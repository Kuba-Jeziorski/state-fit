import {
  CURRENT_TRAINING_CAPTION,
  FAQ_CAPTION,
  HOME_ACTIVE_BUTTON_LOGOUT,
  HOME_ACTIVE_BUTTON_NULL,
  HOME_ACTIVE_BUTTON_TRAINING,
  HOME_PAGE_TAB_TITLE,
  HOME_PAGE_TITLE,
  LOG_OUT_CAPTION,
  SEE_SUMMARY_CAPTION,
  START_NEW_TRAINING_CAPTION,
  TRAINING_ON,
} from "../constants/constants";

import { Title } from "../components/the-title";
import { useState } from "react";
import { usePageTitle } from "../utils/use-page-title";
import { Button } from "../components/the-button";
import { useAtomValue } from "jotai";
import { trainingStateAtom } from "../atoms/training-state-atom";

import { HomeConfirmModal } from "../components/home-confirm-modal";
import { ActiveHomeButton } from "../constants/types";
import { useRedirectToPage } from "../utils/use-redirect-to-page";

export const Home = () => {
  const [activeButton, setActiveButton] = useState<ActiveHomeButton>(null);

  const trainingStateValue = useAtomValue(trainingStateAtom);

  const redirectToTraining = useRedirectToPage("training");
  const redirectToSummary = useRedirectToPage("summary");
  const redirectToFAQ = useRedirectToPage("faq");
  usePageTitle(HOME_PAGE_TAB_TITLE);

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
      <Title tag="h1">{HOME_PAGE_TITLE}</Title>
      <div className="buttonWrapper">
        <Button
          caption={trainingButtonCaption}
          handleFunction={handleIsTrainingPressed}
          classes="button primary"
        />
        <Button
          caption={SEE_SUMMARY_CAPTION}
          handleFunction={redirectToSummary}
          classes="button primary"
        />
        <Button
          caption={FAQ_CAPTION}
          handleFunction={redirectToFAQ}
          classes="button primary"
        />
        <Button
          caption={LOG_OUT_CAPTION}
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
