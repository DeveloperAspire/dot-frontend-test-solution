import Nominee from "../Nominee";
import styles from "./category.module.scss";

const Category = () => {
  return (
    <section className={styles["container"]}>
      <div className={styles["container__heading"]}>Category 1</div>
      <div className={styles["container__cards"]}>
        <Nominee />
      </div>
    </section>
  );
};

export default Category;
