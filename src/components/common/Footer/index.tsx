import { FooterContact } from "./FooterContact";
import { FooterCopyright } from "./FooterCopyright";
import { FooterNavigation } from "./FooterNavigation";

interface Props extends React.ComponentProps<"div"> {}

export const Footer = ({ ...props }: Props) => {
  return (
    <div
      {...props}
      className="rounded-t-3xl bg-main-black mt-10 text-main-gray pt-4 px-2 md:p-8 "
    >
      <FooterNavigation />
      <FooterContact />
      <FooterCopyright />
    </div>
  );
};
