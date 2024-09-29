export default class React{
    static createElement(type, attributes, children){
        return {
            type: type,
            attributes: attributes,
            children: children
        }
    }
}

