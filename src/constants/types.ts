import { LOGGED_IN, LOGGED_OUT, TRAINING_OFF, TRAINING_ON } from "./constants";

// appState
export type AppState = typeof LOGGED_IN | typeof LOGGED_OUT;

export type AppStateValue = {
  appState: AppState;
};

export type AppStateUpdater = {
  setAppState: (newState: AppState) => void;
};

export type AppStateValueWithUpdater = AppStateValue & AppStateUpdater;

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

export type ExerciseSet =
  | {
      id: string;
      type: "Incline dumbbell press";
      weight: number;
      reps: number;
    }
  | {
      id: string;
      type: "Dumbbell flyes";
      weight: number;
      reps: number;
    }
  | {
      id: string;
      type: "Push up";
      reps: number;
    };

// all sets of single exercise
export type ExerciseSets = Record<string, ExerciseSet>;

// all exercises of particular body part (i.e. chest, back, legs)
export type Exercise = {
  id: string;
  exerciseTypeId: string;
  exerciseSetIds: string[];
};

// all exercises of single training day
export type Exercises = Record<string, Exercise>;

// single training day
export type Training = {
  id: string;
  date: number;
  exerciseIds: string[];
};

// all trainings
export type Trainings = {
  [key: string]: Training;
};

export type PossibleSelectOptions =
  | "Incline dumbbell press"
  | "Dumbbell flyes"
  | "Push up";
