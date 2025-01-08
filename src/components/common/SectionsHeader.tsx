import { cn } from "@/utils";

interface Props extends React.ComponentProps<"div"> {
  heading: string;
  description: string;
}

export const SectionsHeader = ({
  heading,
  description,
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
      <p className="text-sm md:w-[50%]   ">{description}</p>
    </div>
  );
};
