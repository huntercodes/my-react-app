import { clear } from '@testing-library/user-event/dist/clear';
import { useState, useRef, useEffect } from 'react';

// hook to manage task times
const useTaskTimer = (initalTime = 0) => {
    const [time, setTime] = useState(initalTime);
    const timerRef = useRef(null);

    // start the time
    const startTimer = () => {
        if (timerRef.current) return;
        timerRef.current = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);
    };

    // stop the time
    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    // set to 0
    const resetTimer = () => {
        setTime(0);
    }

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    return { time, startTimer, stopTimer, resetTimer };
};

export default useTaskTimer;