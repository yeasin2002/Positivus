import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { SectionsHeader } from "@/components/common";
import { cn } from "@/utils";

interface Props extends React.ComponentProps<"div"> {}

const caseStudyData = [
  {
    label: `For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.`,
    url: "#",
  },
  {
    label: `For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.`,
    url: "#",
  },
  {
    label: `For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.`,
    url: "#",
  },
];

export const CaseStudies = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading="Case Studies"
        description1="Explore Real-Life Examples of Our Proven Digital Marketing "
        description2="Success through Our Case Studies"
      />

      <div className="grid grid-cols-1 md:grid-cols-3  justify-center  bg-main-dark text-main-gray rounded-3xl p-8">
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

              <Link
                to={url}
                className="flex items-center gap-1 text-main-green "
              >
                <span className="text-sm font-semibold">Learn More</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
