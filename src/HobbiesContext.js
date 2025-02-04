import React, { createContext, useState } from 'react';

const HobbiesContext = createContext();

export const HobbiesProvider = ({ children }) => {
    const [hobbies, setHobbies] = useState([
        "Playing Guitar",
        "Golfing",
        "Video Games",
    ]);

    // function to add hobby with if statement
    const addHobby = (newHobby) => {
        if (newHobby && newHobby.trim() !== "" && !hobbies.includes(newHobby)) {
            setHobbies((prevHobbies) => [...prevHobbies, newHobby]);
        }
    };

    return (
        <HobbiesContext.Provider value={{ hobbies, addHobby }}>
            {children}
        </HobbiesContext.Provider>
    );
};

export default HobbiesContext;