import { useState, useEffect } from "react";

// custom hook
const useHobbies = () => {
    // load from local or set default
    const [hobbies, setHobbies] = useState(() => {
        const savedHobbies = localStorage.getItem("hobbies");
        return savedHobbies ? JSON.parse(savedHobbies) : ["Playing Guitar", "Golfing", "Video Games"];
    });

    // sync hobbies
    useEffect(() => {
        localStorage.setItem("hobbies", JSON.stringify(hobbies));
    }, [hobbies]);

    const addHobby = (newHobby) => {
        if (newHobby.trim() !== "" && !hobbies.includes(newHobby)) {
            setHobbies((prevHobbies) => [...prevHobbies, newHobby]);
        }
    };

    return { hobbies, addHobby };
}

export default useHobbies;