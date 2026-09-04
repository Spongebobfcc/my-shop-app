import { useEffect, useState } from 'react'
import { getProducts, addProduct } from './services/api.js'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")

  // Load products from backend when page opens
  useEffect(() => {
    getProducts().then(setProducts).catch(err => console.log(err))
  }, [])

  const handleAdd = () => {
    addProduct({ name, quantity: 1, price: 100 })
      .then(newProduct => setProducts([...products, newProduct]))
    setName("")
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>My Shop</h1>
      
      <input 
        value={name} 
        onChange={e => setName(e.target.value)} 
        placeholder="Product name" 
      />
      <button onClick={handleAdd}>Add Product</button>

      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products</p>
      ) : (
        <ul>
          {products.map(p => <li key={p.id}>{p.name} - ${p.price}</li>)}
        </ul>
      )}
    </div>
  )
}
