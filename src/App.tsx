import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { TaskList } from "./components/TaksList";
import "./index.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.coreApp}>
        <SearchBar />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
