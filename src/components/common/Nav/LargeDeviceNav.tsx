import React from "react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui";
import { cn } from "@/utils";
import { navigationData } from "../../../data/navigation.data";

interface Props extends React.ComponentProps<"div"> {}

export const LargeDeviceNav = ({ className, ...props }: Props) => {
  return (
    <div
      id="large-device-nav"
      className={cn("items-center gap-x-12 lg:gap-x-2", className)}
      {...props}
    >
      <div className="xl:space-x-6  lg:flex-1  lg:space-x-4">
        {navigationData?.map(({ label, link }) => (
          <Link to={link} key={label} className=" text-lg lg:text-base ">
            {label}
          </Link>
        ))}
      </div>
      <Button variant={"secondary"} className="px-7 ">
        Request a quote
      </Button>
    </div>
  );
};
