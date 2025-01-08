import FaceStar from "@/assets/Illustration/face-star.svg?react";
import { Button } from "@/components";

interface Props extends React.ComponentProps<"div"> {}

export const ProposalBanner = ({ ...props }: Props) => {
  return (
    <div
      {...props}
      className="bg-main-gray grid grid-cols-1 md:grid-cols-2 py-10 md:py-0 px-10 my-16 rounded-3xl items-center  max-h-80 "
    >
      <div>
        <h4 className="text-xl font-medium"> Let's make things happen</h4>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button className="my-4">Get your free proposal</Button>
      </div>

      <div className="md:flex items-center justify-center hidden ">
        <FaceStar className="size-60 relative scale-125 " />
      </div>
    </div>
  );
};
