import React, { useState } from 'react';
import CounterExample from './CounterExample';

export default function CounterWrapper() {
    const [i, setCount] = useState(0);
    const handleClick = () => {
        setCount((prev) => prev + 1);
    };
    return (
        <div>
            <div>{i}</div>
            <div>{i > 10 ? '!!' : '@@'}</div>
            <CounterExample total={i} onClick={handleClick} />
            <CounterExample total={i} onClick={handleClick} />
        </div>
    );
}

