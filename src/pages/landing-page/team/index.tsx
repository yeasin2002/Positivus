import { Button } from "@/components";

import { SectionsHeader } from "@/components/common";

import { TeamCard } from "./TeamCard";
import { teamMemberData } from "./teamMember.data";

interface Props extends React.ComponentProps<"div"> {}

export const Team = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading="Team"
        description1="Meet the skilled and experienced team behind our "
        description2="successful digital marketing strategies"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMemberData.map((data) => (
          <TeamCard data={data} />
        ))}
      </div>

      <div className="flex items-start justify-end mt-4">
        <Button>See All Of them </Button>
      </div>
    </div>
  );
};
