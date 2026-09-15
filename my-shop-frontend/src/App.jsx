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
      {/* HEADER - matches ProductList card style */}
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
              <div style={{ margin: 0, fontSize: 20, fontWeight: 800, letterSpacing: '-0.5px' }}>Mare Tropical</div>
              <div style={{ margin: 0, fontSize: 11, color: '#0a7', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Shop</div>
            </div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#0a7', background: '#e6f9f0', padding: '6px 12px', borderRadius: 20, border: '1px solid #d6efe0' }}>
            ● LIVE
          </div>
        </div>
      </header>

      {/* MAIN */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 20px' }}>
        
        {/* HERO */}
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 40px' }}>
          <h1 style={{ fontSize: 42, fontStyle: 'italic', fontWeight: 1000, lineHeight: 1.1, margin: '0 0 12px', letterSpacing: '-1.5px', color: 'purple' }}>
            Fresh picks from the <span style={{ color: '#0a7' }}>Coast.</span>
          </h1>
          <p style={{ color: 'orange', fontSize: 36, fontWeight: 'bold',fontFamily: 'Helvetica', Arial, sans-serif'  // ✅,9 lineHeight: 1.6, margin: '0 0 24px' }}>
            Taste the Tropics<br>Feel the Difference 
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
              fontSize: 14,
              fontWeight: 700,
              boxShadow: showProducts ? 'none' : '0 8px 20px rgba(0,170,119,0.25)',
              transition: 'all 0.2s'
            }}
          >
            {showProducts ? '✕ Hide Inventory' : '→ Show Inventory'}
          </button>
        </div>

        {/* CONTENT AREA */}
        {showProducts ? (
          <div style={{
            background: 'white',
            borderRadius: 16,
            border: '1px solid #e8f0e9',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            padding: 20
          }}>
            <ProductList />
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {[
              { icon: '💻', title: '4 Products', desc: 'From MongoDB Atlas' },
              { icon: '⚡', title: 'Vercel API', desc: 'my-shop-kllee4kbb...' },
              { icon: '🎨', title: 'Render Frontend', desc: 'React on Render.com' }
            ].map(card => (
              <div key={card.title} style={{ background: 'white', padding: 20, borderRadius: 14, border: '1px solid #e8f0e9', textAlign: 'left' }}>
                <div style={{ fontSize: 24 }}>{card.icon}</div>
                <div style={{ fontWeight: 800, marginTop: 8, fontSize: 15 }}>{card.title}</div>
                <div style={{ fontSize: 13, color: '#6b7e71', marginTop: 4 }}>{card.desc}</div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

