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
      className={cn("items-center gap-x-12", className)}
      {...props}
    >
      <div className="space-x-6">
        {navigationData?.map(({ label, link }) => (
          <Link to={link} key={label} className=" text-lg">
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
