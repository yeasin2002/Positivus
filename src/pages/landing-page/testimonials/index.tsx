import { Swiper, SwiperSlide } from "swiper/react";

import Star from "@/assets/icons/star.svg?react";

import "swiper/css";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { SectionsHeader } from "@/components/common";
import { ReviewCards } from "./ReviewCards";
import { TestimonialsReviewData } from "./testimonialsReview.data";

interface Props extends React.ComponentProps<"div"> {}

export const Testimonials = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading="Testimonials"
        description1="Hear from Our Satisfied Clients: Read Our Testimonials "
        description2="to Learn More about Our Digital Marketing Services"
      />

      <div className="bg-main-black  rounded-3xl py-10 my-10 px-2">
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides
          breakpoints={{
            768: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
          }}
        >
          {TestimonialsReviewData.map((data) => (
            <SwiperSlide key={data.name + data.position}>
              <ReviewCards data={data} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-evenly mt-20 md:mt-8 ">
          <ArrowLeft className="text-white" />
          <div className="flex items-center gap-x-4">
            <Star className="text-main-green" />
            <Star />
            <Star />
          </div>
          <ArrowRight className="text-white" />
        </div>
      </div>
    </div>
  );
};
