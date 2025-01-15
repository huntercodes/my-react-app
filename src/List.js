import React, { useState, useRef } from 'react';
import './List.css';

const List = ({
    headerTitle = 'My List',
    placeholderText = 'Enter a value...',
    buttonText = "Add to List",
    description = 'This is your dynamic list.'
}) => {
    const listInput = useRef(null);
    const [listObject, setListObject] = useState({
        listEntries: [],
        listItems: [],
    });

    const addToListHandler = () => {
        const currentListEntries = [...listObject.listEntries, listInput.current.value];
        const currentListItems = currentListEntries.map((entry, index) => (
            <li key={index}>{entry}</li>
        ));
        setListObject({ listEntries: currentListEntries, listItems: currentListItems });
        listInput.current.value = '';
    };

    return (
        <div>
            <h3>{headerTitle}</h3>
            <input ref={listInput} placeholder={placeholderText}></input>
            <button onClick={addToListHandler}>{buttonText}</button>
            <h4>{description}</h4>
            <ol>{listObject.listItems}</ol>
        </div>
    );
};

export default List;