import React, { useState } from 'react';
import List from './List';

const Goals = ({ suggestedEntry, buttonLabel }) => {
    return (
        <div>
            <h2>Goals</h2>
            <p>Set your goals!</p>
            <List
                headerTitle="Weekly Goals"
                placeholderText={suggestedEntry}
                buttonText={buttonLabel}
                clearButtonText="Clear Goals"
                description="Track your goals!"
                emptyAddError="Please enter a goal before attempting to add to the list."
                emptyClearError="No goals to clear, the list is already empty."
            />
        </div>
    );
};

export default Goals;