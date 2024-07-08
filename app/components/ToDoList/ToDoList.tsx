"use client"
import { link } from "fs"
import styles from "./ToDoList.module.css"
import { useState } from "react"
import { text } from "stream/consumers"

interface Task {
    text: string,
    completed: boolean
}

const ToDoList = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [newTask, setNewTask] = useState('')

    const onChange = (e: any) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
        if (newTask !== '') {
            setTasks([...tasks, {text: newTask, completed: false}])
            setNewTask('')
        }
    }

    const deleteTask = (index: number) => {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    const toggleCompletion = (index: number) => {
        const updatedTasks = tasks.map((task, i) => 
            index === i ? {...task, completed: !task.completed} : task
        )
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
                            <span className={styles.txt}
                                  style={{
                                    textDecoration: task.completed ? 'line-through' : 'none',
                                    color: task.completed ? 'red' : 'black'
                                  }}
                                  onClick={() => toggleCompletion(index)}
                                  >{task.text}</span>
                            <button className={styles.dltBtn} onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    )
                }
            </div>
        </div>
    )
}
export default ToDoList