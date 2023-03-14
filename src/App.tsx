import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
