import React, { useState } from 'react';
import useDebounce from '../debouncer/newExp';

function FunctionalComponent() {
    const [text, setText] = useState("");
    const [displayText, setDisplayText] = useState("");
    const textChange = useDebounce(setDisplayText, 5000);

    const handleChange = (event) => {
        setText(event.target.value);
        textChange(event.target.value);
    }

    return (
        <div>
            <input
                placeholder='functional component'
                value={text}
                onChange={handleChange}
            />
            <p>{displayText}</p>
        </div>
    );
}

export default FunctionalComponent;