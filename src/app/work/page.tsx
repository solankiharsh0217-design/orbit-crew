import ProjectGrid from '@/components/ProjectGrid'

export default function WorkPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div style={{ padding: '60px 0 20px', textAlign: 'center' }}>
        <h1 className="h1">Our Deliveries</h1>
        <p className="body-large" style={{ marginTop: 16, opacity: 0.6 }}>A curated selection of our recent white-label builds.</p>
      </div>
      <ProjectGrid />
    </main>
  )
}
