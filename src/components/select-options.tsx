import { ALL_EXERCISES } from "../constants/constants";

export const SelectOptions = () => {
  return (
    <>
      {Object.entries(ALL_EXERCISES).map(([category, exercises]) => (
        <optgroup key={category} label={category}>
          {exercises.map((exercise) => (
            <option key={exercise}>{exercise}</option>
          ))}
        </optgroup>
      ))}
    </>
  );
};
