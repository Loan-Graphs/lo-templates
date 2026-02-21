import Image from 'next/image'
import stockData from '@/data/stock-data.json'
import Link from 'next/link'

interface PageProps {
  params: {
    'template-name': string
    viewMode: 'loan-officer' | 'company'
  }
}

export default function TemplatePreviewPage({ params }: PageProps) {
  const template = stockData.templates.find(t => t.id === params['template-name'])
  const isLOView = params.viewMode === 'loan-officer'
  const lo = stockData.loanOfficer
  const company = stockData.company

  if (!template) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Template not found</h1>
        <p className="text-gray-600 mt-2">The template you're looking for doesn't exist yet.</p>
        <Link href="/" className="text-primary hover:underline mt-4 inline-block">
          Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Template Preview Container */}
      <div className="bg-white">
        {/* Placeholder Content */}
        <div className="py-20 px-4 md:px-8">
          <div className="container-fluid">
            {isLOView ? (
              // Loan Officer View
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {template.name} - Loan Officer Preview
                </h1>
                <p className="text-gray-600 mb-8">
                  This is a preview of the {template.name} template with {lo.name}'s information.
                </p>

                {/* LO Hero Section */}
                <div className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg p-12 mb-12 flex items-center gap-8">
                  <div className="flex-shrink-0">
                    <Image
                      src={lo.photo}
                      alt={lo.name}
                      width={150}
                      height={150}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-3xl font-bold mb-2">{lo.name}</h2>
                    <p className="text-blue-100 mb-4">{lo.title}</p>
                    <p className="text-blue-100 mb-4">{lo.bio}</p>
                    <div className="flex gap-4">
                      <a href={`mailto:${lo.email}`} className="px-4 py-2 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50">
                        Email Me
                      </a>
                      <a href={`tel:${lo.phone}`} className="px-4 py-2 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50">
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>

                {/* LO Details */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">NMLS #</h3>
                    <p className="text-gray-600">{lo.nmls}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                    <p className="text-gray-600">{lo.yearsInIndustry} years in the industry</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Licensed States</h3>
                    <p className="text-gray-600">{lo.licensedStates.join(', ')}</p>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Testimonials</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {lo.testimonials.map((testimonial, idx) => (
                      <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex gap-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                        </div>
                        <p className="text-gray-600 italic mb-3">"{testimonial.text}"</p>
                        <p className="font-semibold text-gray-900">- {testimonial.author}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Company View
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {template.name} - Company Preview
                </h1>
                <p className="text-gray-600 mb-8">
                  This is a preview of the {template.name} template for {company.name}.
                </p>

                {/* Company Hero Section */}
                <div className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg p-12 mb-12">
                  <h2 className="text-3xl font-bold mb-2">{company.name}</h2>
                  <p className="text-blue-100 mb-6">{company.about}</p>
                  <a href={`mailto:${company.email}`} className="inline-block px-6 py-2 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50">
                    Contact Us
                  </a>
                </div>

                {/* Team Section */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {company.loanOfficers.map((officer, idx) => (
                      <div key={idx} className="bg-gray-50 p-6 rounded-lg text-center">
                        <Image
                          src={officer.photo}
                          alt={officer.name}
                          width={100}
                          height={100}
                          className="rounded-full mx-auto mb-4"
                        />
                        <h4 className="font-semibold text-gray-900">{officer.name}</h4>
                        <p className="text-gray-600 text-sm">{officer.title}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Offices Section */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Locations</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {company.offices.map((office, idx) => (
                      <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">{office.city}, {office.state}</h4>
                        <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                        <a href={`tel:${office.phone}`} className="text-primary font-semibold hover:underline">
                          {office.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Blog Section */}
        <div className="bg-gray-50 py-12 px-4 md:px-8">
          <div className="container-fluid">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {stockData.content.blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="relative h-40 bg-gray-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-2">{new Date(post.date).toLocaleDateString()}</p>
                    <h4 className="font-semibold text-gray-900 mb-2">{post.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <a href="#" className="text-primary font-semibold hover:underline text-sm">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white py-12 px-4 md:px-8">
          <div className="container-fluid text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Your Own Website?</h3>
            <p className="text-blue-100 mb-6">Sign up for LoanGraphs and customize this template with your information.</p>
            <a
              href="https://loangraphs.com/signup"
              className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Get This Template Free
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
