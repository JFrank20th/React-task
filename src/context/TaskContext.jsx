import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext();

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            descripcion: task.descripcion
        }]) //copiar todo de ...tasks(dato originales) y añadele task
    };

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    useEffect(() => {
        setTasks(data)
    }, []);

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}> {props.children}
        </TaskContext.Provider>
    )
}

