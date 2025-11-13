import { Suspense } from 'react'
import { PageBackground } from "@/components/page-background"
import { SignupForm } from './signup-form'

export const dynamic = 'force-dynamic'

interface SignupPageProps {
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default function SignupPage({ searchParams }: SignupPageProps) {
  const serviceParam = typeof searchParams?.service === 'string' ? searchParams?.service : Array.isArray(searchParams?.service) ? searchParams?.service[0] : undefined

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-900 relative overflow-hidden">
        <PageBackground />
        <div className="relative z-10">Loading...</div>
      </div>
    }>
      <SignupForm initialService={serviceParam} />
    </Suspense>
  )
}








