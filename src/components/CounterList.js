import React, { useState } from 'react';
import Counter from './Counter';

const CounterList = () => {
    const [counters, setCounters] = useState([<Counter key={0} />]);

    const addCounter = () => setCounters([...counters, <Counter key={counters.length} />]);

    return (
        <div>
            {counters}
            <button onClick={addCounter}>Add Counter</button>
        </div>
    );
};

export default CounterList;
