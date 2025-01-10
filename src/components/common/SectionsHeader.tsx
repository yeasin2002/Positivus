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
        " flex   justify-center items-center text-center md:justify-start md:items-start md:text-start gap-x-10 flex-col md:flex-row gap-y-4 my-10",
        className
      )}
      {...props}
    >
      <h3 className="rounded-lg bg-main-green px-2 text-3xl text-nowrap md:text-4xl font-bold text-main-black  w-min md:w-max ">
        {heading}
      </h3>
      <p className="text-sm ">
        {description1}
        <br />
        {description2}
      </p>
    </div>
  );
};
