import styles from "./modal.module.scss";

interface ModalProps {
  show: boolean;
  handleToogle: () => void;
}
const Modal: React.FC<ModalProps> = ({ show, handleToogle }) => {
  const overlayStyles = show
    ? `${styles["overlay"]} ${styles["overlay--active"]}`
    : `${styles["overlay"]}`;

  return (
    <div className={overlayStyles}>
      <div className={styles["overlay__content"]}>
        <button onClick={handleToogle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        Vote submitted successfully
      </div>
    </div>
  );
};

export default Modal;
