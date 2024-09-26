import { ComponentProps, forwardRef } from "react";

import { cn } from "@/lib/utils";

type InputProps = ComponentProps<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "h-12 w-full rounded-md border border-gray-1 bg-neutral-1 p-2 text-foreground outline-none focus-visible:border-blue-1 focus-visible:bg-white",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
