import { useState } from 'react';


export default function CounterExample(props: { total: number, onClick: () => void; }) {
    const [i, increaseCount] = useState(0);
    return (
        <div>
            <div>{i} / {props.total}</div>
            <button onClick={() => {
                increaseCount((prev) => prev + 1);
                props.onClick();
            }}>+</button>
        </div>
    );
}
