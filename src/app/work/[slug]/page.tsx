import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// Mock database simulating project case studies lookup
const DB: Record<string, { title: string, tag: string, overview: string, result: string }> = {
  'ecommerce-platform': { 
    title: 'E-commerce Platform Build', 
    tag: 'White-label dev',
    overview: 'We partnered with an award-winning design agency to seamlessly translate their Figma mockups into a high-performance headless Next.js and Shopify storefront. We operated strictly under their email domains and slack channels.',
    result: 'Zero client conflicts. Shipped 3 weeks ahead of schedule. 45% increase in site conversion rate.'
  },
  'landing-pages': { 
    title: '12 Landing Pages in 3 Weeks', 
    tag: 'Execution support',
    overview: 'A growth agency landed a massive enterprise client but lacked the internal capacity to deploy at speed. We assigned a dedicated pod of 3 developers to ship unopinionated, wildly fast React landing pages.',
    result: 'All 12 pages delivered error-free. The agency retained 100% of the credit and secured a multi-year retainer.'
  },
  'saas-mvp': { 
    title: 'SaaS MVP in 8 Weeks', 
    tag: 'Development partner',
    overview: 'A boutique agency\'s client needed to validate a complex AI-powered SaaS product. We architected the entire stack, from a secure backend to a stunning UI, functioning entirely white-labeled.',
    result: 'Product launched and secured $2M in seed funding within 6 weeks of go-live.'
  },
  'webflow-migration': { 
    title: 'Webflow Migration', 
    tag: 'Agency delivery',
    overview: 'Migrating a massive monolithic WordPress site to a responsive, dynamic Webflow structure, ensuring 100% pixel-perfect fidelity from the agency\'s designs with custom GSAP integration.',
    result: 'Zero SEO drop-off. 2x faster load times.'
  }
}

export function generateStaticParams() {
  return Object.keys(DB).map((slug) => ({ slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = DB[resolvedParams.slug]

  if (!data) {
    return (
      <main style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh', textAlign: 'center' }}>
        <h1 className="h1">Project Not Found</h1>
        <Link href="/" className="btn-primary" style={{ marginTop: 24 }}>Return Home</Link>
      </main>
    )
  }

  return (
    <main style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh' }}>
      <div className="container">
        
        <Link 
          href="/" 
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, opacity: 0.6, marginBottom: 40, textDecoration: 'none', color: '#f0efe8', transition: 'opacity 0.3s' }}
          className="interactive-hover"
        >
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
        
        <div className="glass-card" style={{ padding: 'clamp(40px, 8vw, 80px)', borderRadius: 24, position: 'relative', overflow: 'hidden' }}>
          {/* Aesthetic Background Detail */}
          <div style={{ position: 'absolute', top: -100, right: -100, width: 300, height: 300, background: 'var(--color-accent)', filter: 'blur(150px)', opacity: 0.15, pointerEvents: 'none' }} />

          <span className="label" style={{ color: 'var(--color-accent)' }}>{data.tag}</span>
          <h1 className="display-hero" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', margin: '16px 0 24px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {data.title}
          </h1>
          <div style={{ height: 1, width: '100%', background: 'rgba(255,255,255,0.1)', margin: '40px 0' }} />
          
          <h3 className="h2" style={{ marginBottom: 24 }}>The Build</h3>
          <p className="body-large" style={{ opacity: 0.7, maxWidth: 900, marginBottom: 40 }}>
            {data.overview}
          </p>

          <h3 className="h2" style={{ marginBottom: 24 }}>The Agency Result</h3>
          <p className="body-large" style={{ opacity: 0.7, maxWidth: 900, paddingLeft: 24, borderLeft: '4px solid var(--color-accent)' }}>
            {data.result}
          </p>

          <div style={{ marginTop: 80, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">
              Scale your delivery
            </Link>
            <Link href="/" className="btn-secondary">
              View more work
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
