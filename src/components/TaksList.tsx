import { TaskStatus } from "./TaskStatus";

import styles from "./TaskList.module.css";
import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from "react";
import { Task } from "../App";

export function TaskList({ content }: Task) {
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
      <div className={styles.taskStatusWrapper}></div>

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
            <p
              className={
                isCheckBoxSelected ? styles.scratchText : styles.normalText
              }
            >
              {content}
            </p>
          </div>
        </div>
        <button title="Delete task">
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
}
