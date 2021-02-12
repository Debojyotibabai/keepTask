import React from "react";
import styles from "./InputField.module.css";
import AddIcon from "@material-ui/icons/Add";
const InputField = (props) => {
  return (
    <form onSubmit={props.addTask} className={styles.form}>
      <label className={styles.label}>Write your task title</label>
      <input
        onChange={props.getInputTitle}
        className={styles.input}
        type="text"
        placeholder="Title"
        value={props.inputTitleValue}
        autoFocus
      />
      <label className={styles.label}>Write your task detail</label>
      <input
        onChange={props.getInputDetail}
        className={styles.input}
        type="text"
        placeholder="Detail"
        value={props.inputDetailValue}
      />
      <button type="submit" className={styles.button}>
        <AddIcon />
      </button>
    </form>
  );
};
export default InputField;
