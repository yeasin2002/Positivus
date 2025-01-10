import LinkedinIcon from "@/assets/icons/linkedin.svg?react";
import { teamMemberData } from "./teamMember.data";

interface Props extends React.ComponentProps<"div"> {
  data: (typeof teamMemberData)[number];
}

export const TeamCard = ({ data, ...props }: Props) => {
  return (
    <div
      {...props}
      className="border border-main-black/70 border-b-4 border-b-main-black px-4 md:px-8 py-4 rounded-3xl"
    >
      <div id="user-data" className="flex items-center gap-2">
        <img src={data.image} />
        <div className="flex flex-col justify-between flex-1">
          <a href={data.linkedinUrl} className="self-end">
            <LinkedinIcon />
          </a>
          <div>
            <p> {data.name} </p>
            <p> {data.position} </p>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-main-black my-4"> </div>

      <div>{data.review}</div>
    </div>
  );
};
