/**
 * Thumbnail Generation Script
 * 
 * Generates SVG-based thumbnail placeholders for each template.
 * For production, replace with Puppeteer screenshots of actual rendered templates.
 * 
 * Run: node scripts/generate-thumbnails.mjs
 */

import { writeFileSync, mkdirSync } from 'fs'

const templates = [
  { id: 'template-1', name: 'Modern Dark', bg: '#0f172a', accent: '#3b82f6', text: '#ffffff' },
  { id: 'template-2', name: 'Classic Pro', bg: '#ffffff', accent: '#1a2744', text: '#1a2744' },
  { id: 'template-3', name: 'Minimal Clean', bg: '#ffffff', accent: '#e5e7eb', text: '#111827' },
  { id: 'template-4', name: 'Corporate Plus', bg: '#f9fafb', accent: '#15803d', text: '#15803d' },
  { id: 'template-5', name: 'Dynamic Blue', bg: '#eff6ff', accent: '#2563eb', text: '#1e3a8a' },
  { id: 'template-6', name: 'Elegant White', bg: '#faf9f6', accent: '#b8a88a', text: '#2c2420' },
  { id: 'template-7', name: 'Bold Orange', bg: '#111827', accent: '#f97316', text: '#ffffff' },
  { id: 'template-8', name: 'Nathan Pro', bg: '#0f172a', accent: '#2563eb', text: '#ffffff' },
]

mkdirSync('public/thumbnails', { recursive: true })

for (const t of templates) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <rect width="600" height="400" fill="${t.bg}"/>
  <rect x="0" y="0" width="600" height="60" fill="${t.accent}" opacity="0.9"/>
  <text x="24" y="38" fill="${t.text}" font-family="system-ui, sans-serif" font-size="16" font-weight="bold">${t.name}</text>
  <text x="550" y="38" fill="${t.text}" font-family="system-ui, sans-serif" font-size="12" text-anchor="end" opacity="0.7">LoanGraphs</text>
  <rect x="40" y="100" width="240" height="24" rx="4" fill="${t.accent}" opacity="0.3"/>
  <rect x="40" y="140" width="320" height="12" rx="3" fill="${t.accent}" opacity="0.15"/>
  <rect x="40" y="162" width="280" height="12" rx="3" fill="${t.accent}" opacity="0.15"/>
  <rect x="40" y="200" width="120" height="40" rx="6" fill="${t.accent}"/>
  <text x="100" y="225" fill="${t.bg === '#ffffff' || t.bg === '#faf9f6' || t.bg === '#f9fafb' || t.bg === '#eff6ff' ? '#ffffff' : t.bg}" font-family="system-ui" font-size="12" text-anchor="middle" font-weight="bold">Get Started</text>
  <rect x="400" y="80" width="160" height="160" rx="12" fill="${t.accent}" opacity="0.2"/>
  <circle cx="480" cy="160" r="40" fill="${t.accent}" opacity="0.3"/>
  <rect x="40" y="280" width="160" height="80" rx="8" fill="${t.accent}" opacity="0.1"/>
  <rect x="220" y="280" width="160" height="80" rx="8" fill="${t.accent}" opacity="0.1"/>
  <rect x="400" y="280" width="160" height="80" rx="8" fill="${t.accent}" opacity="0.1"/>
</svg>`

  writeFileSync(`public/thumbnails/${t.id}.svg`, svg)
  console.log(`Generated: public/thumbnails/${t.id}.svg`)
}

console.log('\\nDone! 8 thumbnails generated.')
