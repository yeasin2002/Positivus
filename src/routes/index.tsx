import { CaseStudies, ClientList, Hero, Service } from "@/pages/landing-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="font-space_grotesk">
      <Hero />
      <ClientList />
      <Service />
      <CaseStudies />
    </div>
  );
}
