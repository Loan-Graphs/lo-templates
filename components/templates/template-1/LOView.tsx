import Image from 'next/image'
import type { TemplateProps } from '../types'

export function LOView({ loanOfficer: lo, blogPosts }: TemplateProps) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold">{lo.name}</span>
        <div className="hidden md:flex gap-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#reviews" className="hover:text-white transition">Reviews</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <a href={`tel:${lo.phone}`} className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium hover:bg-blue-500 transition">{lo.phone}</a>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-blue-400 font-medium mb-3">NMLS #{lo.nmls}</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{lo.name}</h1>
            <p className="text-xl text-gray-300 mb-4">{lo.title}</p>
            <p className="text-gray-400 mb-8 max-w-lg">{lo.bio}</p>
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${lo.email}`} className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-500 transition">Get Pre-Approved</a>
              <a href={`tel:${lo.phone}`} className="px-6 py-3 border border-gray-600 rounded-lg font-semibold hover:border-white transition">Call Now</a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image src={lo.photo} alt={lo.name} width={280} height={280} className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div className="text-3xl font-bold text-blue-400">{lo.yearsInIndustry}+</div><p className="text-gray-400 text-sm mt-1">Years Experience</p></div>
          <div><div className="text-3xl font-bold text-blue-400">{lo.licensedStates.length}</div><p className="text-gray-400 text-sm mt-1">States Licensed</p></div>
          <div><div className="text-3xl font-bold text-blue-400">{lo.loanTypes.length}</div><p className="text-gray-400 text-sm mt-1">Loan Programs</p></div>
          <div><div className="text-3xl font-bold text-blue-400">5★</div><p className="text-gray-400 text-sm mt-1">Client Rating</p></div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Loan Programs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {lo.loanTypes.map((type, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition">
              <h3 className="text-lg font-semibold mb-2">{type}</h3>
              <p className="text-gray-400 text-sm">Expert guidance through the {type.toLowerCase()} loan process.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="bg-gray-900/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {lo.testimonials.map((t, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="flex gap-1 mb-3">{[...Array(t.rating)].map((_, j) => <span key={j} className="text-yellow-400">★</span>)}</div>
                <p className="text-gray-300 italic mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-sm">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition">
              <div className="relative h-44"><Image src={post.image} alt={post.title} fill className="object-cover" /></div>
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2">{new Date(post.date).toLocaleDateString()}</p>
                <h3 className="font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8">Contact {lo.name} today for a free consultation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`mailto:${lo.email}`} className="px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition">Email Me</a>
            <a href={`tel:${lo.phone}`} className="px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition">Call {lo.phone}</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-8 px-6 text-center text-gray-500 text-sm">
        <p>NMLS #{lo.nmls} | {lo.licensedStates.join(', ')}</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} {lo.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}
