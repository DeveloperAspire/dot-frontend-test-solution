import Button from "../Button";

import styles from "./nominee.module.scss";

interface NomineeProps {
  name: string;
  image: string;
  handleSelection: (category: string, nominee: string) => void;
  category: string;
  selections: any[];
}

const Nominee: React.FC<NomineeProps> = ({
  name,
  image,
  handleSelection,
  category,
  selections,
}) => {
  const handleClick = () => {
    handleSelection(category, name);
  };

  const handleCheckSelected = (category: string, nominee: string) => {
    const existingSelection = selections.find(
      (selected) =>
        selected.category === category && selected.nominee === nominee
    );

    return Boolean(existingSelection);
  };

  const isSelected = handleCheckSelected(category, name);

  const selectedCard = isSelected
    ? `${styles["container"]} ${styles["container--selected"]}`
    : `${styles["container"]}`;
  return (
    <article className={selectedCard}>
      <p> {name}</p>
      <div className={styles["container__image"]}>
        <img src={image} alt={name} />
      </div>
      <Button text="Nominate" handleClick={handleClick} />
    </article>
  );
};

export default Nominee;
