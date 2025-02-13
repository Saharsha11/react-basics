"use client";
import "./globals.css";
import { ThemeContext } from "@/context/themeContext";
import { useState } from "react";


export default function RootLayout({ children }) {
  const [mode,setMode] = useState("light");
  return (
    <html lang="en">
      <body>
        <button onClick={() => setMode("light")}>Light</button>
        <button onClick={() => setMode("dark")}>Dark</button>
      <ThemeContext.Provider value = {mode}>
      {children}
      </ThemeContext.Provider>
      </body>
    </html>
  );
}
