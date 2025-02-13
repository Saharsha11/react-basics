"use client";

import React  from 'react';
import axios from 'axios';
import { useState , useEffect } from 'react';
const fetchData = () => {

    const response = axios.get("https://fakestoreapi.com/products/1");
    response
        .then((value) => {
            console.log(value.data, "val");
        })
        .catch((error) => {
            console.log(error, "error")


        });
};

const DataFetch = () => {
    const [product,setProduct] = useState(null);

    const fetchData = () => {

        const response = axios.get("https://fakestoreapi.com/products/1");
        response
            .then((value) => {
                setProduct(value.data);
            })
            .catch((error) => {
                console.log(error, "error");
            });
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            <img src={product?.image} alt='image' className='w-[200px] h-[200px]'></img>
            <p>{product?.title}</p>
        </div>
    )
};

export default DataFetch;
