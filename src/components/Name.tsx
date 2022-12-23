import React from 'react';

export default function Name(props: { name: string; new?: boolean; }) {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if (!undefined) {
            console.log(event);
        }
    };
    return (
        <>
            <span>
                {props.new && <span>New Mememer</span>}
                {props.name}

            </span>
            <button onClick={(event) => { handleClick(event); }}>aa</button>
        </>
    );
}

