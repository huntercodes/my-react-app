import React, { useState, useEffect } from 'react';

// allows user to add notes
const TaskNotes = ({ taskId, initialNotes, onSave }) => {
    const [notes, setNotes] = useState(initialNotes);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (onSave) {
                onSave(taskId, notes);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [notes, taskId, onSave]);

    const handleNotesChange = (e) => {
        setNotes(e.target.value);
    };

    return (
        <div>
            <textArea
                value={notes}
                onChange={handleNotesChange}
                placeholder="Enter notes here..."
            />
        </div>
    );
};

export default TaskNotes;