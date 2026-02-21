import { TemplateSwitcher } from '@/components/TemplateSwitcher'
import { CtaBanner } from '@/components/CtaBanner'

export default function TemplateLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { 'template-name': string; viewMode: 'loan-officer' | 'company' }
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <CtaBanner />
      <TemplateSwitcher currentTemplate={params['template-name']} viewMode={params.viewMode} />
      <div className="bg-white">
        {children}
      </div>
    </div>
  )
}
