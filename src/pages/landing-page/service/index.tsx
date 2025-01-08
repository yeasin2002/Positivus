import React from "react";

import { SectionsHeader } from "@/components/common";

import { ProposalBanner } from "./ProposalBanner";
import { ServiceCard } from "./ServiceCard";
import { serviceList } from "./serviceList.data";

interface Props extends React.ComponentProps<"div"> {}

export const Service = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading="Services"
        description1="At our digital marketing agency, we offer a range of services to"
        description2="help businesses navigate the digital landscape and achieve success:"
      />

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {serviceList.map((data) => (
          <ServiceCard service={data} key={data.heading1 + data.heading2} />
        ))}
      </div>

      <ProposalBanner />
    </div>
  );
};
