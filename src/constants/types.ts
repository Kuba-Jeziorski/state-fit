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
    {
      id: number,
      type: "Incline dumbbell press",
      weight: number,
      reps: number,
    }
    | {
      id: number,
      type: "Dumbbell flyes",
      weight: number,
      reps: number,
    } | {
      id: number,
      type: "Bench press",
      weight: number,
      reps: number,
    }| {
      id: number,
      type: "Dumbbell bench press",
      weight: number,
      reps: number,
    } | {
      id: number,
      type: "Decline dumbbell press",
      weight: number,
      reps: number,
    } | {
      id: number,
      type: "Push up",
      reps: number
    }| {
      id: number,
      type: "Incline push up",
      reps: number
    }| {
      id: number,
      type: "Decline push up",
      reps: number
    }
    
  // | {
  //     id: number;
  //     type: "back";
  //     weight: number;
  //   }
  // | {
  //     id: number;
  //     type: "legs";
  //   }
  // | {
  //     id: number;
  //     type: "running";
  //     distance: number;
  //     pace: number;
  //   };

export type ExerciseSets = Record<string, ExerciseSet>;

export type Exercise = {
  id: string;
  exerciseTypeId: string;
  exerciseSetIds: string[];
};

export type Exercises = Record<string, Exercise>;

export type Training = {
  id: string;
  date: number;
  exerciseIds: string[];
};

export type Trainings = {
  [key: string]: Training;
};
