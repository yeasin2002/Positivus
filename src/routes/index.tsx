import { createFileRoute } from '@tanstack/react-router'

import { Nav } from '@/components/common/Nav'
import { Hero } from '@/components/root-route/Hero'
import { RootErrorBoundary } from '@/components/root-route/RootErrors'
import { RootNotFound } from '@/components/root-route/RootNotFound'

export const Route = createFileRoute('/')({
  component: HomeComponent,
  notFoundComponent: RootNotFound,
  errorComponent: RootErrorBoundary,
})

function HomeComponent() {
  return (
    <div>
      <Nav />
      <Hero />
    </div>
  )
}
