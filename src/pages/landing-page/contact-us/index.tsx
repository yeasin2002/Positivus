import HalfRing from "@/assets/Illustration/half-zig-ring.svg?react";

import { SectionsHeader } from "@/components/common";

import { ContactForm } from "./ContactForm";

interface Props extends React.ComponentProps<"div"> {}

export const ContactUs = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading="Contact Us"
        description1="Connect with Us: Let's Discuss Your"
        description2="Digital Marketing Needs"
      />

      <div className="relative bg-main-gray min-h-60  rounded-3xl overflow-hidden my-4">
        <div className="p-10">
          <ContactForm />
          <HalfRing className="absolute right-0 top-0 w-60   translate-x-28" />
        </div>
      </div>
    </div>
  );
};
