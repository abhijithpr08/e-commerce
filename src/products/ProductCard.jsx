import React from 'react'


const ProductCard = ({ products }) => {
    console.log(products)
    return (
        <div className='h-90 rounded-xl py-3 flex flex-col justify-evenly border border-blue-400 shadow-xl hover:bg-gray-200'>
            <img src={products?.thumbnail} alt="item-image" className='w-[90%] mx-auto bg-white h-50 rounded-xl border border-blue-400' />
            <p className='text-center font-bold text-xl'>{products?.title}</p>
            <p className='font-bold text-gray-700'>{products?.price}</p>
            <div className='flex justify-center gap-5'>
                <button className='p-2 rounded-xl w-25 text-white bg-blue-600'>Add to Cart</button>
                <button className='p-2 rounded-xl w-25 text-white bg-red-500'>Wish List</button>
            </div>
        </div>
    )
}

export default ProductCard
