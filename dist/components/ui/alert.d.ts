import { Alert as ChakraAlert } from "@chakra-ui/react";
import * as React from "react";
export interface AlertProps extends Omit<ChakraAlert.RootProps, "title"> {
    startElement?: React.ReactNode;
    endElement?: React.ReactNode;
    title?: React.ReactNode;
    icon?: React.ReactElement;
    closable?: boolean;
    onClose?: () => void;
}
export declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=alert.d.ts.map