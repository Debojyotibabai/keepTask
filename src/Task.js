import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./Task.module.css";
const Task = (props) => {
  return (
    <div className={styles.main_card}>
      <div className={styles.main_card_header}>
        <h3 className={styles.card_tile}>{props.title}</h3>
      </div>
      <p className={styles.card_detail}>{props.detail}</p>
      <button onClick={props.delete} className={styles.card_button}>
        <DeleteIcon />
      </button>
    </div>
  );
};
export default Task;
