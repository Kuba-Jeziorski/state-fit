import { useNavigate } from "react-router-dom";
import { AppState, TrainingState } from "../constants/types";
import { useEffect } from "react";
import { LOGGED_IN, LOGGED_OUT, TRAINING_OFF } from "../constants/constants";

export const useRedirectIfTrainingOff = (
  appState: AppState,
  trainingState: TrainingState
) => {
  const navigate = useNavigate();
  const isTrainingOffAndLoggedOut =
    trainingState === TRAINING_OFF && appState === LOGGED_OUT;
  const isTrainingOffAndLoggedIn =
    trainingState === TRAINING_OFF && appState === LOGGED_IN;

  useEffect(() => {
    if (isTrainingOffAndLoggedOut) {
      navigate("/");
    }
    if (isTrainingOffAndLoggedIn) {
      navigate("/summary");
    }
  }, [isTrainingOffAndLoggedOut, isTrainingOffAndLoggedIn, navigate]);
};
