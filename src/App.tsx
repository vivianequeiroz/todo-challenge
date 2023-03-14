import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaksList";
import { TaskStatus } from "./components/TaskStatus";
import "./index.css";

export interface Task {
  id: number;
  content: string;
}

const tasksList: Task[] = [
  {
    id: 1,
    content: "Study react so I can perform better at work!",
  },
  {
    id: 2,
    content: "Go to the gym",
  },
  {
    id: 3,
    content: "Eat at every 3 hours",
  },
];

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.coreApp}>
        <TaskInput />
        <div className={styles.taskStatusWrapper}>
          <TaskStatus />
        </div>
        {tasksList.map((task) => {
          return <TaskList content={task.content} key={task.id} id={task.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
