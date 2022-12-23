import React, { useEffect, useState } from 'react';

export default function UseEffectComponent() {
    const [data, setData] = useState([]);
    const [checked, setCheck] = useState(false);
    const handleChange = () => { setCheck(prev => prev = !prev); };

    useEffect(() => {
        fetch(`data/${checked ? 'more' : 'simple'}_data.json`)
            .then((res) => res.json())
            .then((json) => setData(json));
        return () => { console.log('CLEAN'); };
    }, [checked]);


    return (
        <>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            <ul>
                {data.map((list: { id: number, name: string, price: string; }) =>
                    <li key={list.id}>
                        <h3>{list.name}</h3>
                        <span>{list.price}</span>
                    </li>
                )}
            </ul>
        </>
    );
}

