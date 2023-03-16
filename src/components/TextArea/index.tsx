import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineIndigo51: "bg-white_A700 border-[1px] border-indigo_51 border-solid",
};
const shapes = { RoundedBorder4: "rounded-[4px]" };
const sizes = { sm: "pb-[35px] pt-[20px] px-[20px]" };

export type TextAreaProps = Omit<
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "size" | "prefix" | "type"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    errors: string[];
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      children,
      shape = "",
      variant = "",
      size = "",
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${(shape && shapes[shape]) || ""} ${
            (size && sizes[size]) || ""
          } ${(variant && variants[variant]) || ""}`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);

export { TextArea };
