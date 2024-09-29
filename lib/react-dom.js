export default class ReactDOM {
    static createRoot(root) {

        // function to set the attributes to html element
        function setAttributes(element, attributes) {
            if (attributes == null) return;

            Object.keys(attributes).forEach((key) => {
                element.setAttribute(key, attributes[key]);
            });
        }

        function createElement({ type, attributes = {}, children = "" }) {
            // Create the element and set its attributes
            const ele = document.createElement(type);
            setAttributes(ele, attributes);

            // Handle the children: either a string or an array of elements
            if (typeof children === 'string') {
                ele.innerText = children;
            } else {
                // Recursively create and append child elements
                children.map(createElement).forEach((childEle) => ele.appendChild(childEle));
            }

            return ele; // Return the created element
        }

        return {
            render(elementConfig) {
                const ele = createElement(elementConfig); // Create the top-level element
                root.appendChild(ele); // Append the top-level element to the root once
            }
        };
    }
}
