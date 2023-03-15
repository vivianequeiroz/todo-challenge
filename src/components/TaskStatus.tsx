import styles from "./TaskStatus.module.css";

interface TaskStatusProps {
  finishedTasks: number;
  createdTasks: number;
}

export function TaskStatus(props: TaskStatusProps) {
  return (
    <div className={styles.statusWrapper}>
      <div className={styles.createdTasks}>
        <strong>Created tasks</strong>
        <span>{props.createdTasks}</span>
      </div>
      <div className={styles.finishedTasks}>
        <strong>Finished</strong>
        <span>
          {props.finishedTasks} of {props.createdTasks}
        </span>
      </div>
    </div>
  );
}
