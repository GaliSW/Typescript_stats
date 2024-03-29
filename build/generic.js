"use strict";
class ArrayOfNumbers {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
class ArrayOfStrings {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
//使用泛型
class ArrayOfAnything {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
new ArrayOfAnything(["a", "b", "c"]);
function printString(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printAnything(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printAnything(["a", "b", "c"]);
//Generics Constraints
class Car {
    print() {
        console.log("car");
    }
}
class House {
    print() {
        console.log("House");
    }
}
function printHouseOrCar(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printHouseOrCar([new Car(), new House()]);
