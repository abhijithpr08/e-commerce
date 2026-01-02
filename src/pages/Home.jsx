import React from 'react'
import ProductCard from '../products/ProductCard'

const Home = ({products}) => {
  console.log(products)
  return (
    <div className='m-auto p-5'>
      <div className='grid grid-cols-5 gap-5 items-center'>
        {products?.map((data,index)=>(
          <ProductCard key={index} products={data} />
        ))}
      </div>
    </div>
  )
}

export default Home