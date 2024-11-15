type ButtonProps = {
  caption: string;
  handleFunction: (e: React.MouseEvent<HTMLButtonElement>) => void;
  classes?: string;
};

export const Button = ({ caption, handleFunction, classes }: ButtonProps) => {
  return (
    <button className={classes} onClick={handleFunction}>
      {caption}
    </button>
  );
};

/*
{isExercisesEmpty ? (
        <p>Add first exercise</p>
      ) : (
        <p>Add another exercise</p>
      )}
*/
