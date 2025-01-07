import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about-us/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/about-us/"!</div>;
}
