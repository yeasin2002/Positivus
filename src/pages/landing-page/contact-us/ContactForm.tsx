import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button, Input, Label, Textarea } from "@/components/ui";
import { contactFormSchema, ContactSchemaType } from "./contactSchema";

interface Props extends React.ComponentProps<"form"> {}

export const ContactForm = ({ ...props }: Props) => {
  const { register, handleSubmit } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = () => {};

  return (
    <form
      {...props}
      onSubmit={handleSubmit(onSubmit)}
      className=" w-full lg:w-1/2 mt-10 space-y-6"
    >
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          className="rounded-xl border  border-main-black"
          {...register("name")}
          placeholder="name"
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          placeholder="Email"
          className="rounded-xl border  border-main-black"
          {...register("email")}
        />
      </div>

      <div>
        <Label htmlFor="message">Name</Label>
        <Textarea
          placeholder="Message"
          className="rounded-xl border  border-main-black px-4 py-2 min-h-32"
          {...register("message")}
        />
      </div>

      <Button type="submit" className="w-full  py-6 rounded-xl">
        Send Message
      </Button>
    </form>
  );
};
