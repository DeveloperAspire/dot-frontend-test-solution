import { useEffect, useState } from "react";
import api from "./Api/Api";
import Category from "./components/Category";

import styles from "./App.module.scss";

function App() {
  const [ballot, setBallot] = useState([]);
  useEffect(() => {
    fetchBallotData();
  }, []);

  const fetchBallotData = async () => {
    const response = await api.getBallotData();

    const { items } = response;

    setBallot(items);
  };

  return (
    <div className={styles["container"]}>
      <h1 className={styles["container__heading"]}>Golden Globe Award</h1>
      {ballot.length === 0 ? (
        <p>Loading</p>
      ) : (
        ballot.map((ballotItem: any) => (
          <Category
            key={ballotItem.id}
            items={ballotItem.items}
            title={ballotItem.title}
          />
        ))
      )}
    </div>
  );
}

export default App;
