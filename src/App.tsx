import "./App.css";
import CounterExample from "./components/CounterExample";
import CounterWrapper from "./components/CounterWrapper";
import SimpleExample from "./components/SimpleExample";
import UseEffectExample from "./components/UseEffectExample";

function ifState(person: { name: string; age: number; }) {
    if (person.name === "jinsuo") {
        return (
            <div>
                name : {person.name} age : {person.age}
            </div>
        );
    } else {
        return <div>Hello Stranger</div>;
    }
}

function forLoop() {
    const elements = [] as JSX.Element[];
    for (let i = 0; i < 3; i++) {
        elements.push(<div key={i}>{i} element</div>);
    }
    return elements;
}

function App() {
    const person = { name: "jinsuo", age: 24 };
    const simpleList = ["a", "b", "c"];
    return (
        <>
            <div>
                {person.name} {person.age}
            </div>
            {ifState(person)}
            {forLoop()}

            <ul>
                {simpleList.map((list) => (
                    <li>{list}</li>
                ))}
            </ul>

            <SimpleExample name='jinsu' age={24} hobby='aa' new={true} />
            <SimpleExample name='sana' age={25} hobby='aa' />
            <SimpleExample name='jjin' age={26} hobby='aa' />

            <hr />
            <CounterWrapper />

            <hr />
            <UseEffectExample />
        </>
    );
}

export default App;
