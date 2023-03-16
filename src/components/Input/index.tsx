import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineIndigo51: "bg-white_A700 border-[1px] border-indigo_51 border-solid",
  OutlineIndigo51_1: "border-[1px] border-indigo_51 border-solid",
  FillDeeporange3006c: "bg-deep_orange_300_6c",
  FillGray51: "bg-gray_51",
  srcOutlineBluegray200:
    "bg-white_A700 border-[1px] border-bluegray_200 border-solid",
  srcFillGray51: "bg-gray_51",
  srcOutlineBlack9000c: "bg-white_A700 shadow-bs",
} as const;
const shapes = {
  RoundedBorder4: "rounded-[4px]",
  CustomBorderBL4:
    "rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px]",
  RoundedBorder8: "rounded-[8px]",
  srcRoundedBorder4: "rounded-[4px]",
} as const;
const sizes = {
  sm: "pb-[6px] pl-[3px] pr-[6px] pt-[12px]",
  md: "pb-[22px] pr-[17px] pt-[17px]",
  lg: "pb-[22px] pt-[17px] px-[17px]",
  xl: "pr-[19px] py-[19px]",
  "2xl": "p-[19px]",
  "3xl": "pb-[16px] pr-[16px] pt-[21px]",
  "4xl": "pb-[16px] pt-[21px] px-[16px]",
  "5xl": "sm:pr-[20px] pr-[23px] py-[23px]",
  smSrc: "pr-[13px] py-[13px]",
  mdSrc: "pb-[16px] pt-[21px]",
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape = "",
      variant = "",
      size = "",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ""} 
              ${(variant && variants[variant]) || ""} 
              ${(size && sizes[size]) || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

export { Input };
