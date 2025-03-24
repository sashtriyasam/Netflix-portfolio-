"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Disable the ESLint rule for this specific case
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ThemeProviderProps = React.PropsWithChildren<any>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
