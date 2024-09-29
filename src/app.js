import React from "../lib/react.js";

export default function App(props){
    return (
        React.createElement("div", {}, [
            React.createElement("h1", null, "Hello World"),
            React.createElement("p", null, "I am a React component"),
            React.createElement("p", null, "I am a React component"),
            React.createElement("p", null, [
                React.createElement("p", null, `${props.name}`)
            ]),
        ])
    )
}currentVNode