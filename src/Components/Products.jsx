import React from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
    const {id} = useParams();
  return (
    <div>
        <h2>Products - {id}</h2>
        <div>Shampoo</div>
        <div>Health mix</div>
    </div>
  )
}

export default Products