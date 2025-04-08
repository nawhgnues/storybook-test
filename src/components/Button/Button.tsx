import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";

import { cn } from "../../lib/utils";

const buttonVariants = cva("cursor-pointer", {
  variants: {
    variant: {
      more: "bg-transparent hover:underline text-black-800",
      register: "bg-black hover:bg-gray-800 text-white",
      cancel:
        "bg-transparent border border-gray-300 hover:bg-gray-300 hover:text-white text-gray-500",
    },

    shape: {
      square: "rounded-none",
      primary: "rounded-md",
      full: "rounded-full",
    },

    size: {
      small: "text-sm py-1 px-2",
      medium: "text-base py-2 px-6",
      large: "text-lg py-3 px-6",
    },

    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },

  defaultVariants: {
    variant: "more",
    shape: "square",
    size: "small",
    weight: "normal",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  variant,
  shape,
  size,
  weight,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, shape, size, weight }))}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
