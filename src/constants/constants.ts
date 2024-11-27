import { SelectExercises } from "./types";

export const LOGGED_OUT = "logged-out";
export const LOGGED_IN = "logged-in";
export const LOGGING_CONFIRM_MESSAGE = "Are you sure you want to log out?";

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

export const FIRST_EXERCISE_CAPTION = "ADD FIRST EXERCISE";
export const ANOTHER_EXERCISE_CAPTION = "ADD ANOTHER EXERCISE";

export const FIRST_SET_CAPTION = "ADD FIRST SET";
export const ANOTHER_SET_CAPTION = "ADD ANOTHER SET";

export const DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE = 0;

export const CURRENT_TRAINING_CAPTION = "Current Training";
export const START_NEW_TRAINING_CAPTION = "Start New Training";

export const FINISH_TRAINING_CAPTION = "Finish training";
export const HOME_CAPTION = "HOME";
export const TRAINING_CAPTION = "Training";

export const TRAINING_MODAL_STATE_NEW = "new";
export const TRAINING_MODAL_STATE_FINISH = "finish";
export const TRAINING_MODAL_STATE_NULL = null;
