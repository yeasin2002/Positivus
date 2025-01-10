import { SectionsHeader } from "@/components/common";
import { CaseStudiesForLargeDevice } from "./CaseStudiesForLargeDevice";
import { CaseStudyForSmallDevice } from "./CaseStudyForSmallDevice";

interface Props extends React.ComponentProps<"div"> {}

export const CaseStudies = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading="Case Studies"
        description1="Explore Real-Life Examples of Our Proven Digital Marketing "
        description2="Success through Our Case Studies"
      />
      <CaseStudiesForLargeDevice />
      <CaseStudyForSmallDevice />
    </div>
  );
};
