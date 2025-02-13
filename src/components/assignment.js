"use client"

export default function Assignment(){
    return null
}
//Qno1 
const name = prompt("Enter a string = ");
length = name.length;
console.log(length);
const last = name.charAt(length-1);
console.log(last);

const word = "saharsha";
let c = 1;
for(let i = 0; i<word.length;i++){
    if (word.charAt(i) == 'a'){
        c++
    }
}
console.log("Number of occurence of a = "+c);