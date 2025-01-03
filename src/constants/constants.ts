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

// Exercise types
export const WEIGHT_REPS_EXERCISES = [
  DUMBBELL_PRESS_FLAT,
  DUMBBELL_PRESS_UPWARDS,
  DUMBBELL_PRESS_DOWNWARDS,
  BARBELL_PRESS_FLAT,
  BARBELL_PRESS_UPWARDS,
  BARBELL_PRESS_DOWNWARDS,
  DUMBBELL_FLYES,
  DIP_CHEST,
  PULL_UP_BACK,
  LAT_PULLDOWN,
  LAT_PULLDOWN_HAMMER_GRIP,
  ROWING,
  DUMBBELL_SINGLE_ARM_ROW,
  LAT_PULLDOWN_MACHINE_HAMMER_GRIP,
  LAT_PULLDOWN_MACHINE,
  BACK_EXTENSION,
  SQUAT,
  LUNGE,
  LEG_EXTENSION,
  LEG_CURL,
  LATERAL_RAISE,
  FRONT_RAISE,
  SEATED_DUMBBELL_PRESS,
  OVERHEAD_PRESS,
  FACE_PULL,
  PULL_UP_BICEPS,
  HAMMER_CURLS,
  DIPS_TRICEPS,
  ROPE_PUSHDOWN,
  CLOSE_GRIP_BENCH_PRESS,
] as const;

export const TIME_DISTANCE_EXERCISES = [RUNNING, SWIMMING] as const;

export const REPS_EXERCISES = [
  PUSH_UP_FLAT,
  PUSH_UP_UPWARDS,
  PUSH_UP_DOWNWARDS,
  TRX_RING_PUSH_UP,
  TRICEPS_PUSH_UP,
  DIAMOND_PUSH_UP,
  LEG_RAISE,
  AB_WHEEL,
] as const;

export const TIME_EXERCISES = [DEAD_HANG] as const;

const ALL_EXERCISE_TYPES = [
  ...WEIGHT_REPS_EXERCISES,
  TIME_DISTANCE_EXERCISES,
  REPS_EXERCISES,
  TIME_EXERCISES,
];

export const ALL_EXERCISE_TYPES_FLATTEN = ALL_EXERCISE_TYPES.flat();

// Exercise names
export const CHEST_EXERCISE_NAMES = {
  CHEST: [
    DUMBBELL_PRESS_FLAT,
    DUMBBELL_PRESS_UPWARDS,
    DUMBBELL_PRESS_DOWNWARDS,
    BARBELL_PRESS_FLAT,
    BARBELL_PRESS_UPWARDS,
    BARBELL_PRESS_DOWNWARDS,
    DUMBBELL_FLYES,
    PUSH_UP_FLAT,
    PUSH_UP_UPWARDS,
    PUSH_UP_DOWNWARDS,
    TRX_RING_PUSH_UP,
    DIP_CHEST,
  ],
};

export const BACK_EXERCISE_NAMES = {
  BACK: [
    PULL_UP_BACK,
    LAT_PULLDOWN,
    LAT_PULLDOWN_HAMMER_GRIP,
    ROWING,
    DUMBBELL_SINGLE_ARM_ROW,
    LAT_PULLDOWN_MACHINE_HAMMER_GRIP,
    LAT_PULLDOWN_MACHINE,
    BACK_EXTENSION,
  ],
};

export const LEG_EXERCISE_NAMES = {
  LEGS: [SQUAT, LUNGE, LEG_EXTENSION, LEG_CURL],
};

export const SHOULDER_EXERCISE_NAMES = {
  SHOULDERS: [
    LATERAL_RAISE,
    FRONT_RAISE,
    SEATED_DUMBBELL_PRESS,
    OVERHEAD_PRESS,
    FACE_PULL,
  ],
};

export const BICEPS_EXERCISE_NAMES = {
  BICEPS: [PULL_UP_BICEPS, HAMMER_CURLS],
};

export const TRICEPS_EXERCISE_NAMES = {
  TRICEPS: [
    DIPS_TRICEPS,
    TRICEPS_PUSH_UP,
    DIAMOND_PUSH_UP,
    ROPE_PUSHDOWN,
    CLOSE_GRIP_BENCH_PRESS,
  ],
};

export const ABS_EXERCISE_NAMES = {
  ABS: [LEG_RAISE, AB_WHEEL],
};

export const GRIP_FOREARM_EXERCISE_NAMES = {
  "GRIP FOREARMS": [DEAD_HANG],
};

export const CARDIO_EXERCISE_NAMES = {
  CARDIO: [RUNNING, SWIMMING],
};

export const ALL_EXERCISES = {
  ...CHEST_EXERCISE_NAMES,
  ...BACK_EXERCISE_NAMES,
  ...LEG_EXERCISE_NAMES,
  ...SHOULDER_EXERCISE_NAMES,
  ...BICEPS_EXERCISE_NAMES,
  ...TRICEPS_EXERCISE_NAMES,
  ...ABS_EXERCISE_NAMES,
  ...GRIP_FOREARM_EXERCISE_NAMES,
  ...CARDIO_EXERCISE_NAMES,
};
