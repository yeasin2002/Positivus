import React from "react";
import { cn } from "@/utils";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { serviceList } from "./serviceList.data";

interface Props extends React.ComponentProps<"div"> {
  service: (typeof serviceList)[number];
}

export const ServiceCard = ({ service, className, ...props }: Props) => {
  const headingStyle = {
    "bg-main-green": service.bgColor === "gray",
    "bg-[#F3F3F3]": service.bgColor === "black" || service.bgColor === "green",
  };

  return (
    <div
      {...props}
      className={cn(
        "border border-main-black w-full rounded-3xl  grid grid-cols-2 p-8   border-b-4 border-b-main-black",
        className,
        {
          "bg-main-gray": service.bgColor === "gray",
          "bg-main-black": service.bgColor === "black",
          "bg-main-green": service.bgColor === "green",
        }
      )}
    >
      <div className="flex flex-col justify-between">
        <h6 className={cn("text-xl font-semibold")}>
          <span className={cn("p-2 rounded-xl", headingStyle)}>
            {service.heading1}
          </span>
          <br />
          <span className={cn("p-2 rounded-xl", headingStyle)}>
            {service.heading2}
          </span>
        </h6>

        <Link
          to={service.extantLink || "#"}
          className="flex items-center gap-x-1"
        >
          <span
            className={cn(
              `flex items-center justify-center bg-main-black p-2 rounded-full`,
              { "bg-main-gray": service.bgColor === "black" }
            )}
          >
            <ArrowUpRight
              className={cn("text-main-green", {
                "text-main-black": service.bgColor === "black",
              })}
            />
          </span>
          <span
            className={cn("text-main-black", {
              "text-main-gray": service.bgColor === "black",
            })}
          >
            Learn More
          </span>
        </Link>
      </div>
      <service.Element className="w-28" />
    </div>
  );
};
