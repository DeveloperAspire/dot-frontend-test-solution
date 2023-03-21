import styles from "./nominee.module.scss";

const Nominee = () => {
  return (
    <article className={styles["container"]}>
      <p> Franklin Okolie</p>
      <div className={styles["container__image"]}>
        <img
          src="https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg"
          alt="Nominee"
        />
      </div>
      <button className={styles["container__button"]}>Nominate</button>
    </article>
  );
};

export default Nominee;
