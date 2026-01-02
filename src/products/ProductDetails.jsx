import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
    const {id} =useParams()
    const [data , setData] =useState()

    useEffect(()=>{
        DisplayDetails()
    },[id])

    const DisplayDetails=async()=>{

        try{

            const response= await axios.get(`https://dummyjson.com/products/${id}`)
            console.log(response)
            setData(response.data)


        }catch(error){

            console.log(error)

        }

          
    }
  if (!data) {
    return <div className="flex justify-center items-center h-64">Loading...</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-6">
            <img
              src={data.thumbnail}
              alt={data.title}
              className="w-full h-96 object-contain rounded-lg"
            />
          </div>
          <div className="md:w-1/2 p-6 space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
            <p className="text-gray-600 text-lg">{data.description}</p>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-green-600">${data.price}</span>
              {data.discountPercentage && (
                <span className="text-lg text-gray-500 line-through">
                  ${(data.price / (1 - data.discountPercentage / 100)).toFixed(2)}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(data.rating) ? 'fill-current' : 'text-gray-300'}`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-gray-600">({data.rating})</span>
            </div>
            <div className="pt-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails