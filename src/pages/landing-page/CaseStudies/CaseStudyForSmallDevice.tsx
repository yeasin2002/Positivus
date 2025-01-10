import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import { cn } from "@/utils";
import { caseStudyData } from "./caseStudyData.data";

interface Props extends React.ComponentProps<"div"> {}

export const CaseStudyForSmallDevice = ({ ...props }: Props) => {
  return (
    <div {...props} className="md:hidden">
      <Swiper slidesPerView={1.2} spaceBetween={10}>
        {caseStudyData.map((item) => (
          <SwiperSlide
            key={item.label}
            className=" min-h-56 bg-main-dark text-main-gray rounded-3xl p-4"
          >
            <div className={cn("flex flex-col justify-between")}>
              <p className="text-sm"> {item.label} </p>
              <Link
                to={"/"}
                className="flex items-center gap-1 text-main-green "
              >
                <span className="text-sm font-semibold">Learn More</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
