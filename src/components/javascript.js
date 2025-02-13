"use client";
console.log("Hello world!!");
//Type of variable 
const name = "Saharsha"; // redeclare X reassign X
let age = 21// no ok;
var address = "Chamati"; // ok ok 
const job = false

console.log(name,age,job,address)


function Javascript(){
    return null
}
export default Javascript;

let a = "10";
let b = 44;

const sum = Number(a)+b;
console.log(sum);

function addition(a,b){
    var add = a+b;
    console.log("Addition =",add)
}

addition(11,20);

//arrow function 

const differenceOfNum = (a=0,b=0) => {
    const diff = a-b;
    return diff ;
}

var call = differenceOfNum(8,2);
console.log("Difference = "+call);

function even(num){
    if(num % 2 == 0 ){
        console.log(num + " is a even");
    }
}
even(10)

const ktm = {
    humidity : 0.2,
    win: 10,
};
//destructuring
const {humidity,win} = ktm;
console.log(ktm)