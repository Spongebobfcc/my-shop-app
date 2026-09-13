import { useState } from 'react'
import ProductList from './ProductList.jsx'

export default function App() {
  const [showProducts, setShowProducts] = useState(false)

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f8faf9',
      fontFamily: 'Inter, system-ui, Arial',
      color: '#1a2e22'
    }}>
      {/* HEADER */}
      <header style={{
        background: 'white',
        borderBottom: '1px solid #e8f0e9',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 28 }}>🌴</span>
            <div>
              <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800, letterSpacing: '-0.5px' }}>Mare Tropical</h1>
              <p style={{ margin: 0, fontSize: 11, color: '#0a7', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Shop</p>
            </div>
          </div>
          <div style={{ fontSize: 12, color: '#888', background: '#f0faf4', padding: '6px 12px', borderRadius: 20, border: '1px solid #d6efe0' }}>
            ● Live API: Vercel + Render
          </div>
        </div>
      </header>

      {/* HERO */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '50px 20px 30px' }}>
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.1, margin: '0 0 12px', letterSpacing: '-1.5px' }}>
            Fresh picks from the <span style={{ color: '#0a7' }}>Coast.</span>
          </h2>
          <p style={{ color: '#6b7e71', fontSize: 16, lineHeight: 1.6, margin: '0 0 28px' }}>
            Minimal inventory manager for your tropical collection. Fast, live, and connected to your Vercel backend.
          </p>

          <button
            onClick={() => setShowProducts(!showProducts)}
            style={{
              padding: '14px 28px',
              background: showProducts ? '#1a2e22' : '#0a7',
              color: 'white',
              border: 'none',
              borderRadius: 100,
              cursor: 'pointer',
              fontSize: 15,
              fontWeight: 700,
              boxShadow: showProducts ? 'none' : '0 8px 20px rgba(0,170,119,0.3)',
              transition: 'all 0.2s',
              transform: showProducts ? 'scale(0.98)' : 'scale(1)'
            }}
          >
            {showProducts ? '✕ Hide Products' : '→ List All Products'}
          </button>
          
          <div style={{ marginTop: 16, fontSize: 12, color: '#9ab0a3' }}>
            {showProducts ? 'Showing 4 products from MongoDB' : 'Click to fetch from /api/products'}
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ marginTop: 40 }}>
          {showProducts ? (
            <div style={{
              background: 'white',
              borderRadius: 16,
              border: '1px solid #e8f0e9',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              padding: 20,
              animation: 'fadeIn 0.3s ease'
            }}>
              <ProductList />
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16,
              opacity: 0.8
            }}>
              {[
                { icon: '⚡', title: 'Vercel Backend', desc: 'Serverless Express + MongoDB' },
                { icon: '🎨', title: 'Render Frontend', desc: 'Fast React deployment' },
                { icon: '🔒', title: 'CORS Secured', desc: 'Only your domains allowed' }
              ].map(card => (
                <div key={card.title} style={{ background: 'white', padding: 20, borderRadius: 16, border: '1px solid #e8f0e9' }}>
                  <div style={{ fontSize: 22 }}>{card.icon}</div>
                  <div style={{ fontWeight: 700, marginTop: 8 }}>{card.title}</div>
                  <div style={{ fontSize: 13, color: '#6b7e71', marginTop: 4 }}>{card.desc}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
