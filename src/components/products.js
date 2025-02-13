
import React from 'react';

const name = "jello";

const htmlTemplateString = `<h1>Hello world</h1> ${name} <p>Paragraph</p> ${name}`;

 const Products = ({image,title,price}) => {
  const formattedPrice = `Rs. ${price} /-`;
  return (
    <div className='mx-12 my-10'>
        <img src={image} alt='image'></img>
        <h1>{title}</h1>
        <p>{formattedPrice}</p>
    </div>
  )
}
export default Products;