import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// Mock database simulating capability lookup
const DB: Record<string, { title: string, subtitle: string, overview: string }> = {
  'web-development': { 
    title: 'Web Development', 
    subtitle: 'High-performance React & Next.js applications.',
    overview: 'We build insanely fast, secure, and infinitely scalable web platforms using the React/Next.js ecosystem. Our sites score 99+ on lighthouse and are engineered to convert.'
  },
  'webflow-production': { 
    title: 'Webflow Production', 
    subtitle: 'End-to-end design translation and CMS scaffolding.',
    overview: 'We take pixel-perfect Figma designs and translate them into robust Webflow structures, maintaining 100% fidelity and injecting complex interactions using GSAP natively.'
  },
  'landing-pages-funnels': { 
    title: 'Landing Pages & Funnels', 
    subtitle: 'High-converting pages focused strictly on ROI.',
    overview: 'We build unopinionated A/B tested pipelines, seamlessly connecting tracking scripts, dynamic content replacement, and direct funnel mechanisms for your media buyers.'
  },
  'ai-automation': { 
    title: 'AI Automation', 
    subtitle: 'N8N, Make, and Zapier integrated workflows.',
    overview: 'We hook your data streams up to large language models, automating lead triaging, internal syncs, and massive programmatic SEO generation processes.'
  },
  'internal-tools-dashboards': { 
    title: 'Internal Tools & Dashboards', 
    subtitle: 'Custom applications that run your operations.',
    overview: 'We scaffold secure, internal-access-only React applications connected to your Postgres and MongoDB instances to help you visualize metrics across your entire organization.'
  },
  'mvp-builds': { 
    title: 'MVP Builds', 
    subtitle: 'Lightning-fast validation products.',
    overview: 'Got an agency client with a massive idea? We ship the critical path feature set in 21 days or less so they can secure funding or acquire their first 100 paid users immediately.'
  }
}

export default async function CapabilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = DB[resolvedParams.slug]

  if (!data) {
    return (
      <main style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh', textAlign: 'center' }}>
        <h1 className="h1">Capability Not Found</h1>
        <Link href="/" className="btn-primary" style={{ marginTop: 24 }}>Return Home</Link>
      </main>
    )
  }

  return (
    <main style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh' }}>
      <div className="container">
        
        <Link 
          href="/" 
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, opacity: 0.6, marginBottom: 40 }}
          className="interactive-hover"
        >
          <ArrowLeft size={20} /> Back to capabilities
        </Link>
        
        <div className="glass-card" style={{ padding: 'clamp(40px, 8vw, 80px)', borderRadius: 24 }}>
          <span className="label">Execution Service Node</span>
          <h1 className="display-hero" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', margin: '16px 0 24px' }}>
            {data.title}
          </h1>
          <p className="h3" style={{ opacity: 0.8, maxWidth: 800, marginBottom: 40, lineHeight: 1.4 }}>
            {data.subtitle}
          </p>
          <div style={{ height: 1, width: '100%', background: 'rgba(255,255,255,0.1)', marginBottom: 40 }} />
          <h3 className="h2" style={{ marginBottom: 24 }}>Overview</h3>
          <p className="body-large" style={{ opacity: 0.7, maxWidth: 900 }}>
            {data.overview}
          </p>
          <button className="btn-primary interactive-hover" style={{ marginTop: 60 }}>
            Request capability execution
          </button>
        </div>
      </div>
    </main>
  )
}
