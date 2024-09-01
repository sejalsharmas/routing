import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ProductImg from "./product.svg"
import toast,{Toaster} from 'react-hot-toast'
function Products() {
  return (
    <div>
    <Navbar/>
    <h1>Products</h1>
    <img src={ProductImg} className='img1'/>
    <button type='button' onClick={()=>{toast.loading('page loading start')}}
    >Load</button>

    <button type='button' onClick={()=>{
      toast.dismiss()
      toast.success('page loaded successfully')
      }}>
        Finish
        </button>

    <button type='button' onClick={()=>{
      toast.dismiss()
      toast.success('failed to load the page')
      }}>
        Fail
        </button>


    <Toaster/>
    </div>
    
  )
}

export default Products