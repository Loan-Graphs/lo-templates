import Image from 'next/image'
import type { TemplateProps } from '../types'

export function LOView({ loanOfficer: lo, blogPosts }: TemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-navy-900 text-white" style={{ backgroundColor: '#1a2744' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={lo.photo} alt={lo.name} width={40} height={40} className="rounded-full" />
            <div>
              <div className="font-semibold">{lo.name}</div>
              <div className="text-xs text-gray-300">NMLS #{lo.nmls}</div>
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-blue-300 transition">About</a>
            <a href="#services" className="hover:text-blue-300 transition">Services</a>
            <a href="#reviews" className="hover:text-blue-300 transition">Reviews</a>
            <a href="#contact" className="hover:text-blue-300 transition">Contact</a>
          </div>
          <a href={`tel:${lo.phone}`} className="text-sm font-medium hover:text-blue-300">{lo.phone}</a>
        </div>
      </header>

      {/* Hero with sidebar layout */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Trusted Mortgage Professional</h1>
          <p className="text-lg text-gray-600 mb-6">{lo.bio}</p>
          <div className="flex flex-wrap gap-3 mb-8">
            {lo.loanTypes.map((type, i) => (
              <span key={i} className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm font-medium">{type}</span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href={`mailto:${lo.email}`} className="px-6 py-3 text-white rounded-lg font-semibold transition" style={{ backgroundColor: '#1a2744' }}>Get Pre-Approved</a>
            <a href={`tel:${lo.phone}`} className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:border-gray-500 transition">Call Now</a>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 border">
          <Image src={lo.photo} alt={lo.name} width={200} height={200} className="rounded-xl mx-auto mb-4" />
          <h3 className="text-lg font-bold text-center text-gray-900">{lo.name}</h3>
          <p className="text-sm text-center text-gray-500 mb-4">{lo.title}</p>
          <div className="space-y-3 text-sm">
            <a href={`mailto:${lo.email}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-800">📧 {lo.email}</a>
            <a href={`tel:${lo.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-800">📞 {lo.phone}</a>
            <p className="text-gray-600">📍 {lo.licensedStates.join(', ')}</p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-gray-900 mb-1">{lo.yearsInIndustry}+</div>
            <p className="text-gray-500">Years Experience</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-gray-900 mb-1">{lo.licensedStates.length}</div>
            <p className="text-gray-500">States Licensed</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-gray-900 mb-1">5.0★</div>
            <p className="text-gray-500">Average Rating</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {lo.testimonials.map((t, i) => (
            <div key={i} className="border rounded-xl p-6">
              <div className="flex gap-1 mb-3">{[...Array(t.rating)].map((_, j) => <span key={j} className="text-yellow-500">★</span>)}</div>
              <p className="text-gray-600 mb-4">&ldquo;{t.text}&rdquo;</p>
              <p className="font-semibold text-gray-900 text-sm">— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white border rounded-xl overflow-hidden">
                <div className="relative h-40"><Image src={post.image} alt={post.title} fill className="object-cover" /></div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2">{new Date(post.date).toLocaleDateString()}</p>
                  <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-400 text-sm border-t" style={{ backgroundColor: '#1a2744', color: '#94a3b8' }}>
        <p>NMLS #{lo.nmls} | Licensed in {lo.licensedStates.join(', ')}</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} {lo.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}
