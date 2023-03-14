import { PlusCircle } from "phosphor-react";
import styles from "./SearchBar.module.css";

export function SearchBar() {
  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.searchInput}
        placeholder="Adicione uma nova tarefa"
      ></input>
      <button className={styles.searchButton}>
        Criar
        <span>
          <PlusCircle size={18} />
        </span>
      </button>
    </div>
  );
}
