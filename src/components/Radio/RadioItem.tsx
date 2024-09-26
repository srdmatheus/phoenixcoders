import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { Indicator, Item } from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

export const RadioItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => {
  return (
    <Item
      ref={ref}
      className={cn(
        "aspect-square size-4 rounded-full border border-black",
        className
      )}
      {...props}
    >
      <Indicator className="flex items-center justify-center">
        <div className="size-2.5 rounded-full bg-black" />
      </Indicator>
    </Item>
  );
});
RadioItem.displayName = Item.displayName;
