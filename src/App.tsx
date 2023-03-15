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
  isFinished: boolean;
}

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.coreApp}>
        <TaskInput />
      </div>
    </div>
  );
}

export default App;
