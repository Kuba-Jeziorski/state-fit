import { SelectExercises } from "./types";

export const LOGGED_OUT = "logged-out";
export const LOGGED_IN = "logged-in";
export const loggingConfirmMessage = "Are you sure you want to log out?";

export const TRAINING_ON = "training-on";
export const TRAINING_OFF = "training-off";
export const NEW_TRAINING_CONFIRM_MESSAGE =
  "Do you want to start new training?";
export const FINISH_TRAINING_CONFIRM_MESSAGE =
  "Do you want to finish the training?";

export const ALL_CHEST_EXERCISES: SelectExercises[] = [
  "Incline dumbbell press",
  "Dumbbell flyes",
  "Push up",
];

export const DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE = 0;
