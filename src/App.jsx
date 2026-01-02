import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import axios from 'axios'
import ProductCard from './products/ProductCard'
// import { BrowserRouter, Router, Route } from 'react-router-dom'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProductData()
  }, [])

  const fetchProductData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products")
      console.log(response.data.products)
      setProducts(response.data.products)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    
      <div>
        <Header />
        
          <Home products={products} />
        <Footer />
      </div>
    
  )
}

export default App