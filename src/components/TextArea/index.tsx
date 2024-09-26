import { ComponentProps, forwardRef } from "react";

import { cn } from "@/lib/utils";

type TextAreaProps = ComponentProps<"textarea">;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "h-28 w-full rounded-md border border-gray-1 bg-neutral-1 p-2 outline-none focus-visible:border-blue-1 focus-visible:bg-white",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";
