import { TaskStatus } from "./TaskStatus";

import styles from "./TaskList.module.css";

export function TaskList() {
  return (
    <div>
      <div className={styles.taskStatusWrapper}>
        <TaskStatus />
      </div>
    </div>
  );
}
