import React from "react";
import HeroImg from "@/assets/Illustration/Illustration.svg?react";

import { Button } from "../ui";

interface Props extends React.ComponentProps<"div"> {}

export const Hero = ({ ...rest }: Props) => {
  return (
    <div
      className="grid grid-cols-1 items-center justify-between font-space_grotesk md:grid-cols-2"
      {...rest}
    >
      <div>
        <h1 className="text-3xl font-medium md:text-6xl">
          Navigating the <br className="hidden md:block" /> digital landscape
          <br className="hidden md:block" /> for success
        </h1>
        <h2 className="my-4">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </h2>
        <Button>Book a consultations</Button>
      </div>

      <div className="flex items-center justify-center">
        <HeroImg className="w-full" />
      </div>
    </div>
  );
};
