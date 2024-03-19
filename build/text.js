"use strict";
//nothing to do with generics
// const addOne = (a: number): number => {
//   return a + 1;
// };
// const addTwo = (a: number): number => {
//   return a + 2;
// };
// const addThree = (a: number): number => {
//   return a + 3;
// };
//optimize--->
//==============================================
// const add = (a: number,b:number): number => {
//     return a + b;
//   };
//==============================================
//With generics
// class HoldNumber {
//   data: number = 0;
// }
// class HoldString {
//   data: string = "";
// }
// const holdNumber = new HoldNumber();
// holdNumber.data = 123;
// const holdString = new HoldString();
// holdString.data = "sadadas";
class HoldAnything {
    constructor(data) {
        this.data = data;
    }
}
const holdNumber = new HoldAnything(0);
holdNumber.data = 123;
const holdString = new HoldAnything("");
holdString.data = "hello";
