
import React from 'react'

 const Products = ({image,title,price}) => {
  return (
    <div className='mx-12 my-10'>
        <img src={image} alt='image'></img>
        <h1>{title}</h1>
        <p>{price}</p>
    </div>
  )
}
export default Products;