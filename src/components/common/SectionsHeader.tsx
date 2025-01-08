import { cn } from "@/utils";

interface Props extends React.ComponentProps<"div"> {
  heading: string;
  description1: string;
  description2: string;
}

export const SectionsHeader = ({
  heading,
  description1,
  description2,
  className,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        " flex   md:items-center gap-x-10 flex-col md:flex-row gap-y-4 my-10",
        className
      )}
      {...props}
    >
      <h3 className="section-header"> {heading} </h3>
      <p className="text-sm ">
        {description1}
        <br />
        {description2}
      </p>
    </div>
  );
};
