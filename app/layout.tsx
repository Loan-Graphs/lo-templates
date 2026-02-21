import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LoanGraphs Templates | Free Professional Websites for Loan Officers',
  description: 'Browse, preview, and get professional websites for loan officers. Free with LoanGraphs signup.',
  metadataBase: new URL('https://templates.loangraphs.com'),
  openGraph: {
    title: 'LoanGraphs Templates',
    description: 'Free professional websites for loan officers',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
