import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ProductImg from "./product.svg"
function Products() {
  return (
    <div>
    <Navbar/>
    <h1>Products</h1>
    <img src={ProductImg} className='img1'/>
    </div>
  )
}

export default Products