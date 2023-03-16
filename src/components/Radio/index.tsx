import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  FillGreen700_1: "bg-green_700",
  FillRed600: "bg-red_600",
  FillGreen700: "bg-green_700",
  FillIndigo401: "bg-indigo_401",
  FillAmber300: "bg-amber_300",
  FillRed600_1: "bg-red_600",
  FillWhiteA700: "bg-white_A700",
  FillGreen700_2: "bg-green_700",
} as const;

const sizes = { sm: "pt-[5px]", md: "pb-[6px]" } as const;

export type CheckboxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type"
> &
  Partial<{
    inputClassName: string;
    className: string;
    name: string;
    label: string;
    checked: boolean;
    errors: string[];
    id: string;

    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const Radio = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      label = "",
      checked = false,
      errors = [],
      variant = "",
      size = "",
      id = "radio_id",
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = React.useState(checked);

    React.useEffect(() => {
      setValue(checked);
    }, [checked]);

    const handleChange = (event) => {
      setValue(event.target.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(size && sizes[size]) || ""} ${
              (variant && variants[variant]) || ""
            }`}
            ref={ref}
            type="radio"
            name={name}
            aria-checked={!!value}
            checked={!!value}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

export { Radio };
