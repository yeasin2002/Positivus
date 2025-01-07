import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/service/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/service/"!</div>;
}
