import { Link } from "@tanstack/react-router";

interface Props extends React.ComponentProps<"div"> {}

export const FooterCopyright = ({ ...props }: Props) => {
  const fulllYear = new Date().getFullYear();
  return (
    <div {...props}>
      <div className="h-1 bg-main-gray/30  rounded-xl my-8"></div>
      <div className="flex items-center gap-x-10   flex-col md:flex-row pb-8 md:pb-0">
        <p className="text-center text-sm md:text-base">
          © {fulllYear} Positivus. All Rights Reserved.
        </p>
        <Link to="/" className="underline">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};
