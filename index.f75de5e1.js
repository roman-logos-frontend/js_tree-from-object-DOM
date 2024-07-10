"use strict";
const food = {
    Drink: {
        Wine: {},
        Schnaps: {}
    },
    Fruit: {
        Red: {
            Cherry: {},
            Strawberry: {}
        },
        Yellow: {
            Banana: {},
            Pineapple: {}
        }
    }
};
const tree = document.querySelector("#tree");
function createTree(element, data) {
    // WRITE YOUR CODE HERE
    const ul = document.createElement("ul");
    element.appendChild(ul);
    for(const key in data)if (data.hasOwnProperty(key)) {
        const li = document.createElement("li");
        li.textContent = key;
        ul.appendChild(li);
        if (typeof data[key] === "object" && Object.keys(data[key]).length > 0) createTree(li, data[key]);
    }
}
createTree(tree, food);

//# sourceMappingURL=index.f75de5e1.js.map