import { useAtomValue, useSetAtom } from "jotai";
import { exercisesAtom } from "../atoms/exercises-atom";
import { SingleExercise } from "./SingleExercise";
import { exerciseCreateAtom } from "../atoms/writeonly/exercise-create-atom";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";
import { Button } from "./Button";
import {
  ANOTHER_EXERCISE_CAPTION,
  FIRST_EXERCISE_CAPTION,
} from "../constants/constants";

export const AllExercises = () => {
  const exercises = useAtomValue(exercisesAtom);
  const addExercise = useSetAtom(exerciseCreateAtom);
  const currentTrainingId = useAtomValue(currentTrainingIdAtom);

  const isExercisesEmpty = Object.keys(exercises).length === 0;

  const buttonCaption = isExercisesEmpty
    ? FIRST_EXERCISE_CAPTION
    : ANOTHER_EXERCISE_CAPTION;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addExercise();
  };

  return (
    <>
      <h2>Current training id: {currentTrainingId}</h2>
      {exercises &&
        Object.keys(exercises).map((key) => {
          console.log(key);
          return <SingleExercise key={key} exerciseId={key} />;
        })}

      <Button
        caption={buttonCaption}
        handleFunction={handleClick}
        classes="button primary"
      />
    </>
  );
};
