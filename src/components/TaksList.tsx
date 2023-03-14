import { TaskStatus } from "./TaskStatus";

import styles from "./TaskList.module.css";
import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from "react";

export function TaskList() {
  const [isCheckBoxSelected, setIsCheckBoxSelected] = useState(false);
  const [checkBoxTitle, setCheckBoxTitle] = useState("Mark task as completed");

  function handleCheckboxSelect() {
    setIsCheckBoxSelected(!isCheckBoxSelected);

    if (!isCheckBoxSelected) {
      setCheckBoxTitle("Unmark task as completed");
      return;
    }

    setCheckBoxTitle("Mark task as completed");
  }

  return (
    <div>
      <div className={styles.taskStatusWrapper}>
        <TaskStatus />
      </div>

      <div className={styles.taskWrapper}>
        <div className={styles.taskEdit}>
          <button onClick={handleCheckboxSelect} title={checkBoxTitle}>
            {isCheckBoxSelected ? (
              <CheckCircle color={"#5E60CE"} size={24} />
            ) : (
              <Circle size={24} color={"#4EA8DE"} />
            )}
          </button>
          <div className={styles.taskContent}>
            <p>Study react so I can perform better at work!</p>
          </div>
        </div>
        <button title="Delete task">
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
}
