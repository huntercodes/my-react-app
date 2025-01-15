import React, { useState } from 'react';
import List from './List';

const Goals = ({ suggestedEntry, buttonLabel }) => {
    return (
        <div>
            <h2>Goals</h2>
            <p>Set your goals!</p>
            <List
                placeholderText={suggestedEntry}
                buttonText={buttonLabel}
                description="Weekly Goals!"
            />
        </div>
    );
};

export default Goals;