import { forwardRef, ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/constants";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all duration-200 min-h-[44px] px-6 rounded-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-gold-500 text-navy-900 hover:bg-gold-600 shadow-md hover:shadow-lg",
        secondary: "border-2 border-navy-600 text-navy-600 hover:bg-navy-50",
        outline: "border-2 border-white text-white hover:bg-white/10",
        ghost: "text-navy-600 hover:bg-navy-50",
      },
      size: {
        sm: "text-sm px-4 h-10",
        md: "text-base px-6 h-12",
        lg: "text-lg px-8 h-14",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      isLoading,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>Loading...</span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
