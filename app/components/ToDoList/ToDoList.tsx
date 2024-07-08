"use client"
import { link } from "fs"
import styles from "./ToDoList.module.css"
import { useState } from "react"

const ToDoList = () => {
    const [tasks, setTasks] = useState<string[]>([])
    const [newTask, setNewTask] = useState('')

    const onChange = (e: any) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
        if (newTask !== '') {
            setTasks([...tasks, newTask])
            setNewTask('')
        }
    }

    const deleteTask = (index: any) => {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.inputWrapper}>
                <input type="text"
                    className={styles.input}
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={onChange}
                />
                <button onClick={addTask}
                        className={styles.addBtn}
                        >Add</button>
            </div>

            <div className={styles.tasksWrapper}>
                {
                    tasks.map((task, index) =>
                        <li key={index} className={styles.task}>
                            <span className={styles.txt}>{task}</span>
                            <button className={styles.dltBtn} onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    )
                }
            </div>
        </div>
    )
}
export default ToDoList