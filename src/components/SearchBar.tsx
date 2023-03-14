import { PlusCircle } from "phosphor-react";
import styles from "./SearchBar.module.css";

export function SearchBar() {
  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.searchInput}
        placeholder="Add a new task"
      ></input>
      <button className={styles.searchButton}>
        Create
        <span>
          <PlusCircle size={18} />
        </span>
      </button>
    </div>
  );
}
