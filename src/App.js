import React, { useEffect, useState } from "react";
import Header from "./Header";
import InputField from "./InputField";
import Task from "./Task";
import styles from "./App.module.css";
import db from "./firebase";

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

  // add task to database
  const addTask = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      title: inputTitle,
      detail: inputDetail,
    });
    setInputTitle("");
    setInputDetail("");
  };

  // set tasks from database on load
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setTask(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  // making cards of task
  const allTasks = task.map((eachTask, eachTaskIndex) => {
    return (
      <Task
        title={eachTask.title}
        detail={eachTask.detail}
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
