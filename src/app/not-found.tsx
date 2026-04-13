export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#0a0a0a',
      color: '#f0efe8'
    }}>
      <div>
        <h1 style={{ fontSize: '8rem', margin: 0 }}>404</h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.6 }}>Page not found</p>
      </div>
    </div>
  )
}