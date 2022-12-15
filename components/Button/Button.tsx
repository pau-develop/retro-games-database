interface ButtonProps {
  buttonClass: string;
  text: string;
  validateAction?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => Promise<boolean | void>;
}

const Button = ({ buttonClass, text, validateAction }: ButtonProps) => {
  return (
    <button className={buttonClass} onClick={validateAction}>
      {text}
    </button>
  );
};

export default Button;
