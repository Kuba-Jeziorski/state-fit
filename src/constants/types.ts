import {
  DUMBBELL_PRESS_FLAT,
  HOME_ACTIVE_BUTTON_LOGOUT,
  HOME_ACTIVE_BUTTON_NULL,
  HOME_ACTIVE_BUTTON_TRAINING,
  PULL_UP_BACK,
  TRAINING_OFF,
  TRAINING_ON,
} from "./constants";
import {
  AbExercises,
  BackExercises,
  BicepsExercises,
  CardioExercises,
  ChestExercises,
  GripExercises,
  LegExercises,
  ShoulderExercises,
  TricepsExercises,
} from "./exercise-types";

// trainingState
export type TrainingState = typeof TRAINING_ON | typeof TRAINING_OFF;

export type TrainingStateValue = {
  trainingState: TrainingState;
};

export type TrainingStateUpdater = {
  setTrainingState: (trainingState: TrainingState) => void;
};

export type TrainingStateValueWithUpdater = TrainingStateValue &
  TrainingStateUpdater;

// trainings

export type ExerciseSetId = string;

export type ExerciseSet =
  | ChestExercises
  | BackExercises
  | LegExercises
  | ShoulderExercises
  | BicepsExercises
  | TricepsExercises
  | AbExercises
  | GripExercises
  | CardioExercises;

// all sets of single exercise
export type ExerciseSets = Record<ExerciseSetId, ExerciseSet | undefined>;

export type ExerciseId = string;

// all exercises of particular body part (i.e. chest, back, legs)
export type Exercise = {
  id: ExerciseId;
  exerciseTypeId: string;
  exerciseSetIds: string[];
};

// all exercises of single training day
export type Exercises = Record<ExerciseId, Exercise | undefined>;

type TrainingId = string;

// single training day
export type Training = {
  id: TrainingId;
  date: number;
  exerciseIds: string[];
};

// all trainings
export type Trainings = Record<TrainingId, Training | undefined>;

export type SelectChestExercises = typeof DUMBBELL_PRESS_FLAT;

export type SelectedBackExercises = typeof PULL_UP_BACK;

export type ActiveHomeButton =
  | typeof HOME_ACTIVE_BUTTON_TRAINING
  | typeof HOME_ACTIVE_BUTTON_LOGOUT
  | typeof HOME_ACTIVE_BUTTON_NULL;
