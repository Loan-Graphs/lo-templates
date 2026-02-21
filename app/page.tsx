import Link from 'next/link'
import Image from 'next/image'
import stockData from '@/data/stock-data.json'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container-fluid">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold text-primary">LoanGraphs Templates</div>
            <a 
              href="https://loangraphs.com/signup" 
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up Free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16 text-center bg-gradient-to-br from-blue-50 to-white">
        <div className="container-fluid">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Websites for Loan Officers
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse beautiful, ready-to-use website templates designed specifically for mortgage professionals. Get started free with LoanGraphs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="https://loangraphs.com/signup" 
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
            >
              Get Started Free
            </a>
            <a 
              href="#templates" 
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-blue-50 transition text-lg"
            >
              View Templates
            </a>
          </div>
          <p className="text-sm text-gray-500">
            ✨ Free tier: Up to 5,000 monthly visitors • Full customization • No credit card required
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container-fluid">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose LoanGraphs Templates?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📱",
                title: "Mobile Responsive",
                description: "Perfectly optimized for all devices - desktop, tablet, and mobile."
              },
              {
                icon: "🎨",
                title: "Fully Customizable",
                description: "Easy-to-use customization tools - no coding required. Add your branding, photos, and content."
              },
              {
                icon: "🔍",
                title: "SEO Optimized",
                description: "Built for search engines with meta tags, schema markup, and fast loading times."
              },
              {
                icon: "📊",
                title: "Mortgage Calculators",
                description: "Integrated mortgage calculators help leads estimate their monthly payments."
              },
              {
                icon: "📝",
                title: "Lead Capture",
                description: "Built-in contact forms and lead management to grow your business."
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Powered by Next.js and deployed on Vercel for optimal performance."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Gallery Section */}
      <section id="templates" className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container-fluid">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Explore Our Templates</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stockData.templates.map((template) => (
              <Link 
                key={template.id} 
                href={`/${template.id}/loan-officer`}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <Image
                      src={template.thumbnail}
                      alt={template.name}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{template.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{template.description}</p>
                    <button className="w-full py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition">
                      Preview Template
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="container-fluid">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Active LOs</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <p className="text-blue-100">Premium Templates</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <p className="text-blue-100">Monthly Visitors</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$0</div>
              <p className="text-blue-100">Setup Cost</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 text-center bg-gray-50">
        <div className="container-fluid">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sign up for LoanGraphs and get your professional website up and running in minutes.
          </p>
          <a 
            href="https://loangraphs.com/signup" 
            className="inline-block px-10 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
          >
            Sign Up for Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 md:px-8 lg:px-16">
        <div className="container-fluid">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">LoanGraphs</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><a href="https://loangraphs.com" className="hover:text-white transition">Main Site</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Templates</h3>
              <ul className="space-y-2">
                {stockData.templates.slice(0, 3).map(t => (
                  <li key={t.id}>
                    <Link href={`/${t.id}/loan-officer`} className="hover:text-white transition">
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <p className="text-sm">support@loangraphs.com</p>
              <p className="text-sm mt-2">(555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p>&copy; 2024 LoanGraphs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
