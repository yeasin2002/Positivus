import { SectionsHeader } from "@/components/common";

interface Props extends React.ComponentProps<"div"> {}

export const WorkingProcess = ({ ...props }: Props) => {
  return (
    <div {...props} className="my-10">
      <SectionsHeader
        heading="Our Working Process "
        description1="Step-by-Step Guide to Achieving"
        description2="Your Business Goals"
      />
    </div>
  );
};
