import styles from "./nominee.module.scss";

interface NomineeProps {
  name: string;
  image: string;
}

const Nominee: React.FC<NomineeProps> = ({ name, image }) => {
  return (
    <article className={styles["container"]}>
      <p> {name}</p>
      <div className={styles["container__image"]}>
        <img src={image} alt={name} />
      </div>
      <button className={styles["container__button"]}>Nominate</button>
    </article>
  );
};

export default Nominee;
