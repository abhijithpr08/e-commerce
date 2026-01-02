import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import axios from 'axios'
import ProductDetails from './products/ProductDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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

    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home products={products} />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App