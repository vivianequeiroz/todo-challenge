import { PlusCircle } from "phosphor-react";
import styles from "./SearchBar.module.css";

export function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
      ></input>
      <button className={styles.button}>
        Criar
        <span>
          <PlusCircle size={18} />
        </span>
      </button>
    </div>
  );
}
