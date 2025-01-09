import { TestimonialsReviewData } from "./testimonialsReview.data";

interface Props extends React.ComponentProps<"div"> {
  data: (typeof TestimonialsReviewData)[number];
}

export const ReviewCards = ({ data, ...props }: Props) => {
  return (
    <div {...props}>
      <div className="border border-main-green py-10 mt-10 rounded-3xl  text-main-gray p-8 min-h-36">
        {data.review}
      </div>

      <div className="mx-auto ml-10 mt-2">
        <p className="text-main-green"> {data.name} </p>
        <p className="text-white"> {data.position} </p>
      </div>
    </div>
  );
};
