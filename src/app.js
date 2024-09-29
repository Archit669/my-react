import React from "../lib/react.js";
import { useState } from "../lib/react.js";

export default function App(props){
    const [val, setValue] = useState(9);
    const [val2, setValue2] = useState(11);

    return (
        React.createElement("div", {}, [
            React.createElement("h1", null, `${val}`),
            React.createElement("h1", null, `${val2}`),
            React.createElement("p", null, "I am a React component"),
            React.createElement("p", null, [
                React.createElement("p", null, `${props.name}`)
            ]),
        ])
    )
}