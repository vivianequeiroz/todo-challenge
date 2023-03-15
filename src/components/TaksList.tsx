import { TaskStatus } from "./TaskStatus";

import styles from "./TaskList.module.css";
import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from "react";

interface TaskListProps {
  content: string;
  onDeleteTask: (content: string) => void;
  onChangeTaskStatus: (content: string, isFinished: boolean) => void;
}

export function TaskList({
  content,
  onDeleteTask,
  onChangeTaskStatus,
}: TaskListProps) {
  const [isCheckBoxSelected, setIsCheckBoxSelected] = useState(false);
  const [checkBoxTitle, setCheckBoxTitle] = useState("Mark task as completed");

  function handleCheckboxSelect() {
    setIsCheckBoxSelected(!isCheckBoxSelected);

    if (!isCheckBoxSelected) {
      const isTaskFinished = true;

      setCheckBoxTitle("Unmark task as completed");
      handleTaskStatusChange(isTaskFinished);
      return;
    }

    const isTaskFinished = false;

    setCheckBoxTitle("Mark task as completed");
    handleTaskStatusChange(isTaskFinished);
  }

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleTaskStatusChange(isFinished: boolean) {
    onChangeTaskStatus(content, isFinished);
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
        <button onClick={handleDeleteTask} title="Delete task">
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
}
