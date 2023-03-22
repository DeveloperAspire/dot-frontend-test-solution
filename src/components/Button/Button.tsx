import styles from "./button.module.scss";

interface ButtonProps {
  text: string;
  handleClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles["button"]}
      aria-label={text}
    >
      {text}
    </button>
  );
};

export default Button;
