"use client"
import React from "react"
import { useState } from "react";

const States = (props) => {
    const { title } = props;
    let [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
      let finalValue = count - 2 ;
      setCount(finalValue > 0 ? finalValue : 0);
    }

    return (
        <div>
            <h1 className="text-4xl">Counter value = {count}</h1>
            <button className="bg-blue-400 text-white px-5 py-2 mt-4 rounded-md ml-5" onClick={increment} >Increment</button>
            <button className="bg-red-400 text-white px-5 py-2 mt-4 rounded-md ml-5" onClick={decrement} >Decrement</button>
        </div>
    )
}
export default States;