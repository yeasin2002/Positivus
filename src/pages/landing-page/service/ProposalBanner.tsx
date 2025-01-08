import React from "react";

interface Props extends React.ComponentProps<"div"> {}

export const ProposalBanner = ({ ...props }: Props) => {
  return (
    <div {...props} className="bg-main-gray grid grid-cols-1 md:grid-cols-2">
      <div>
        <h4> Let's make things happen</h4>
      </div>
    </div>
  );
};
