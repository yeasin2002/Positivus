interface Props extends React.ComponentProps<"div"> {}

export const ContactForm = ({ ...props }: Props) => {
  return (
    <div {...props} className="">
      ContactForm
    </div>
  );
};
