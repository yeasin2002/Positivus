import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/pricing/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pricing/"!</div>
}
