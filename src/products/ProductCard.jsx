import React from 'react'

const ProductCard = ({ products }) => {
    return (
        <div className='bg-white rounded-xl  shadow-lg hover:shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1'>
            {/* Product Image */}
            <div className='relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden'>
                <img
                    src={products?.thumbnail}
                    alt={products?.title || "Product image"}
                    className='w-full h-full object-contain hover:scale-105 transition-transform duration-300'
                />
            </div>

            {/* Product Details */}
            <div className='p-4 space-y-3'>
                {/* Title */}
                <h3 className=' font-extrabold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors'>
                    {products?.title}
                </h3>

                {/* Price */}
                <div className='flex items-center space-x-2'>
                    <span className='text-2xl font-bold text-green-600'>
                        ${products?.price}
                    </span>
                    {products?.discountPercentage && (
                        <span className='text-sm text-gray-500 line-through'>
                            ${(products.price / (1 - products.discountPercentage / 100)).toFixed(2)}
                        </span>
                    )}
                </div>

                {/* Rating */}
                {products?.rating && (
                    <div className='flex items-center space-x-1'>
                        <div className='flex text-yellow-400'>
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.floor(products.rating) ? 'fill-current' : 'text-gray-300'}`}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            ))}
                        </div>
                        <span className='text-sm text-gray-600'>({products.rating})</span>
                    </div>
                )}

                {/* Action Buttons */}
                <div className='flex gap-2 pt-2'>
                    <button className='flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg'>
                        Add to Cart
                    </button>
                    <button className='p-2 text-gray-600 hover:text-red-500 bg-gray-100 hover:bg-red-50 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95'>
                        <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
