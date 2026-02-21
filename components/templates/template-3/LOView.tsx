import Image from 'next/image'
import type { TemplateProps } from '../types'

export function LOView({ loanOfficer: lo, blogPosts }: TemplateProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between">
        <span className="text-sm tracking-widest uppercase font-light">{lo.name}</span>
        <div className="hidden md:flex gap-8 text-sm text-gray-500">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm text-gray-400 tracking-widest uppercase mb-4">{lo.title}</p>
            <h1 className="text-5xl font-light mb-6 leading-tight">{lo.name}</h1>
            <p className="text-gray-500 leading-relaxed mb-8">{lo.bio}</p>
            <a href={`mailto:${lo.email}`} className="inline-block text-sm tracking-widest uppercase border-b-2 border-gray-900 pb-1 hover:border-gray-400 transition">Get in touch →</a>
          </div>
          <div>
            <Image src={lo.photo} alt={lo.name} width={400} height={400} className="rounded-lg grayscale hover:grayscale-0 transition duration-700" />
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-20 grid grid-cols-3 gap-8 text-center">
          <div><div className="text-2xl font-light">{lo.yearsInIndustry}</div><p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Years</p></div>
          <div><div className="text-2xl font-light">{lo.licensedStates.length}</div><p className="text-xs text-gray-400 uppercase tracking-widest mt-1">States</p></div>
          <div><div className="text-2xl font-light">{lo.loanTypes.length}</div><p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Programs</p></div>
        </div>
      </section>

      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-sm tracking-widest uppercase text-gray-400 mb-12">Services</h2>
          <div className="space-y-6">
            {lo.loanTypes.map((type, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-gray-200">
                <span className="text-lg font-light">{type}</span>
                <span className="text-sm text-gray-400">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-sm tracking-widest uppercase text-gray-400 mb-12">Testimonials</h2>
        <div className="space-y-12">
          {lo.testimonials.map((t, i) => (
            <div key={i} className="border-l-2 border-gray-200 pl-8">
              <p className="text-xl font-light text-gray-700 italic mb-4">&ldquo;{t.text}&rdquo;</p>
              <p className="text-sm text-gray-400">— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-sm tracking-widest uppercase text-gray-400 mb-12">Journal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <div key={post.id}>
                <div className="relative h-48 mb-4"><Image src={post.image} alt={post.title} fill className="object-cover rounded-lg grayscale" /></div>
                <p className="text-xs text-gray-400 mb-2">{new Date(post.date).toLocaleDateString()}</p>
                <h3 className="font-light text-lg">{post.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-light mb-4">Let&apos;s talk</h2>
        <p className="text-gray-400 mb-8">{lo.email} · {lo.phone}</p>
        <a href={`mailto:${lo.email}`} className="inline-block text-sm tracking-widest uppercase border-b-2 border-gray-900 pb-1">Send a message →</a>
      </section>

      <footer className="border-t border-gray-100 py-8 px-6 text-center text-xs text-gray-400">
        <p>NMLS #{lo.nmls} · {lo.licensedStates.join(', ')}</p>
        <p className="mt-1">&copy; {new Date().getFullYear()} {lo.name}</p>
      </footer>
    </div>
  )
}
