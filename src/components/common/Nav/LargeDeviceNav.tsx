import { Button } from "@/components/ui";
import { cn } from "@/utils";
import { Link } from "@tanstack/react-router";
import React from "react";
import { navData } from "./nav.data";
interface Props extends React.ComponentProps<"div"> {}

export const LargeDeviceNav = ({ className, ...props }: Props) => {
  return (
    <div
      id="large-device-nav"
      className={cn("items-center gap-x-12", className)}
      {...props}
    >
      <div className="space-x-6">
        {navData?.map(({ label, link }) => (
          <Link to={link} key={label} className="font-space_grotesk text-lg">
            {label}
          </Link>
        ))}
      </div>
      <Button variant={"secondary"} className="px-7 font-space_grotesk">
        Request a quote
      </Button>
    </div>
  );
};
