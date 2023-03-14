import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import styles from "./TaskInput.module.css";

export function TaskInput() {
  const [newTask, setNewTask] = useState("");

  const isNewTaskEmpty = newTask.length === 0;

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <form>
      <div className={styles.taskWrapper}>
        <input
          value={newTask}
          onChange={handleNewTaskChange}
          className={styles.taskInput}
          placeholder="Add a new task"
        ></input>
        <button
          disabled={isNewTaskEmpty}
          type="submit"
          className={styles.taskButton}
        >
          Create
          <span>
            <PlusCircle size={18} />
          </span>
        </button>
      </div>
    </form>
  );
}
