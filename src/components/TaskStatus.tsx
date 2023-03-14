import styles from "./TaskStatus.module.css";

export function TaskStatus() {
  return (
    <div className={styles.statusWrapper}>
      <div className={styles.createdTasks}>
        <strong>Created tasks</strong>
        <span>0</span>
      </div>
      <div className={styles.finishedTasks}>
        <strong>Finished</strong>
        <span>2 of 5</span>
      </div>
    </div>
  );
}
