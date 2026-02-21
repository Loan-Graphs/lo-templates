export interface LoanOfficer {
  name: string
  nmls: string
  title: string
  email: string
  phone: string
  bio: string
  photo: string
  licensedStates: string[]
  loanTypes: string[]
  certifications: string[]
  yearsInIndustry: number
  testimonials: { author: string; text: string; rating: number }[]
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
