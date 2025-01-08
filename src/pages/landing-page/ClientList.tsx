import React from "react";

import { Marquee } from "@/components/ui";

import { clientListData } from "./clientList.data";

interface Props extends React.ComponentProps<"div"> {}
interface CardProps extends React.ComponentProps<"div"> {
  data: (typeof clientListData)[number];
}
const CompanyCard = ({ data }: CardProps) => {
  return (
    <>
      <data.image className=" mx-1 sm:mx-4 md:mx-10" />
    </>
  );
};

export const ClientList = ({ ...props }: Props) => {
  return (
    <div {...props} className="my-8">
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden  ">
        <Marquee pauseOnHover className="[--duration:50s]">
          {clientListData.map((company) => (
            <CompanyCard key={company.name} data={company} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:50s]">
          {clientListData.map((company) => (
            <CompanyCard key={company.name} data={company} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background "></div>
      </div>
    </div>
  );
};
