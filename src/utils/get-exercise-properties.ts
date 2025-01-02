import {
  DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
  REPS_EXERCISES,
  TIME_DISTANCE_EXERCISES,
  TIME_EXERCISES,
  WEIGHT_REPS_EXERCISES,
} from "../constants/constants";
import { AnyExerciseType } from "../constants/exercise-types";

export const getExerciseProperties = (selectedExercise: AnyExerciseType) => {
  const exerciseCategories = [
    {
      group: WEIGHT_REPS_EXERCISES,
      properties: {
        weight: DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
        reps: DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
      },
    },
    {
      group: TIME_DISTANCE_EXERCISES,
      properties: {
        time: DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
        distance: DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
      },
    },
    {
      group: REPS_EXERCISES,
      properties: {
        reps: DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
      },
    },
    {
      group: TIME_EXERCISES,
      properties: {
        time: DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
      },
    },
  ];

  for (const category of exerciseCategories) {
    if (
      (category.group as readonly AnyExerciseType[]).includes(selectedExercise)
    ) {
      return category.properties;
    }
  }

  return {};
};
