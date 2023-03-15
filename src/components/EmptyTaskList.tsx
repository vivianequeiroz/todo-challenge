import { Notepad } from "phosphor-react";
import styles from "./EmptyTaskList.module.css";

export function EmptyTaskList() {
  return (
    <div>
      <hr />
      <div className={styles.emptyListWrapper}>
        <Notepad size={64} />
        <strong>You have no tasks created yet</strong>
        <p>Create new tasks and organize your daily routine</p>
      </div>
    </div>
  );
}
