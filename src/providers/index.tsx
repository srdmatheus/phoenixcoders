"use client";

import { ReactNode } from "react";

import { QueryProvider } from "./query-provider";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => (
  <>
    <QueryProvider>{children}</QueryProvider>
  </>
);
