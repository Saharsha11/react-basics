"use client";

import React from 'react'

const promiseData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (2+2 === 4){
            resolve("Success");
        }else{
            reject("Failed");
        }
    },3000);
});

promiseData
    .then((value) => {
        console.log(value,"Promise is resolved");
    })
    .catch((error) => {
        console.log(error,"Promise is rejected");
    });


 const Async = () => {
  return (
    <div>async</div>
  )
};
export default Async;
