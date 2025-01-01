import {
  AB_WHEEL,
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

export type ChestExercises =
  | {
      id: ExerciseSetId;
      type: typeof DUMBBELL_PRESS_FLAT;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof DUMBBELL_PRESS_UPWARDS;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof DUMBBELL_PRESS_DOWNWARDS;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof BARBELL_PRESS_FLAT;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof BARBELL_PRESS_UPWARDS;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof BARBELL_PRESS_DOWNWARDS;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof DUMBBELL_FLYES;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof DIP_CHEST;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof PUSH_UP_FLAT;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof PUSH_UP_UPWARDS;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof PUSH_UP_DOWNWARDS;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof TRX_RING_PUSH_UP;
      reps: number;
    };

export type BackExercises =
  | {
      id: ExerciseSetId;
      type: typeof PULL_UP_BACK;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof LAT_PULLDOWN;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof LAT_PULLDOWN_HAMMER_GRIP;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof ROWING;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof DUMBBELL_SINGLE_ARM_ROW;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof LAT_PULLDOWN_MACHINE_HAMMER_GRIP;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof LAT_PULLDOWN_MACHINE;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof BACK_EXTENSION;
      weight: number;
      reps: number;
    };

export type LegExercises =
  | {
      id: ExerciseSetId;
      type: typeof SQUAT;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof LUNGE;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof LEG_EXTENSION;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof LEG_CURL;
      weight: number;
      reps: number;
    };

export type ShoulderExercises =
  | {
      id: ExerciseSetId;
      type: typeof LATERAL_RAISE;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof FRONT_RAISE;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof SEATED_DUMBBELL_PRESS;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof OVERHEAD_PRESS;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof FACE_PULL;
      weight: number;
      reps: number;
    };

export type BicepsExercises =
  | {
      id: ExerciseSetId;
      type: typeof PULL_UP_BICEPS;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof HAMMER_CURLS;
      weight: number;
      reps: number;
    };

export type TricepsExercises =
  | {
      id: ExerciseSetId;
      type: typeof DIPS_TRICEPS;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof ROPE_PUSHDOWN;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof CLOSE_GRIP_BENCH_PRESS;
      weight: number;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof TRICEPS_PUSH_UP;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof DIAMOND_PUSH_UP;
      reps: number;
    };

export type AbExercises =
  | {
      id: ExerciseSetId;
      type: typeof LEG_RAISE;
      reps: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof AB_WHEEL;
      reps: number;
    };

export type GripExercises = {
  id: ExerciseSetId;
  type: typeof DEAD_HANG;
  time: number;
};

export type CardioExercises =
  | {
      id: ExerciseSetId;
      type: typeof RUNNING;
      distance: number;
      time: number;
    }
  | {
      id: ExerciseSetId;
      type: typeof SWIMMING;
      distance: number;
      time: number;
    };
