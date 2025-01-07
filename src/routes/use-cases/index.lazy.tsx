import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/use-cases/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/use-cases/"!</div>;
}
