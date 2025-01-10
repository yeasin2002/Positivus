import {
  CaseStudies,
  ClientList,
  ContactUs,
  Hero,
  Service,
  Team,
  Testimonials,
  WorkingProcess,
} from "@/pages/landing-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="font-space_grotesk font-normal">
      <Hero />
      <ClientList />
      <Service />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
    </div>
  );
}
