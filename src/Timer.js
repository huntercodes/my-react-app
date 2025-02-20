import React, { useRef, useEffect } from 'react';
import useTaskTimer from './useTaskTimer';

// track time
const Timer = ({ taskId, onTimeUpdate }) => {
    const { time, startTimer, stopTimer, resetTimer } = useTaskTimer();
    const timerDisplayRef = useRef(null);

    useEffect(() => {
        if (onTimeUpdate) {
            onTimeUpdate(taskId, time);
        }
    }, [time, onTimeUpdate, taskId]);

    return (
        <div ref={timerDisplayRef}>
            <p>Time: {time}s</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default Timer;