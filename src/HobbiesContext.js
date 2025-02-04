import React, { createContext, useState } from 'react';
import useHobbies from './useHobbies';

const HobbiesContext = createContext();

export const HobbiesProvider = ({ children }) => {
    const { hobbies, addHobby } = useHobbies();

    return (
        <HobbiesContext.Provider value={{ hobbies, addHobby }}>
            {children}
        </HobbiesContext.Provider>
    );
};

export default HobbiesContext;