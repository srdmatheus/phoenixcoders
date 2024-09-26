"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { Root } from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

export const RadioGroup = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => {
  return <Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = Root.displayName;
