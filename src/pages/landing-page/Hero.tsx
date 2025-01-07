import HeroImg from "@/assets/Illustration/Illustration.svg?react";

import { Button } from "@/components/ui";

interface Props extends React.ComponentProps<"main"> {}

export const Hero = ({ ...rest }: Props) => {
  return (
    <main
      className="grid grid-cols-1 items-center justify-between font-space_grotesk md:grid-cols-2 h-full md:my-4"
      {...rest}
    >
      <div>
        <h1 className="text-3xl font-medium md:text-6xl lea leading-tight ">
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
    </main>
  );
};
