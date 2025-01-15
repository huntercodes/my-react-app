import React, { useState, useRef } from 'react';
import './List.css';

const List = ({
    headerTitle = 'My List',
    placeholderText = 'Enter a value...',
    buttonText = "Add to List",
    clearButtonText = 'Clear List',
    emptyAddError = 'Please enter a value before adding to the list.',
    emptyClearError = 'The list is already empty.',
    description = 'This is your dynamic list.',
}) => {
    const listInput = useRef(null);
    const [listObject, setListObject] = useState({
        listEntries: [],
        listItems: [],
    });

    const addToListHandler = () => {
        if (!listInput.current.value.trim()) {
            alert(emptyAddError);
            listInput.current.focus();
            return;
        }

        const currentListEntries = [...listObject.listEntries, listInput.current.value];
        const currentListItems = currentListEntries.map((entry, index) => (
            <li key={index}>{entry}</li>
        ));
        setListObject({ listEntries: currentListEntries, listItems: currentListItems });
        listInput.current.value = '';
        listInput.current.focus();
    };

    const clearListHandler = () => {
        if (listObject.listEntries.length === 0) {
            alert(emptyClearError);
            listInput.current.focus();
            return;
        }

        setListObject({ listEntries: [], listItems: [] });
        listInput.current.value = ''
        listInput.current.focus();
    };

    return (
        <div>
            <h3>{headerTitle}</h3>
            <input ref={listInput} placeholder={placeholderText}></input>
            <button onClick={addToListHandler}>{buttonText}</button>
            <button onClick={clearListHandler}>{clearButtonText}</button>
            <h4>{description}</h4>
            <ol>{listObject.listItems}</ol>
        </div>
    );
};

export default List;