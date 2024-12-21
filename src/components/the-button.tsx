type ButtonProps = {
  caption: string;
  handleFunction: (e: React.MouseEvent<HTMLButtonElement>) => void;
  classes?: string;
  isActive?: boolean;
};

export const Button = ({
  caption,
  handleFunction,
  classes,
  isActive = false,
}: ButtonProps) => {
  return (
    <button className={classes} onClick={handleFunction} disabled={isActive}>
      {caption}
    </button>
  );
};
