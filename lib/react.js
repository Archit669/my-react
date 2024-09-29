export default class React {
    static globalState = [];  
    static currentStateIndex = 0;  

    static createElement(type, attributes, children) {
        return {
            type: type,
            attributes: attributes,
            children: children
        };
    }

    static useState(initialValue) {
        const currentIndex = React.currentStateIndex; 

        if (React.globalState[currentIndex] === undefined) {
            React.globalState[currentIndex] = initialValue;
        }

        const state = React.globalState[currentIndex]; 

        const setState = (newState) => {
            React.globalState[currentIndex] = newState;

            React.currentStateIndex = 0; 
        };

        React.currentStateIndex++; 

        return [state, setState];
    }

    static resetStateIndex() {
        React.currentStateIndex = 0;
    }
}

export const useState = React.useState;
