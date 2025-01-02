import React, { useState } from 'react';

function Goals({ headerTitle, description, suggestedEntry, buttonLabel }) {
    const [myGoal, setMyGoal] = useState();

    const handleClick = () => {
        const inputGoal = document.getElementById("goal").value;
        setMyGoal(inputGoal);
    };

    return (
        <div>
            <h2>{headerTitle}</h2>
            <h3>{myGoal}</h3>
            <p>{description}</p>
            <input id="goal" name="goal" placeholder={suggestedEntry}></input>
            <button onClick={handleClick}>{buttonLabel}</button>
        </div>
    );
}

export default Goals;