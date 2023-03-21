import Ballot from "./components/Ballot/Ballot";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["container__heading"]}>Golden Globe Award</h1>
      <Ballot />
    </div>
  );
}

export default App;
