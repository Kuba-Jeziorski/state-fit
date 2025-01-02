import {
  AB_WHEEL,
  ALL_EXERCISE_TYPES_FLATTEN,
  BACK_EXTENSION,
  BARBELL_PRESS_DOWNWARDS,
  BARBELL_PRESS_FLAT,
  BARBELL_PRESS_UPWARDS,
  CLOSE_GRIP_BENCH_PRESS,
  DEAD_HANG,
  DIAMOND_PUSH_UP,
  DIP_CHEST,
  DIPS_TRICEPS,
  DUMBBELL_FLYES,
  DUMBBELL_PRESS_DOWNWARDS,
  DUMBBELL_PRESS_FLAT,
  DUMBBELL_PRESS_UPWARDS,
  DUMBBELL_SINGLE_ARM_ROW,
  FACE_PULL,
  FRONT_RAISE,
  HAMMER_CURLS,
  LAT_PULLDOWN,
  LAT_PULLDOWN_HAMMER_GRIP,
  LAT_PULLDOWN_MACHINE,
  LAT_PULLDOWN_MACHINE_HAMMER_GRIP,
  LATERAL_RAISE,
  LEG_CURL,
  LEG_EXTENSION,
  LEG_RAISE,
  LUNGE,
  OVERHEAD_PRESS,
  PULL_UP_BACK,
  PULL_UP_BICEPS,
  PUSH_UP_DOWNWARDS,
  PUSH_UP_FLAT,
  PUSH_UP_UPWARDS,
  ROPE_PUSHDOWN,
  ROWING,
  RUNNING,
  SEATED_DUMBBELL_PRESS,
  SQUAT,
  SWIMMING,
  TRICEPS_PUSH_UP,
  TRX_RING_PUSH_UP,
} from "./constants";
import { ExerciseSetId } from "./types";

export type RepsExercises = {
  id: ExerciseSetId;
  type:
    | typeof PUSH_UP_FLAT
    | typeof PUSH_UP_UPWARDS
    | typeof PUSH_UP_DOWNWARDS
    | typeof TRX_RING_PUSH_UP
    | typeof TRICEPS_PUSH_UP
    | typeof DIAMOND_PUSH_UP
    | typeof LEG_RAISE
    | typeof AB_WHEEL;
  reps: number;
};

export type TimeExercises = {
  id: ExerciseSetId;
  type: typeof DEAD_HANG;
  time: number;
};

export type WeightRepsExercises = {
  id: ExerciseSetId;
  type:
    | typeof DUMBBELL_PRESS_FLAT
    | typeof DUMBBELL_PRESS_UPWARDS
    | typeof DUMBBELL_PRESS_DOWNWARDS
    | typeof BARBELL_PRESS_FLAT
    | typeof BARBELL_PRESS_UPWARDS
    | typeof BARBELL_PRESS_DOWNWARDS
    | typeof DUMBBELL_FLYES
    | typeof DIP_CHEST
    | typeof PULL_UP_BACK
    | typeof LAT_PULLDOWN
    | typeof LAT_PULLDOWN_HAMMER_GRIP
    | typeof ROWING
    | typeof DUMBBELL_SINGLE_ARM_ROW
    | typeof LAT_PULLDOWN_MACHINE_HAMMER_GRIP
    | typeof LAT_PULLDOWN_MACHINE
    | typeof BACK_EXTENSION
    | typeof SQUAT
    | typeof LUNGE
    | typeof LEG_EXTENSION
    | typeof LEG_CURL
    | typeof LATERAL_RAISE
    | typeof FRONT_RAISE
    | typeof SEATED_DUMBBELL_PRESS
    | typeof OVERHEAD_PRESS
    | typeof FACE_PULL
    | typeof PULL_UP_BICEPS
    | typeof HAMMER_CURLS
    | typeof DIPS_TRICEPS
    | typeof ROPE_PUSHDOWN
    | typeof CLOSE_GRIP_BENCH_PRESS;
  weight: number;
  reps: number;
};

export type TimeDistanceExercises = {
  id: ExerciseSetId;
  type: typeof RUNNING | typeof SWIMMING;
  distance: number;
  time: number;
};

export type AnyExerciseType = (typeof ALL_EXERCISE_TYPES_FLATTEN)[number];
