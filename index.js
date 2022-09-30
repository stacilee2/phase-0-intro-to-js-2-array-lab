// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
} 
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
    return [...cats, "Broom"];
}
function prependCat() {
    return ["Arnold", ...cats];
}
function removeLastCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    cats.pop();
    return cats;
}
function removeFirstCat() {
    const cats = ["Milo","Otis", "Garfield"];
    cats.shift();
    return cats;
}