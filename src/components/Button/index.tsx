import React from "react";

const shapes = {
  RoundedBorder4: "rounded-[4px]",
  CircleBorder28: "rounded-[28px]",
  CircleBorder24: "rounded-[24.035px]",
  CircleBorder20: "rounded-[20px]",
  RoundedBorder10: "rounded-[10px]",
  icbRoundedBorder4: "rounded-[4px]",
  icbCircleBorder24: "rounded-[24px]",
  icbCircleBorder20: "rounded-[20px]",
  icbCircleBorder28: "rounded-[28px]",
  icbCircleBorder16: "rounded-[16px]",
  icbCircleBorder31: "rounded-[31px]",
  icbCircleBorder40: "rounded-[40px]",
  icbRoundedBorder6: "rounded-[6.665px]",
} as const;
const variants = {
  FillGray103: "bg-gray_103 text-indigo_401",
  OutlineIndigo51:
    "bg-white_A700 border-[1px] border-indigo_51 border-solid text-bluegray_800",
  FillDeeporange300: "bg-deep_orange_300 text-white_A700",
  OutlineBluegray200:
    "bg-white_A700 border-[1px] border-bluegray_200 border-solid shadow-bs text-bluegray_800",
  FillGray51: "bg-gray_51",
  FillWhiteA700: "bg-white_A700 text-deep_orange_300",
  FillBluegray900: "bg-bluegray_900 text-white_A700",
  OutlineIndigo51_1:
    "border-[1px] border-indigo_51 border-solid text-bluegray_800",
  FillIndigo401: "bg-indigo_401 text-white_A700",
  FillRed51: "bg-red_51 text-deep_orange_300",
  FillBlack90066: "bg-black_900_66 text-white_A700",
  FillRed600: "bg-red_600 text-white_A700",
  FillGreen700: "bg-green_700 text-white_A700",
  FillAmber300: "bg-amber_300 text-bluegray_800",
  OutlineBluegray900:
    "border-[1px] border-bluegray_900 border-solid text-bluegray_900",
  FillRed40019: "bg-red_400_19 text-red_600",
  FillIndigo40019: "bg-indigo_400_19 text-indigo_401",
  FillDeeporange50: "bg-deep_orange_50 text-deep_orange_300",
  icbOutlineIndigo51: "border-[1px] border-indigo_51 border-solid",
  icbFillWhiteA700: "bg-white_A700",
  icbFillGray101: "bg-gray_101",
  icbFillYellow50: "bg-yellow_50",
  icbFillGray102: "bg-gray_102",
  icbFillGray52: "bg-gray_52",
  icbFillGray51: "bg-gray_51",
  icbFillRed52: "bg-red_52",
  icbOutlineGreen700: "border-[2px] border-green_700 border-solid",
  icbOutlineBlack9000c: "bg-white_A700 shadow-bs",
  icbOutlineWhiteA700:
    "bg-deep_orange_300 outline outline-[4px] outline-white_A700",
  icbOutlineBluegray400:
    "bg-white_A700 outline outline-[0.9px] outline-bluegray_400",
  icbOutlineDeeporange300:
    "bg-white_A700 outline outline-[0.9px] outline-deep_orange_300",
  icbOutlineBluegray800:
    "bg-white_A700 outline outline-[0.9px] outline-bluegray_800",
  icbFillDeeporange300: "bg-deep_orange_300",
} as const;
const sizes = {
  sm: "py-[2px]",
  md: "p-[6px]",
  lg: "pl-[8px] py-[8px]",
  xl: "pr-[11px] py-[11px]",
  "2xl": "p-[11px]",
  "3xl": "p-[14px]",
  "4xl": "p-[17px]",
  "5xl": "pl-[17px] py-[17px]",
  "6xl": "pr-[19px] py-[19px]",
  "7xl": "p-[21px] sm:px-[20px]",
  smIcn: "p-[2px]",
  mdIcn: "p-[6px]",
  lgIcn: "p-[10px]",
  xlIcn: "p-[13px]",
  "2xlIcn": "p-[18px]",
  "3xlIcn": "p-[26px] sm:px-[20px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "",
  size = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
