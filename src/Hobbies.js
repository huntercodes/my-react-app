import React, { useContext, useState } from 'react';
import HobbiesContext from './HobbiesContext';

const Hobbies = () => {
    const { hobbies, addHobby } = useContext(HobbiesContext);
    const [newHobby, setNewHobby] = useState('');

    const handleAddHobby = () => {
        addHobby(newHobby);
        setNewHobby('');
    };

    return (
        <div>
            <h2>Hobbies</h2>
            <ul>
                {hobbies && hobbies.length > 0 ? (
                    hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)
                ) : (
                    <p>No hobbies found.</p>
                )}
            </ul>
            <input
                type="text"
                value={newHobby}
                onChange={(e) => setNewHobby(e.target.value)}
                placeholder="Add a new hobby!"
            />
            <button onClick={handleAddHobby}>Add Hobby</button>
        </div>
    );
};

export default Hobbies;