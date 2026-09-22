import { useEffect, useState } from 'react'

const API_URL = "my-shop-mwh3hsjm6-spongebobfcc.vercel.app/api/products"

const icons = {
  Laptop: "💻",
  smartwatch: "⌚",
  SmartTv: "📺",
  Phone: "📱"
}

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL)
      .then(r => r.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return <div style={{ padding: 40, textAlign: 'center', color: '#6b7e71' }}>🌊 Loading from Vercel...</div>
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Inventory ({products.length})</h3>
        <span style={{ fontSize: 13, background: '#0a7', color: 'yellow', padding: '4px 10px', borderRadius: 20 }}>Menu</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
        {products.map(p => (
          <div key={p._id} style={{
            background: '#fcfdfc',
            border: '1px solid #e8f0e9',
            borderRadius: 14,
            padding: 16,
            transition: 'transform 0.15s',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Stock badge */}
            <div style={{
              position: 'absolute',
              top: 12,
              right: 12,
              fontSize: 11,
              fontWeight: 700,
              padding: '4px 8px',
              borderRadius: 20,
              background: p.quantity > 0 ? '#e6f9f0' : '#ffeaea',
              color: p.quantity > 0 ? '#0a7' : '#d33'
            }}>
              {p.quantity > 0 ? `${p.quantity} in stock` : 'Out of stock'}
            </div>

            <div style={{ fontSize: 36, marginBottom: 12 }}>{icons[p.name] || '📦'}</div>
            <div style={{ fontWeight: 800, fontSize: 16 }}>{p.name}</div>
            <div style={{ fontSize: 13, color: '#6b7e71', marginTop: 2 }}>
              ID: {p._id.slice(-6)}
            </div>
            
            <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: '#1a2e22' }}>${p.price.toLocaleString()}</div>
              <div style={{ 
                background: '#1a2e22', 
                color: 'white', 
                fontSize: 12, 
                padding: '6px 12px', 
                borderRadius: 20,
                cursor: 'pointer'
              }}>
                Place Order
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, padding: 12, background: '#f8faf9', borderRadius: 10, fontSize: 12, color: '#6b7e71', textAlign: 'center' }}>
        Fetched from: <code>{API_URL}</code>
      </div>
    </div>
  )
}

