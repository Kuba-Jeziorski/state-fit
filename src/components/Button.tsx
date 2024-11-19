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
