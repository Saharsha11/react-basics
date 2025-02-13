"use client"

import React, {useContext, useState} from "react";
import A from "./components/A";
import { CounterContext } from "@/context/counterContext";
import { ThemeContext } from "@/context/themeContext";


const GlobalState = () =>{
    const mode = useContext(ThemeContext);

    const [count,setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    };

    return (
        <div className={mode === "light"?"bg-white text-black":"bg-black text-white"}>
            {/* <p className={mode ==="light" ? "text-black":"text-white"}> */}
            Global state page - {count}
            <button className="my-2 py-2 px-3 bg-slate-950 text-white" onClick={increment}>Increase</button>
            {/* <A count = {count}/> */}
            <CounterContext.Provider value = {count}>
                <A/>
            </CounterContext.Provider>
          
        </div>
    );
};

export default GlobalState;