import React, { useState, useRef, useEffect } from 'react';
import './List.css';

const List = ({
    initialHeaderTitle = 'My List',
    placeholderText = 'Enter a value...',
    buttonText = "Add to List",
    clearButtonText = 'Clear List',
    emptyAddError = 'Please enter a value before adding to the list.',
    emptyClearError = 'The list is already empty.',
    description = 'This is your dynamic list.',
}) => {
    const listInput = useRef(null);
    const lastItemRef = useRef(null); // for last added item
    const [headerTitle, setHeaderTitle] = useState(initialHeaderTitle); // for dynamic headerTitle
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

        // assign and highlight last item
        const currentListItems = currentListEntries.map((entry, index) => (
            <li key={index} ref={index === currentListEntries.length - 1 ? lastItemRef : null} style={index === currentListEntries.length - 1 ? {backgroundColor: '#333333' } : null}>
                {entry}
            </li>
        ));

        setListObject({ listEntries: currentListEntries, listItems: currentListItems });
        listInput.current.value = '';
        listInput.current.focus();

        // update headerTitle to display the number of list entries
        setHeaderTitle('My List: ' + currentListEntries.length + ' Items');
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

        // revert headerTitle back to original value
        setHeaderTitle(initialHeaderTitle)
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