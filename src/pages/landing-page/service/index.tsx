import React from "react";

import { ProposalBanner } from "./ProposalBanner";
import { ServiceCard } from "./ServiceCard";
import { serviceList } from "./serviceList.data";

interface Props extends React.ComponentProps<"div"> {}

export const Service = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <div className="font-space_grotesk flex   md:items-center gap-x-10 flex-col md:flex-row gap-y-4 my-10">
        <h3 className="section-header">Service</h3>
        <p className="text-sm md:w-[50%]   ">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {serviceList.map((data) => (
          <ServiceCard service={data} key={data.heading1 + data.heading2} />
        ))}
      </div>

      <ProposalBanner />
    </div>
  );
};
