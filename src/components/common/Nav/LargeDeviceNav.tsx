import React from "react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui";
import { navigationData } from "@/data";
import { cn } from "@/utils";

interface Props extends React.ComponentProps<"div"> {}

export const LargeDeviceNav = ({ className, ...props }: Props) => {
  return (
    <div
      id="large-device-nav"
      className={cn("items-center gap-x-12 lg:gap-x-4", className)}
      {...props}
    >
      <div className="xl:space-x-6  lg:flex-1 lg:space-x-3">
        {navigationData?.map(({ label }) => (
          <Link
            to={"/"}
            key={label}
            className=" text-lg lg:text-base  rounded-md"
            // activeProps={{ className: "bg-main-green" }}
          >
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
