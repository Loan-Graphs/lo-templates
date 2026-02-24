// LoanProduct (used in loanProducts array)
export interface LoanProduct {
  id: string
  name: string
  description: string
  icon?: string
}

// Testimonial (used in testimonials array)
export interface Testimonial {
  id?: string
  author: string
  text: string
  rating: number
  date?: string
}

// Core LoanOfficer interface — covers all fields used by any template
// All fields present in stock-data.json are required here
export interface LoanOfficer {
  // Identity
  name: string
  nmls: string
  title: string
  email: string
  phone: string
  bio: string
  photo: string
  company: string

  // Licensing (both spellings present in stock data)
  licensedStates: string[]
  licenseStates: string[]

  // Social proof
  googleRating: number
  reviewCount: number
  yearsExperience: number
  yearsInIndustry: number

  // Branding
  primaryColor: string
  accentColor: string

  // Content
  headline: string
  subheadline: string
  loanProducts: LoanProduct[]
  testimonials: Testimonial[]
  differentiators: string[]

  // Legacy fields
  loanTypes: string[]
  certifications: string[]
}

export interface Company {
  name: string
  logo: string
  phone: string
  email: string
  website: string
  about: string
  foundedYear: number
  loanOfficers: { name: string; title: string; photo: string }[]
  offices: { city: string; state: string; address: string; phone: string }[]
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  image: string
}

export interface TemplateProps {
  loanOfficer: LoanOfficer
  company: Company
  blogPosts: BlogPost[]
}
