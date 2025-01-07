import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/blog/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog/"!</div>
}
