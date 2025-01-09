import HalfRing from "@/assets/Illustration/halh-ring-with-starts.svg?react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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

      <div className="relative bg-main-gray min-h-60  rounded-3xl  my-4 overflow-hidden">
        <div className="p-10">
          <RadioGroup defaultValue="option-one" className="flex gap-x-5">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Say Hi</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Get a Quote</Label>
            </div>
          </RadioGroup>

          <ContactForm />
          <HalfRing className="absolute right-0 top-0 w-96  translate-x-44 " />
        </div>
      </div>
    </div>
  );
};
