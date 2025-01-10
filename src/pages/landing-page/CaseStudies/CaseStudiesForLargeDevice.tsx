import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/utils";
import { caseStudyData } from "./caseStudyData.data";

interface Props extends React.ComponentProps<"div"> {}

export const CaseStudiesForLargeDevice = ({ ...props }: Props) => {
  return (
    <div
      className=" hidden     md:grid grid-cols-1 md:grid-cols-3  justify-center  bg-main-dark text-main-gray rounded-3xl p-8"
      {...props}
    >
      {caseStudyData.map(({ label, url }, index) => {
        return (
          <div
            key={label}
            className={cn(
              "flex flex-col justify-between",
              { "pl-8": index === 2 },
              { "pr-4": index === 0 },
              {
                "px-8 border-l border-l-main-gray  border-r border-r-main-gray":
                  index === 1,
              }
            )}
          >
            <p className="text-sm"> {label} </p>

            <Link to={url} className="flex items-center gap-1 text-main-green ">
              <span className="text-sm font-semibold">Learn More</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
