import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[24px] md:text-[26px] text-[28px]",
  h2: "font-bold sm:text-[20px] md:text-[22px] text-[24px]",
  h3: "font-medium text-[20px]",
  h4: "text-[18px]",
  h5: "text-[16px]",
  h6: "text-[14px]",
  body1: "text-[12px]",
  body2: "font-medium text-[10px]",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
