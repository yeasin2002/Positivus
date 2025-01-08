import { ClientList, Hero, Service } from "@/pages/landing-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <Hero />
      <ClientList />
      <Service />
    </>
  );
}
