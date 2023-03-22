import { useEffect, useState } from "react";
import api from "./Api/Api";
import Category from "./components/Category";
import Button from "./components/Button";
import Modal from "./components/Modal";

import styles from "./App.module.scss";
import { SelectionType } from "./utils/types";

function App() {
  const [ballot, setBallot] = useState([]);
  const [selections, setSelections] = useState<SelectionType[]>([]);
  const [toggleModal, setToggleModal] = useState(false);

  useEffect(() => {
    fetchBallotData();
  }, []);

  const fetchBallotData = async () => {
    const response = await api.getBallotData();

    const { items } = response;

    setBallot(items);
  };

  const handleToggleModal = () => {
    setToggleModal((prev) => !prev);
  };

  const handleSelection = (category: string, nominee: string) => {
    const newSelection = {
      category,
      nominee,
    };

    const existingItem = selections.find(
      (selected) => newSelection.category === selected.category
    );

    if (existingItem) {
      const updatedSelections = selections.map((selected) =>
        selected.category === existingItem.category
          ? { ...selected, nominee: newSelection.nominee }
          : { ...selected }
      );

      setSelections(updatedSelections);
    } else {
      setSelections([...selections, { ...newSelection }]);
    }
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
            handleSelection={handleSelection}
            selections={selections}
          />
        ))
      )}
      <div className={styles["container__btn-container"]}>
        <Button text="Submit Vote" handleClick={handleToggleModal} />
      </div>

      <Modal show={toggleModal} handleToogle={handleToggleModal} />
    </div>
  );
}

export default App;
