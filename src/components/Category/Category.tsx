import Nominee from "../Nominee";
import styles from "./category.module.scss";

interface CategoryProps {
  items: any[];
  title: string;
  handleSelection: (category: string, nomineeId: string) => void;
  selections: any[];
}

const Category: React.FC<CategoryProps> = ({
  title,
  items,
  handleSelection,
  selections,
}) => {
  return (
    <section className={styles["container"]}>
      <div className={styles["container__heading"]}>{title}</div>
      <div className={styles["container__cards"]}>
        {items.map((nominee) => (
          <Nominee
            name={nominee.title}
            image={nominee.photoUrL}
            key={nominee.id}
            category={title}
            handleSelection={handleSelection}
            selections={selections}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
