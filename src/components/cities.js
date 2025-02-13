"use client"
import React, { use } from "react"
import { useState } from "react";

const Cities = () => {
    const [city, setCity] = useState("https://www.muchbetteradventures.com/magazine/content/images/size/w2000/2023/10/GettyImages-894593212.jpeg");

    const ktm = () => {
        setCity("https://www.muchbetteradventures.com/magazine/content/images/size/w2000/2023/10/GettyImages-894593212.jpeg");
    };
    const lati = () => {
        setCity("https://cdn.britannica.com/36/154236-050-8127D19C/Durbar-Square-Lalitpur-Nepal.jpg");
    };
    const bhakt = () => {
        setCity("https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/89/2a.jpg");
    };
    return (
        <div>
            <img src={city} className="h-[400px] w-[600px] m-10" alt="city"></img>
            <button onClick={ktm} className="bg-green-500 text-white px-4 py-2 m-14 rounded-xl">Kathmandu</button>
            <button onClick={lati} className="bg-green-500 text-white px-4 py-2 m-14 rounded-xl">Lalitpur</button>
            <button onClick={bhakt} className="bg-green-500 text-white px-4 py-2 m-14 rounded-xl">Bhaktapur</button>
        </div>
    );

}
export default Cities;