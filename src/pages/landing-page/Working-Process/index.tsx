import { SectionsHeader } from "@/components/common";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WorkingProcessData } from "./WorkingProcess.data";

interface Props extends React.ComponentProps<"div"> {}

export const WorkingProcess = ({ ...props }: Props) => {
  return (
    <div {...props} className="my-10">
      <SectionsHeader
        heading="Our Working Process "
        description1="Step-by-Step Guide to Achieving"
        description2="Your Business Goals"
      />

      <div className="my-6">
        <Accordion type="multiple">
          {WorkingProcessData.map((data, index) => (
            <AccordionItem
              value={data.header}
              key={data.header + data.details}
              className="my-4"
            >
              <AccordionTrigger>
                <span className="flex items-center gap-x-4">
                  <span className="text-4xl"> {index + 1} </span>
                  <span className="text-lg">{data.header}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>{data.details}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
