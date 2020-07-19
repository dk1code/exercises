"use strict";

// 1. 

console.log("1:");

const board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];

const arrLoop = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++)
            console.log(arr[i][j]);
    }
    return "";
}

arrLoop(board);

// 2.

console.log("\n2:");

// 2.1

const doggo = {
    name: "Lessie",
    breed: "Collie"
}

// 2.2

doggo.favfoods = ["meat", "bones", "biscuits"];

// 2.3

console.log(doggo.favfoods[1]);

doggo.looping = function () {
    this.favfoods.forEach(item => console.log(item))
}

doggo.looping();

// 3.

// 3.1

const recipes = {};

// 3.2

recipes.ingredients = {
    first: "butter",
    second: "sugar",
    third: "flour"
}

// 3.3

recipes.ingredients.last = "ginger";

// 3.4

recipes.ingredients.second = "brown sugar";

// 3.5

recipes.printIngredients = function () {
    console.log(Object.values(recipes.ingredients));
}

recipes.printIngredients();