"use strict";
class UIComponent {
    id;
    constructor(id) {
        this.id = id;
    }
}
class Input extends UIComponent {
    type;
    name;
    placeholder;
    constructor(id, type, name, placeholder) {
        super(id);
        this.type = type;
        this.name = name;
        this.placeholder = placeholder;
    }
    render() {
        return `<input id="${this.id}" type="${this.type}" name="${this.name}" placeholder="${this.placeholder}"/>`;
    }
}
