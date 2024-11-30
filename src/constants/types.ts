import { TRAINING_OFF, TRAINING_ON } from "./constants";

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

type ExerciseSetId = string;

export type ExerciseSet =
  | {
      id: ExerciseSetId;
      type: "Incline dumbbell press";
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: "Dumbbell flyes";
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: "Push up";
      reps: number;
    };

// all sets of single exercise
export type ExerciseSets = Record<ExerciseSetId, ExerciseSet>;

export type ExerciseId = string;

// all exercises of particular body part (i.e. chest, back, legs)
export type Exercise = {
  id: ExerciseId;
  exerciseTypeId: string;
  exerciseSetIds: string[];
};

// all exercises of single training day
export type Exercises = Record<ExerciseId, Exercise>;

type TrainingId = string;

// single training day
export type Training = {
  id: TrainingId;
  date: number;
  exerciseIds: string[];
};

// all trainings
export type Trainings = Record<TrainingId, Training>;

export type SelectExercises =
  | "Incline dumbbell press"
  | "Dumbbell flyes"
  | "Push up";
