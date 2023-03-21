import Category from "./components/Category";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["container__heading"]}>Golden Globe Award</h1>
      <Category />
    </div>
  );
}

export default App;
