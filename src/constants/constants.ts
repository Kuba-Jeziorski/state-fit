import { SelectChestExercises, SelectedBackExercises } from "./types";

export const HOME_PAGE_TAB_TITLE = "Home";
export const TRAINING_PAGE_TAB_TITLE = "Training";
export const OPENING_PAGE_TAB_TITLE = "Log in";
export const SUMMARY_PAGE_TAB_TITLE = "Summary";
export const FAQ_PAGE_TAB_TITLE = "FAQ";

export const HOME_PAGE_TITLE = "HOME";
export const SUMMARY_PAGE_TITLE = "SUMMARY";
export const FAQ_PAGE_TITLE = "FAQ";
export const TRAINING_PAGE_TITLE = "NEW TRAINIG";

export const LOG_OUT_CONFIRM_MESSAGE = "ARE YOU SURE YOU WANT TO LOG OUT?";

export const TRAINING_ON = "training-on";
export const TRAINING_OFF = "training-off";
export const NEW_TRAINING_CONFIRM_MESSAGE =
  "DO YOU WANT TO START NEW TRAINING?";
export const FINISH_TRAINING_CONFIRM_MESSAGE =
  "DO YOU WANT TO FINISH THE TRAINING?";

// Exercises
// Chest Exercises
export const DUMBBELL_PRESS_FLAT = "Dumbbell press (flat)";
export const DUMBBELL_PRESS_UPWARDS = "Dumbbell press (upwards)";
export const DUMBBELL_PRESS_DOWNWARDS = "Dumbbell press (downwards)";
export const BARBELL_PRESS_FLAT = "Barbell press (flat)";
export const BARBELL_PRESS_UPWARDS = "Barbell press (upwards)";
export const BARBELL_PRESS_DOWNWARDS = "Barbell press (downwards)";
export const DUMBBELL_FLYES = "Dumbbell flyes";
export const PUSH_UP_FLAT = "Push-up (flat)";
export const PUSH_UP_UPWARDS = "Push-up (upwards)";
export const PUSH_UP_DOWNWARDS = "Push-up (downwards)";
export const TRX_RING_PUSH_UP = "TRX/Ring push-up";
export const DIP_CHEST = "Dip (chest)";

// Back Exercises
export const PULL_UP_BACK = "Pull-up (back)";
export const LAT_PULLDOWN = "Lat Pulldown";
export const LAT_PULLDOWN_HAMMER_GRIP = "Lat Pulldown (hammer grip)";
export const ROWING = "Rowing";
export const DUMBBELL_SINGLE_ARM_ROW = "Dumbbell Single-Arm Row";
export const LAT_PULLDOWN_MACHINE_HAMMER_GRIP =
  "Lat Pulldown (machine, hammer grip)";
export const LAT_PULLDOWN_MACHINE = "Lat Pulldown (machine)";
export const BACK_EXTENSION = "Back Extension";

// Leg Exercises
export const SQUAT = "Squat";
export const LUNGE = "Lunge";
export const LEG_EXTENSION = "Leg extension";
export const LEG_CURL = "Leg curl";

// Shoulder Exercises
export const LATERAL_RAISE = "Lateral raise";
export const FRONT_RAISE = "Front raise";
export const SEATED_DUMBBELL_PRESS = "Seated dumbbell press";
export const OVERHEAD_PRESS = "Overhead press";
export const FACE_PULL = "Face pull";

// Biceps Exercises
export const PULL_UP_BICEPS = "Pull-up (biceps)";
export const HAMMER_CURLS = "Hammer curls";

// Triceps Exercises
export const DIPS_TRICEPS = "Dips (triceps)";
export const TRICEPS_PUSH_UP = "Triceps push-up";
export const DIAMOND_PUSH_UP = "Diamond push-up";
export const ROPE_PUSHDOWN = "Rope pushdown";
export const CLOSE_GRIP_BENCH_PRESS = "Close grip bench press";

// Abs Exercises
export const LEG_RAISE = "Leg raise";
export const AB_WHEEL = "AB Wheel";

// Grip/Forearm Exercises
export const DEAD_HANG = "Dead hang";

// Cardio Exercises
export const RUNNING = "Running";
export const SWIMMING = "Swimming";

export const ALL_CHEST_EXERCISES: SelectChestExercises[] = [
  DUMBBELL_PRESS_FLAT,
];

export const ALL_BACK_EXERCISES: SelectedBackExercises[] = [PULL_UP_BACK];

export const CHEST_EXERCISES = {
  CHEST: [DUMBBELL_PRESS_FLAT],
};

export const BACK_EXERCISES = {
  BACK: [PULL_UP_BACK],
};

export const CARDIO_EXERCISES = {
  CARDIO: [RUNNING],
};

export const ALL_EXERCISES = {
  ...CHEST_EXERCISES,
  ...BACK_EXERCISES,
  ...CARDIO_EXERCISES,
};

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

export const FAQ_CAPTION = "FAQ";

export const LOG_OUT_CAPTION = "LOG ME OUT";

export const MODAL_DECLINE_CAPTION = "DECLINE";
export const MODAL_ACCEPT_CAPTION = "ACCEPT";
