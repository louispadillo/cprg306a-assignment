import Link from "next/link";

// Created a back to link to the home page for easier navigation.
export default function Person(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age} years old</p>
        </div>
    );
}