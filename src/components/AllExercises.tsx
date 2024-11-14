import { useAtomValue, useSetAtom } from "jotai";
import { exercisesAtom } from "../atoms/exercises-atom";
import { SingleExercise } from "./SingleExercise";
import { exerciseCreateAtom } from "../atoms/writeonly/exercise-create-atom";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";

export const AllExercises = () => {
  const exercises = useAtomValue(exercisesAtom);
  const addExercise = useSetAtom(exerciseCreateAtom);
  const currentTrainingId = useAtomValue(currentTrainingIdAtom);

  const isExercisesEmpty = Object.keys(exercises).length === 0;

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
      <button onClick={handleClick}>
        {isExercisesEmpty ? (
          <p>Add first exercise</p>
        ) : (
          <p>Add another exercise</p>
        )}
      </button>
    </>
  );
};

// wyciągnąc button do osobnego komponentu
