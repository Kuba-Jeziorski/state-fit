import { useNavigate } from "react-router-dom";
import { AppState, TrainingState } from "../constants/types";
import { useEffect } from "react";
import { LOGGED_IN, LOGGED_OUT, TRAINING_OFF } from "../constants/constants";

export const useRedirectIfTrainingOff = (
  appState: AppState,
  trainingState: TrainingState
) => {
  const navigate = useNavigate();

  console.log(appState);

  useEffect(() => {
    if (trainingState === TRAINING_OFF && appState === LOGGED_OUT) {
      navigate("/");
    }
    if (trainingState === TRAINING_OFF && appState === LOGGED_IN) {
      navigate("/summary");
    }
  }, [appState, trainingState, navigate]);
};
