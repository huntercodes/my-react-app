import React, { useContext, useState } from 'react';
import { TaskContext } from './TaskContext';
import TaskItem from './TaskItem';

// display tasks
const TaskList = () => {
    const { tasks, addTask, updateTask, deleteTask } = useContext(TaskContext);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    // add task
    const handleAddTask = () => {
        if(newTaskTitle.trim() === '') return;
        const newTask = {
            id: Date.now(),
            title: newTaskTitle,
            notes: '',
            timeSpent: 0
        };
        addTask(newTask);
        setNewTaskTitle('');
    };

    const handleUpdateTask = (id, updatedData) => {
        updateTask(id, updatedData);
    };

    return (
        <div>
            <h2>Tasks</h2>
            <div>
                <input
                    type="text"
                    placeholder="New Task Title"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={deleteTask}
                    onUpdate={handleUpdateTask}
                />
            ))}
        </div>
    );
};

export default TaskList;