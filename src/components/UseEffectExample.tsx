import { useState } from 'react';
import UseEffectComponent from './UseEffectComponent';

export default function UseEffectExample() {
    const [data, toggleData] = useState(false);
    return (
        <>
            <button onClick={() => { toggleData((data) => data = !data); }}>
                Toggle
            </button>
            {data && <UseEffectComponent />}
        </>
    );
}

