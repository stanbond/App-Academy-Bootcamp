const DOMNodeCollection = require("./dom_node_collection.js");

Window.prototype.$l = function(arg) {
    if (typeof arg === 'string') {
        let nodeList = this.document.getElementsByClassName(arg);
        const nodeArr = Array.from(nodeList);
        return new DOMNodeCollection(nodeArr);
    } 
    else if (arg instanceof HTMLElement) {
        return new DOMNodeCollection ([arg]);
    };
}

window.$l = $l;