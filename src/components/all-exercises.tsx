import { useAtomValue, useSetAtom } from "jotai";
import { SingleExercise } from "./single-exercise";
import { exerciseCreateAtom } from "../atoms/writeonly/exercise-create-atom";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";
import { Button } from "./the-button";
import {
  ANOTHER_EXERCISE_CAPTION,
  FIRST_EXERCISE_CAPTION,
} from "../constants/constants";
import { Title } from "./the-title";
import { currentTrainingExercises } from "../atoms/readonly/current-training-exercises";

export const AllExercises = () => {
  const exercises = useAtomValue(currentTrainingExercises);
  const addExercise = useSetAtom(exerciseCreateAtom);
  const currentTrainingId = useAtomValue(currentTrainingIdAtom);

  const isExercisesEmpty = Object.keys(exercises).length === 0;

  const buttonCaption = isExercisesEmpty
    ? FIRST_EXERCISE_CAPTION
    : ANOTHER_EXERCISE_CAPTION;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addExercise();
    console.log(`addExercise()`);
  };

  console.log(exercises);

  return (
    <>
      <Title tag="h2">Current training id: {currentTrainingId}</Title>
      {exercises.map((exercise) => {
        return <SingleExercise key={exercise.id} exerciseId={exercise.id} />;
      })}

      <div>
        <Button
          caption={buttonCaption}
          handleFunction={handleClick}
          classes="button primary"
        />
      </div>
    </>
  );
};
