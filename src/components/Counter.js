import React, { useState } from 'react';
import { fetchInitialValue } from '../api/api';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const randomize = () => {
        fetchInitialValue().then(response => {
            setCount(response.data.initialValue)
        });
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={randomize}>Randomize</button>
        </div>
    );
};

export default Counter;
