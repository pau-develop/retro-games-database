interface ButtonProps {
  buttonClass: string;
  text: string;
  validateAction?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => Promise<boolean | void>;

  action?: () => void;
}

const Button = ({ buttonClass, text, validateAction, action }: ButtonProps) => {
  return (
    <>
      <button
        className={buttonClass}
        onClick={validateAction === undefined ? action : validateAction}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
