import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/common";
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
      <Footer />
    </div>
  );
}
