import Nominee from "../Nominee";
import styles from "./category.module.scss";

interface CategoryProps {
  items: any[];
  title: string;
}

const Category: React.FC<CategoryProps> = ({ title, items }) => {
  return (
    <section className={styles["container"]}>
      <div className={styles["container__heading"]}>{title}</div>
      <div className={styles["container__cards"]}>
        {items.map((nominee) => (
          <Nominee
            name={nominee.title}
            image={nominee.photoUrL}
            key={nominee.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
