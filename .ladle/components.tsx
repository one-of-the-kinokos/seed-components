import React from "react";
import type { GlobalProvider } from "@ladle/react";
import { Provider as ChakraUiProvider } from "../src/components/ui/provider";
import "github-markdown-css";

export const Provider: GlobalProvider = ({ children }) => (
  <>
    <ChakraUiProvider>{children}</ChakraUiProvider>
  </>
);
