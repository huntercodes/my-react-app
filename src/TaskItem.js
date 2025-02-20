import React from 'react';
import Timer from './Timer';
import TaskNotes from './TaskNotes';

// individual task with delete button, timer, and notes
const TaskItem = ({ task, onDelete, onUpdate }) => {
    // for time update
    const handleTimeUpdate = (taskId, time) => {
        onUpdate(taskId, { timeSpent: time});
    };

    // for notes update
    const handleNotesSave = (taskId, notes) => {
        onUpdate(taskId, { notes });
    };

    return (
        <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px'}}>
            <h3>{task.title}</h3>
            <button onClick={() => onDelete(task.id)}>Delete Task</button>
            <Timer taskId={task.id} onTimeUpdate={handleTimeUpdate} />
            <TaskNotes taskId={task.id} initialNotes={task.notes} onSave={handleNotesSave} />
        </div>
    );
};

export default TaskItem;