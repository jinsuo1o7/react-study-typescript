import Name from "./Name";

export default function SimpleExample(props: { name: string, age: number, hobby: string; new?: boolean; }) {
    return (
        <div>
            <Name name={props.name} new={props.new} />
            age: {props.age}
            hobby: {props.hobby}
        </div>
    );
}
