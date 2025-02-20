import React, { createContext, useState } from 'react';

// task data using context
export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Example Task', notes: '', timeSpent: 0 }
    ]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const updateTask = (id, updatedTask) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};