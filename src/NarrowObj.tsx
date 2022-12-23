import { useState } from 'react';

export default function NarrowObj() {
    const [obj, setObj] = useState({
        name: 'jinsuo',
        age: 24,
        friend: {
            name: 'sana',
            age: 24
        }
    });

    const setFrinedName = (name: string | null) => {
        if (name != null) {
            setObj(prev => ({ ...prev, friend: { ...prev.friend, name } }));
        }
    };

    const setFriendAge = (age: number) => {
        if (age !== null) {
            setObj((prev) => ({ ...prev, friend: { ...prev.friend, age } }));
        }
    };

    return (
        <div>
            <h3>{obj.name} : {obj.age}</h3>
            <h3>{obj.friend.name} : {obj.friend.age}</h3>

            <button onClick={() => {
                const name = prompt('enter name');
                setFrinedName(name);
            }}>Change Friend Name</button>
            <button onClick={
                () => {
                    const age = prompt('enter age');
                    setFriendAge(Number(age));
                }
            }
            >Change Friend Age</button>
        </div>
    );
}

