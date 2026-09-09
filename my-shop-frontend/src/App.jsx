import { useState } from 'react'
import ProductList from './ProductList.jsx'

export default function App() {
  const [showProducts, setShowProducts] = useState(false)

  return (
    <div style={{ padding: 20, fontFamily: 'Arial', maxWidth: 1000, margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#0a7' }}>🌴 Mare Tropical Shop</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>
        Frontend: https://my-shop-app-tqc9.onrender.com | Backend: Vercel
      </p>
      <hr />

      {/* Button to list all products */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <button
          onClick={() => setShowProducts(!showProducts)}
          style={{
            padding: '12px 24px',
            background: '#0a7',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            fontSize: 16,
            fontWeight: 'bold'
          }}
        >
          {showProducts ? 'Hide Products' : 'List All Products'}
        </button>
      </div>

      {showProducts && <ProductList />}
    </div>
  )
}
