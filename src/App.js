import React, { useState } from "react";
import Header from "./Header";
import InputField from "./InputField";
import Task from "./Task";
import styles from "./App.module.css";

const App = () => {
  // input values
  const [inputTitle, setInputTitle] = useState("");
  const [inputDetail, setInputDetail] = useState("");

  // task list
  const [task, setTask] = useState([]);

  // get details from input
  const getInputTitle = (e) => {
    setInputTitle(e.target.value);
  };
  const getInputDetail = (e) => {
    setInputDetail(e.target.value);
  };

  // add items to task list
  const addTask = (e) => {
    e.preventDefault();
    if (inputTitle === "" || inputDetail === "") {
      alert("Please fill all fields!");
    } else {
      setTask(() => {
        return [...task, { titleIs: inputTitle, detailIs: inputDetail }];
      });
      setInputTitle("");
      setInputDetail("");
    }
  };

  // delete task card
  const deleteTask = (index) => {
    const newTask = [...task];
    newTask.splice(index, 1);
    setTask(newTask);
  };

  // making cards of task
  const allTasks = task.map((eachTask, eachTaskIndex) => {
    return (
      <Task
        title={eachTask.titleIs}
        detail={eachTask.detailIs}
        delete={deleteTask.bind(this, eachTaskIndex)}
        key={eachTaskIndex}
      />
    );
  });
  return (
    <>
      <Header />
      <InputField
        getInputDetail={getInputDetail}
        getInputTitle={getInputTitle}
        addTask={addTask}
        inputTitleValue={inputTitle}
        inputDetailValue={inputDetail}
      />
      <div className={styles.tasks}>{allTasks}</div>
    </>
  );
};

export default App;
// debojyoti
