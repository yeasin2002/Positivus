import { Button, Input } from "@/components/ui";

interface Props extends React.ComponentProps<"div"> {}

export const FooterContact = ({ ...props }: Props) => {
  return (
    <div {...props} className="grid grid-cols-1 md:grid-cols-2 my-8 ">
      <div className="text-center md:text-start space-y-3 my-8">
        <h6 className="rounded-lg bg-main-green px-2 text-xl font-bold text-main-black inline">
          Contact Us
        </h6>
        <p>Email: info@positivus.com</p>
        <p>Phone: 555-567-8901</p>
        <p>
          Address: 1234 Main St <br className="hidden md:block" />
          Moonstone City, Stardust State 12345
        </p>
      </div>
      <div className="bg-[#292A32] grid  grid-cols-1 md:grid-cols-2 p-8 rounded-xl gap-x-2 gap-y-4 items-center">
        <Input
          placeholder="Email"
          className=" py-6   border border-main-gray bg-[#292A32] placeholder:text-main-gray placeholder:text-lg"
        />
        <Button className=" py-6   bg-main-green text-main-black ">
          Subscribe to news
        </Button>
      </div>
    </div>
  );
};
