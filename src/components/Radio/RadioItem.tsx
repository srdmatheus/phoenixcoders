import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { Indicator, Item } from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

type RadioItemProps = ComponentPropsWithoutRef<typeof Item> & {
  name: string;
};

export const RadioItem = forwardRef<ElementRef<typeof Item>, RadioItemProps>(
  ({ className, name, ...props }, ref) => {
    return (
      <label className="flex items-center space-x-2 text-gray-2">
        <Item
          ref={ref}
          className={cn(
            "aspect-square size-5 rounded-full border-2 border-gray-2",
            "data-[state=checked]:border-blue-1",
            className
          )}
          {...props}
        >
          <Indicator className="flex items-center justify-center">
            <div className="size-3 rounded-full bg-blue-1" />
          </Indicator>
        </Item>
        <span className="cursor-pointer">{name}</span>
      </label>
    );
  }
);

RadioItem.displayName = Item.displayName;
