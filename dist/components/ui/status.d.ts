import { Status as ChakraStatus } from "@chakra-ui/react";
import * as React from "react";
type StatusValue = "success" | "error" | "warning" | "info";
export interface StatusProps extends ChakraStatus.RootProps {
    value?: StatusValue;
}
export declare const Status: React.ForwardRefExoticComponent<StatusProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=status.d.ts.map