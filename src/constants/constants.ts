import { SelectChestExercises, SelectedBackExercises } from "./types";

export const HOME_PAGE_TAB_TITLE = "Home";
export const TRAINING_PAGE_TAB_TITLE = "Training";
export const OPENING_PAGE_TAB_TITLE = "Log in";
export const SUMMARY_PAGE_TAB_TITLE = "Summary";

export const HOME_PAGE_TITLE = "HOME";
export const SUMMARY_PAGE_TITLE = "SUMMARY";
export const TRAINING_PAGE_TITLE = "NEW TRAINIG";

export const LOG_OUT_CONFIRM_MESSAGE = "ARE YOU SURE YOU WANT TO LOG OUT?";

export const TRAINING_ON = "training-on";
export const TRAINING_OFF = "training-off";
export const NEW_TRAINING_CONFIRM_MESSAGE =
  "DO YOU WANT TO START NEW TRAINING?";
export const FINISH_TRAINING_CONFIRM_MESSAGE =
  "DO YOU WANT TO FINISH THE TRAINING?";

export const ALL_CHEST_EXERCISES: SelectChestExercises[] = [
  "DUMBBELL FLYERS",
  "INCLINE DUMBBELL PRESS",
  "PUSH UP",
];

export const ALL_BACK_EXERCISES: SelectedBackExercises[] = [
  "PULL UP",
  "LAT PULLDOWN",
];

export const CHEST_EXERCISES = {
  CHEST: ["INCLINE DUMBBELL PRESS", "DUMBBELL FLYERS", "PUSH UP"],
};

export const BACK_EXERCISES = {
  BACK: ["PULL UP", "LAT PULLDOWN"],
};

export const ALL_EXERCISES = { ...CHEST_EXERCISES, ...BACK_EXERCISES };

export const FIRST_EXERCISE_CAPTION = "ADD FIRST EXERCISE";
export const ANOTHER_EXERCISE_CAPTION = "ADD ANOTHER EXERCISE";

export const FIRST_SET_CAPTION = "ADD FIRST SET";
export const ANOTHER_SET_CAPTION = "ADD ANOTHER SET";

export const DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE = 0;

export const CURRENT_TRAINING_CAPTION = "CURRENT TRAINING";
export const START_NEW_TRAINING_CAPTION = "START NEW TRAINING";

export const FINISH_TRAINING_CAPTION = "FINISH TRAINING";
export const HOME_CAPTION = "HOME";
export const TRAINING_CAPTION = "TRAINING";
export const OPENING_CAPTION = "LOG IN";

export const TOKEN_PROVIDED = "token-provided";
export const TOKEN_NOT_PROVIDED = "token-not-provided";
export const TOKEN_PENDING = "token-pending";

export const HOME_ACTIVE_BUTTON_TRAINING = "training";
export const HOME_ACTIVE_BUTTON_LOGOUT = "logout";
export const HOME_ACTIVE_BUTTON_NULL = null;

export const SEE_SUMMARY_CAPTION = "SEE SUMMARY";

export const LOG_OUT_CAPTION = "LOG ME OUT";

export const MODAL_DECLINE_CAPTION = "DECLINE";
export const MODAL_ACCEPT_CAPTION = "ACCEPT";
